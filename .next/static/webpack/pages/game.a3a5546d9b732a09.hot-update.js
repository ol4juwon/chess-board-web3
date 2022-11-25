"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAuthContext */ \"./hooks/useAuthContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = (param)=>{\n    let { locaction  } = param;\n    var ref;\n    _s();\n    const { user  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext)();\n    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(locaction);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"\".concat(loc, \" \"),\n                children: [\n                    \"Chess \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"noto-chess-board\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 45\n                    }, undefined),\n                    \" Games\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().account),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().balance),\n                        children: [\n                            (user === null || user === void 0 ? void 0 : user.balance) || 0,\n                            \"ETH\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 \".concat(locaction ? \"bg-primary-grey text-colors-white\" : \"bg-colors-white\", \" rounded-r-md text-center flex items-center justify-center \"),\n                        children: (user === null || user === void 0 ? void 0 : (ref = user.address) === null || ref === void 0 ? void 0 : ref.substr(0, 6)) || \"0xdd\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"Y0IJenkmMjZeWqNx2DgET2zIwqw=\", false, function() {\n    return [\n        _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUztBQUlRO0FBSXpELE1BQU1JLFNBQW9CLFNBQXVCO1FBQXRCLEVBQUNDLFVBQVMsRUFBTztRQVl6QkM7O0lBWGYsTUFBTSxFQUFDQSxLQUFJLEVBQUMsR0FBR0gscUVBQWNBO0lBQzdCLE1BQU0sQ0FBQ0ksUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDUSxRQUFRQyxHQUFHLENBQUNMO0lBQ1oscUJBQ0ksOERBQUNNO1FBQUlDLFdBQVdWLHNFQUFVOzswQkFDdEIsOERBQUNZO2dCQUFHRixXQUFXLEdBQU8sT0FBSkcsS0FBSTs7b0JBQUk7a0NBQU0sOERBQUNDO3dCQUFLSixXQUFVOzs7Ozs7b0JBQTJCOzs7Ozs7OzBCQUMzRSw4REFBQ0Q7Z0JBQUlDLFdBQVdWLDBFQUFjOztrQ0FDMUIsOERBQUNTO3dCQUFJQyxXQUFXViwwRUFBYzs7NEJBQzFCSSxDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1ZLE9BQU8sS0FBRzs0QkFBRTs7Ozs7OztrQ0FFdEIsOERBQUNQO3dCQUFJQyxXQUFXLFNBQTZFLE9BQXBFUCxZQUFZLHNDQUFzQyxpQkFBaUIsRUFBQztrQ0FDMUZDLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsTUFBQUEsS0FBTWEsT0FBTyxjQUFiYixpQkFBQUEsS0FBQUEsSUFBQUEsSUFBZWMsT0FBTyxHQUFFLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqRDtHQWpCTWhCOztRQUNhRCxpRUFBY0E7OztLQUQzQkM7QUFtQk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuaW1wb3J0IGNoZXNzUGF3biBmcm9tICdAaWNvbmlmeS9pY29ucy1ub3RvL2NoZXNzLXBhd24nO1xuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tICcuLi9ob29rcy91c2VBdXRoQ29udGV4dCc7XG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGxvY2FjdGlvbj86IGFueTtcbn1cbmNvbnN0IE5hdmJhcjogRkM8UHJvcHM+ID0gKHtsb2NhY3Rpb259OlByb3BzKSA9PiB7XG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlQXV0aENvbnRleHQoKTtcbiAgICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKGxvY2FjdGlvbik7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7bG9jfSBgfT5DaGVzcyA8c3BhbiBjbGFzc05hbWU9J25vdG8tY2hlc3MtYm9hcmQnID48L3NwYW4+IEdhbWVzPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWxhbmNlfT5cbiAgICAgICAgICAgICAgICAgICB7dXNlcj8uYmFsYW5jZXx8IDB9RVRIXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTEvMiAke2xvY2FjdGlvbiA/ICdiZy1wcmltYXJ5LWdyZXkgdGV4dC1jb2xvcnMtd2hpdGUnIDogJ2JnLWNvbG9ycy13aGl0ZSd9IHJvdW5kZWQtci1tZCB0ZXh0LWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBgfT5cbiAgICAgICAgICAgICAgICAgIHt1c2VyPy5hZGRyZXNzPy5zdWJzdHIoMCw2KSB8fCAnMHhkZCd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZUF1dGhDb250ZXh0IiwiTmF2YmFyIiwibG9jYWN0aW9uIiwidXNlciIsIm5hdmJhciIsInNldE5hdmJhciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJuYXYiLCJoMSIsImxvYyIsInNwYW4iLCJhY2NvdW50IiwiYmFsYW5jZSIsImFkZHJlc3MiLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n"));

/***/ })

});