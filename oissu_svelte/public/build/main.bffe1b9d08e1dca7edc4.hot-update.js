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
/* harmony import */ var rehype_dom_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rehype-dom-parse */ "../node_modules/rehype-dom-parse/index.js");
/* harmony import */ var rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rehype-dom-stringify */ "../node_modules/rehype-dom-stringify/index.js");




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
            .use(rehype_dom_parse__WEBPACK_IMPORTED_MODULE_1__["default"])
            .use(rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_2__["default"], { fragment: true })
            .parse(unit);
        console.log(stringifiedChildren);
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
/******/ 	__webpack_require__.h = () => ("a605945e79cb660830d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bffe1b9d08e1dca7edc4.hot-update.js.map