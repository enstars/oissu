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
    const stringifiedChildren = (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)()
      .use(rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_1__["default"], { fragment: true })
      .stringify(unit);
    console.log(unit);
    console.log(stringifiedChildren);
    // if(unit.)
    switch (unit.tagName) {
      case "p":
        if (
          unit.children[0].tagName === "b" &&
          unit.children[0].children[0].value.trim().endsWith(":")
        ) {
          story.push(";");
        }

        // if(story[story.length-1].type === "line" && story[story.length-1].speaker)
        break;
      case "blockquote":
        break;
    }

    // unit.type = "root";

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
/******/ 	__webpack_require__.h = () => ("a9815a9543a39c04b41a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0566dbf9625513db737e.hot-update.js.map