import { unified } from "unified";
import rehypeDomStringify from "rehype-dom-stringify";

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

export default function parse(ast) {
  let story = {};
  let lines = [];
  // let currentUnit = {};
  ast.children[0].children.forEach((originalUnit) => {
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
          lines.push({
            type: "line",
            content: [stringifyHTML(unit)],
            speaker: character.children[0].value.trim().replace(":", "").trim(),
          });
        } else {
          lines[lines.length - 1].content.push(stringifyHTML(unit));
        }
        break;
      case "blockquote":
        if (originalUnit.properties.dataNoticeType) {
          lines.push({
            type: "block",
            content: "weh",
          });
          story.notice = {
            type: originalUnit.properties.dataNoticeType || "info",
            prompt: originalUnit.properties.dataNoticePrompt || false,
            content: stringifyHTML(originalUnit.children),
          };
        }
        lines.push({
          type: "block",
          content: originalUnit,
        });

        break;
      default:
        break;
    }

    // console.debug(stringifiedChildren);
    // lines.push({
    //     content: stringifiedChildren,
    // });
  });
  story.lines = lines;
  return story;
}
