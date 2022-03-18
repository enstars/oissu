import React from "react";
import ReactDOM from "react-dom";
import Oissu from "./Oissu";
// import reportWebVitals from "./reportWebVitals";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import rehypeStringify from "rehype-stringify";
import parse from "./lib/parse";
const omitDeep = require("omit-deep-lodash");

const oissuInstances = document.getElementsByClassName("oissu");
for (let i = 0; i < oissuInstances.length; i++) {
  const ast = omitDeep(
    unified()
      .use(rehypeParse, {
        fragment: true,
      })
      .parse(
        unified()
          .use(rehypeParse, {
            fragment: true,
          })
          .use(rehypeMinifyWhitespace)
          .use(rehypeStringify)
          .processSync(oissuInstances.item(i).outerHTML)
      ),
    "position"
  );
  console.debug(ast);
  const parsedStory = parse(ast);
  console.debug(parsedStory);
  ReactDOM.render(
    <React.StrictMode>
      <Oissu story={parsedStory} />
    </React.StrictMode>,
    oissuInstances.item(i)
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
