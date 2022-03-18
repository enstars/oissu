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
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ "./node_modules/unified/lib/index.js");
/* harmony import */ var rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rehype-dom-stringify */ "./node_modules/rehype-dom-stringify/index.js");



function parse(ast) {
  let story = [];
  // let currentUnit = {};
  ast.forEach((unit) => {
    console.log(unit);
    console.log(stringifiedChildren);
    // if(unit.)
    switch (unit.tagName) {
      case "p":
        if (
          unit.children[0].tagName === "b" &&
          unit.children[0].children[0].value.trim().endsWith(":")
        ) {
          unit.type = "root";
          unit.tagName = null;
          const stringifiedChildren = (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)()
            .use(rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_1__["default"], { fragment: true })
            .stringify(unit);
          story.push({
            type: "line",
            content: stringifiedChildren,
            speaker: unit.children[0].children[0].value
              .trim()
              .replace(":", "")
              .trim(),
          });
        }

        // if(story[story.length-1].type === "line" && story[story.length-1].speaker)
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c4e938c8f9d195d3a34e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3f881f44e9ddc1b770ab.hot-update.js.map