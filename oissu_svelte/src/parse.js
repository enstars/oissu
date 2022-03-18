import { unified } from "unified";
import rehypeDomStringify from "rehype-dom-stringify";

export default function parse(ast) {
  let story = [];
  // let currentUnit = {};
  ast.forEach((originalUnit) => {
    let unit = JSON.parse(JSON.stringify(originalUnit));
    // console.log(unit);
    // console.log(stringifiedChildren);
    // if(unit.)
    switch (unit.tagName) {
      case "p":
        unit.type = "root";
        unit.tagName = null;
        if (
          unit.children[0].tagName === "b" &&
          unit.children[0].children[0].value.trim().endsWith(":")
        ) {
          const character = unit.children.shift();
          const stringifiedChildren = unified()
            .use(rehypeDomStringify, { fragment: true })
            .stringify(unit);
          story.push({
            type: "line",
            content: [stringifiedChildren],
            character: character.children[0].value
              .trim()
              .replace(":", "")
              .trim(),
          });
        } else {
          const stringifiedChildren = unified()
            .use(rehypeDomStringify, { fragment: true })
            .stringify(unit);
          story[story.length - 1].content.push(stringifiedChildren);
        }
        break;
      case "blockquote":
        break;
    }

    // console.debug(stringifiedChildren);
    // story.push({
    //     content: stringifiedChildren,
    // });
  });
  return story;
}
