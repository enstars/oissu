import { unified } from "unified";
import rehypeDomStringify from "rehype-dom-stringify";
import { select } from "hast-util-select";

function stringifyHTML(source) {
  if (Array.isArray(source)) {
    let allHTML = "";
    source.forEach((s) => {
      allHTML += stringifyHTML(s);
    });
    return allHTML;
  }
  return unified()
    .use(rehypeDomStringify, { fragment: true })
    .stringify(source);
}

async function getIconpack(series, pack) {
  try {
    let response = await fetch(
      `https://uchuu.yuukun.dev/oissu/icons/${series}/${pack}/_pack.json`
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
    return { error: true, icons: [] };
  }
}

export default async function parse(ast) {
  let story = {
    series: "",
    iconpacks: [],
    icons: {},
    links: {},
    units: [],
  };
  let inputDiv = ast.children[0];

  story.series = inputDiv.properties.dataOissuSeries || "enstars";
  story.iconpacks = [story.series === "enstars" ? "es-idol-outfit" : "default"];
  if (inputDiv.properties.dataOissuDisplay)
    story.iconpacks = [
      ...inputDiv.properties.dataOissuDisplay.split(","),
    ].concat(story.iconpacks);

  // fetch icons
  const iconsJSON = Promise.all(
    story.iconpacks.map((p) => getIconpack(story.series, p))
  );
  (await iconsJSON).forEach((pack) => {
    pack.icons.forEach((icon) => {
      const key = icon.commonname.toLowerCase();
      if (!story.icons[key]) {
        story.icons[key] = icon.filename;
      }
    });
  });

  inputDiv.children.forEach((originalUnit) => {
    let unit = JSON.parse(JSON.stringify(originalUnit));
    switch (unit.tagName) {
      case "p":
        unit.type = "root";
        unit.tagName = null;

        const firstChild = unit.children[0];
        if (
          firstChild.tagName === "b" &&
          firstChild.children[0].value.trim().endsWith(":")
        ) {
          const character = unit.children.shift();
          story.units.push({
            type: "line",
            content: [stringifyHTML(unit)],
            speaker: character.children[0].value.trim().replace(":", "").trim(),
          });
        } else {
          story.units[story.units.length - 1].content.push(stringifyHTML(unit));
        }
        break;
      case "blockquote":
        if (unit.properties.dataNoticeType) {
          story.notice = {
            type: unit.properties.dataNoticeType || "info",
            prompt: unit.properties.dataNoticePrompt || false,
            content: stringifyHTML(unit.children),
          };
        } else if (
          unit.properties.className &&
          unit.properties.className.includes("oissu-nav")
        ) {
          ["next", "prev", "directory"].forEach((l) => {
            const link = select(`[data-oissu-${l}]`, unit);
            if (link) story.links[l] = link.properties.href;
          });
        } else {
          unit.children.forEach((p) => {
            story.units.push({
              type: "block",
              content:
                p.type === "element" ? stringifyHTML(p.children) : p.value,
              blockType: unit.tagName,
            });
          });
        }

        break;
      default:
        story.units.push({
          type: "block",
          content: stringifyHTML(unit),
          blockType: unit.tagName,
        });
        break;
    }
  });
  return story;
}
