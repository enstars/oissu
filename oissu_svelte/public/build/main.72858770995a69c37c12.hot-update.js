"use strict";
self["webpackHotUpdatesvelte_app"]("main",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ "../node_modules/unified/lib/index.js");
/* harmony import */ var rehype_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rehype-parse */ "../node_modules/rehype-parse/index.js");
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./src/App.svelte");




document.querySelectorAll(".oissu").forEach((element) => {
    const ast = (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)()
        .use(rehype_parse__WEBPACK_IMPORTED_MODULE_2__["default"], {
            fragment: true,
            verbose: false,
        })
        .parse(element.outerHTML);
    console.debug(ast);
    element.innerHTML = "";
    new _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
        target: element,
        props: {
            ast: ast,
        },
    });
    // }
});

// export default app;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ec88a5683522799f7e7b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.72858770995a69c37c12.hot-update.js.map