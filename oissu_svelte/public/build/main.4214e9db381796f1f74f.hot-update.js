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
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ "../node_modules/unified/lib/index.js");
/* harmony import */ var rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rehype-dom-stringify */ "../node_modules/rehype-dom-stringify/index.js");




function parse(ast) {
    let story = [];
    let currentUnit = {};
    ast.forEach((unit) => {
        console.log(unit);
        // if(unit.)
        switch (unit.tagName) {
            case "p":
                break;
            case "blockquote":
                break;
        }

        const stringifiedChildren = (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)()
            .use(rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_1__["default"], { fragment: true })
            .stringify(unit);
        console.debug(stringifiedChildren);
        story.push({
            content: stringifiedChildren,
        });
    });
    return story;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("16fc9d53165e684713fd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4214e9db381796f1f74f.hot-update.js.map