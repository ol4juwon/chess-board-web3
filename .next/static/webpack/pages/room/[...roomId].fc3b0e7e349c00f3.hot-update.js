"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/room/[...roomId]",{

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuthContext */ \"./hooks/useAuthContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = (param)=>{\n    let { locaction  } = param;\n    var ref;\n    _s();\n    const { user  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext)();\n    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(locaction);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().account),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().balance),\n                        children: [\n                            (user === null || user === void 0 ? void 0 : user.balance) || 0,\n                            \"ETH\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 \".concat(locaction ? \"bg-primary-grey text-colors-white\" : \"bg-colors-white\", \" rounded-r-md text-center flex items-center justify-center \"),\n                        children: (user === null || user === void 0 ? void 0 : (ref = user.address) === null || ref === void 0 ? void 0 : ref.substr(0, 6)) || \"0xdd\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"UzTwK0I8yDAmOOLgR/WfsNW8+6M=\", false, function() {\n    return [\n        _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUztBQUlRO0FBSXpELE1BQU1JLFNBQW9CLFNBQTBCO1FBQXpCLEVBQUVDLFVBQVMsRUFBUztRQWlCcENDOztJQWhCVCxNQUFNLEVBQUVBLEtBQUksRUFBRSxHQUFHSCxxRUFBY0E7SUFDL0IsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUNRLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDWixxQkFDRSw4REFBQ007UUFBSUMsV0FBV1Ysc0VBQVU7OzBCQUN0Qiw4REFBQ1M7Ozs7OzBCQUlILDhEQUFDQTtnQkFBSUMsV0FBV1YsMEVBQWM7O2tDQUM1Qiw4REFBQ1M7d0JBQUlDLFdBQVdWLDBFQUFjOzs0QkFBR0ksQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNUyxPQUFPLEtBQUk7NEJBQUU7Ozs7Ozs7a0NBQ3BELDhEQUFDSjt3QkFDQ0MsV0FBVyxTQUVWLE9BRENQLFlBQVksc0NBQXNDLGlCQUFpQixFQUNwRTtrQ0FFQUMsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxNQUFBQSxLQUFNVSxPQUFPLGNBQWJWLGlCQUFBQSxLQUFBQSxJQUFBQSxJQUFlVyxPQUFPLEdBQUcsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFDO0dBdEJNYjs7UUFDYUQsaUVBQWNBOzs7S0FEM0JDO0FBd0JOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeD8xYjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xuaW1wb3J0IGNoZXNzUGF3biBmcm9tIFwiQGljb25pZnkvaWNvbnMtbm90by9jaGVzcy1wYXduXCI7XG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9ob29rcy91c2VBdXRoQ29udGV4dFwiO1xuaW50ZXJmYWNlIFByb3BzIHtcbiAgbG9jYWN0aW9uPzogYW55O1xufVxuY29uc3QgTmF2YmFyOiBGQzxQcm9wcz4gPSAoeyBsb2NhY3Rpb24gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoQ29udGV4dCgpO1xuICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zb2xlLmxvZyhsb2NhY3Rpb24pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxhbmNlfT57dXNlcj8uYmFsYW5jZSB8fCAwfUVUSDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgdy0xLzIgJHtcbiAgICAgICAgICAgIGxvY2FjdGlvbiA/IFwiYmctcHJpbWFyeS1ncmV5IHRleHQtY29sb3JzLXdoaXRlXCIgOiBcImJnLWNvbG9ycy13aGl0ZVwiXG4gICAgICAgICAgfSByb3VuZGVkLXItbWQgdGV4dC1jZW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYH1cbiAgICAgICAgPlxuICAgICAgICAgIHt1c2VyPy5hZGRyZXNzPy5zdWJzdHIoMCwgNikgfHwgXCIweGRkXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZUF1dGhDb250ZXh0IiwiTmF2YmFyIiwibG9jYWN0aW9uIiwidXNlciIsIm5hdmJhciIsInNldE5hdmJhciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJhY2NvdW50IiwiYmFsYW5jZSIsImFkZHJlc3MiLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n"));

/***/ })

});