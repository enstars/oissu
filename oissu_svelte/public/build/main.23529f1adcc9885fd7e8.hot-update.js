"use strict";
self["webpackHotUpdatesvelte_app"]("main",{

/***/ "./src/parse.js":
/*!**********************!*\
  !*** ./src/parse.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parse)
/* harmony export */ });




function parse(ast) {
  let story = [];
  // let currentUnit = {};
  ast.forEach((unit) => {
    // const stringifiedChildren = unified()
    //   .use(rehypeDomStringify, { fragment: true })
    //   .stringify(unit);
    console.log(unit);
    // if(unit.)
    switch (unit.tagName) {
      case "p":
        // if (unit.children) {
        // }
        // if(story[story.length-1].type === "line" && story[story.length-1].speaker)
        break;
      case "blockquote":
        break;
    }

    unit.type = "root";

    // console.debug(stringifiedChildren);
    // story.push({
    //     content: stringifiedChildren,
    // });
  });
  return story;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc83228356a6b821ac1d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.23529f1adcc9885fd7e8.hot-update.js.map