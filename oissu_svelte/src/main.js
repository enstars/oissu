import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import App from "./App.svelte";
import rehypeStringify from "rehype-stringify";
const omitDeep = require("omit-deep-lodash");

document.querySelectorAll(".oissu").forEach((element) => {
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
          .processSync(element.outerHTML)
      ),
    "position"
  );
  // const ast = unified()
  //     .use(rehypeParse, {
  //         fragment: true,
  //         verbose: false,
  //     })
  //     .parse(element.outerHTML);
  console.debug("ast");
  console.debug(ast);
  element.innerHTML = "";
  new App({
    target: element,
    props: {
      ast: ast,
    },
  });
  // }
});

// export default app;
