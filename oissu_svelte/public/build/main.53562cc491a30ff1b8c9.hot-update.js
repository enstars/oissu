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
    });
    return story;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("25a9c942a3a618746d36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.53562cc491a30ff1b8c9.hot-update.js.map