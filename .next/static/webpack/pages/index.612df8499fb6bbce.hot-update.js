"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLogin */ \"./hooks/useLogin.tsx\");\n/* harmony import */ var _components_SignInButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignInButton */ \"./components/SignInButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Web3 = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\nvar web3 = new Web3(Web3.givenProvider || \"ws://some.local-or-remote.node:8546\");\nfunction Home() {\n    _s();\n    const { login  } = (0,_hooks_useLogin__WEBPACK_IMPORTED_MODULE_3__.useLogin)();\n    const isWalletConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"not connected\");\n        }\n        console.log(ethereum);\n        try {} catch (error) {}\n    };\n    const signInOptions = [\n        {\n            name: \"Metamask\",\n            title: \"Sign in with Metamask\",\n            icon: \"/metamask_fox.svg\",\n            bg: \"#438FFE\",\n            onClick: ()=>{\n                console.log(\"metamask\");\n            }\n        },\n        {\n            name: \"Coinbase wallet\",\n            title: \"Sign in with Coinbase wallet\",\n            icon: \"/metamask_fox.svg\",\n            bg: \"\",\n            onClick: ()=>{\n                console.log(\"coinbase\");\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chess\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Chess app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css\",\n                        integrity: \"sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==\",\n                        crossOrigin: \"anonymous\",\n                        referrerPolicy: \"no-referrer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"../styles/Home.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://code.iconify.design/3/3.0.0/iconify.min.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading),\n                                children: \"Welcome to Chess Games\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagLine),\n                                children: \"Sign in with your wallet to be able to authenticate and play games\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-12 mx-auto\",\n                                children: signInOptions.map((opts)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignInButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: opts.title,\n                                        name: opts.name,\n                                        icon: opts.icon,\n                                        bg: opts.bg,\n                                        onClick: isWalletConnected\n                                    }, opts.name, false, {\n                                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 14\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex justify-center underline\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mx-auto\",\n                                    children: \"Show More Options\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 1\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"zPAv5sd64ojpThP2vPZLDpISgss=\", false, function() {\n    return [\n        _hooks_useLogin__WEBPACK_IMPORTED_MODULE_3__.useLogin\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUVhO0FBQ0s7QUFDRDtBQUNTO0FBQ3RELElBQUlLLE9BQU9DLG1CQUFPQSxDQUFDO0FBQ25CLElBQUlDLE9BQU8sSUFBSUYsS0FBS0EsS0FBS0csYUFBYSxJQUFJO0FBQzNCLFNBQVNDLE9BQU87O0lBQzdCLE1BQU0sRUFBQ0MsTUFBSyxFQUFFLEdBQUdQLHlEQUFRQTtJQUV6QixNQUFNUSxvQkFBb0IsVUFBWTtRQUNwQyxNQUFNLEVBQUNDLFNBQVEsRUFBQyxHQUFHQztRQUNuQixJQUFHLENBQUNELFVBQVM7WUFDWEUsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztRQUNERCxRQUFRQyxHQUFHLENBQUNIO1FBQ1osSUFBRyxDQUVILEVBQUMsT0FBTUksT0FBTSxDQUViO0lBR0U7SUFDSixNQUFNQyxnQkFBZ0I7UUFDcEI7WUFDRUMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTLElBQU07Z0JBQUNSLFFBQVFDLEdBQUcsQ0FBQztZQUFXO1FBQ3pDO1FBQ0E7WUFDRUcsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTLElBQU07Z0JBQUNSLFFBQVFDLEdBQUcsQ0FBQztZQUFXO1FBQ3pDO0tBQ0Q7SUFDRCxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBV3RCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRixrREFBSUE7O2tDQUNILDhEQUFDbUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ087d0JBQUtSLE1BQUs7d0JBQWNTLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFDNUJDLFdBQVU7d0JBQ1ZDLGFBQVk7d0JBQVlDLGdCQUFlOzs7Ozs7a0NBQ3ZDLDhEQUFDTDt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzs7Ozs7O2tDQUM1Qiw4REFBQ0k7d0JBQU9DLEtBQUk7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ0M7Z0JBQUtaLFdBQVd0QixxRUFBVzs7a0NBQzVCLDhEQUFDRCwwREFBTUE7Ozs7O2tDQUNSLDhEQUFDb0M7d0JBQVFiLFdBQVd0QiwwRUFBZ0I7OzBDQUNuQyw4REFBQ29DO2dDQUFHZCxXQUFXdEIsd0VBQWM7MENBQUU7Ozs7OzswQ0FFL0IsOERBQUNzQztnQ0FBRWhCLFdBQVd0Qix3RUFBYzswQ0FBRTs7Ozs7OzBDQUM5Qiw4REFBQ3FCO2dDQUFJQyxXQUFVOzBDQUViUCxjQUFjeUIsR0FBRyxDQUFDLENBQUNDLE9BQVM7b0NBQzlCLHFCQUFPLDhEQUFDdkMsZ0VBQVlBO3dDQUFpQmUsT0FBT3dCLEtBQUt4QixLQUFLO3dDQUFFRCxNQUFNeUIsS0FBS3pCLElBQUk7d0NBQUVFLE1BQU11QixLQUFLdkIsSUFBSTt3Q0FBRUMsSUFBSXNCLEtBQUt0QixFQUFFO3dDQUFFQyxTQUFTWDt1Q0FBdEZnQyxLQUFLekIsSUFBSTs7Ozs7Z0NBRWpDOzs7Ozs7MENBR0YsOERBQUNLO2dDQUFJQyxXQUFVOzBDQUNyQiw0RUFBQ29CO29DQUFFcEIsV0FBVTs4Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdkIsQ0FBQztHQTFFdUJmOztRQUNMTixxREFBUUE7OztLQURITSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VMb2dpbiB9IGZyb20gJy4uL2hvb2tzL3VzZUxvZ2luJztcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduSW5CdXR0b24nO1xudmFyIFdlYjMgPSByZXF1aXJlKCd3ZWIzJyk7XG52YXIgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCAnd3M6Ly9zb21lLmxvY2FsLW9yLXJlbW90ZS5ub2RlOjg1NDYnKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtsb2dpbiB9ID0gdXNlTG9naW4oKTtcblxuICBjb25zdCBpc1dhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93O1xuICAgIGlmKCFldGhlcmV1bSl7XG4gICAgICBjb25zb2xlLmxvZygnbm90IGNvbm5lY3RlZCcpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGV0aGVyZXVtKVxuICAgIHRyeXtcblxuICAgIH1jYXRjaChlcnJvcil7XG5cbiAgICB9XG5cblxuICAgICAgfVxuICBjb25zdCBzaWduSW5PcHRpb25zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdNZXRhbWFzaycsXG4gICAgICB0aXRsZTogJ1NpZ24gaW4gd2l0aCBNZXRhbWFzaycsXG4gICAgICBpY29uOiAnL21ldGFtYXNrX2ZveC5zdmcnLFxuICAgICAgYmc6ICcjNDM4RkZFJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtjb25zb2xlLmxvZygnbWV0YW1hc2snKX1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDb2luYmFzZSB3YWxsZXQnLFxuICAgICAgdGl0bGU6ICdTaWduIGluIHdpdGggQ29pbmJhc2Ugd2FsbGV0JyxcbiAgICAgIGljb246ICcvbWV0YW1hc2tfZm94LnN2ZycsXG4gICAgICBiZzogJycsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7Y29uc29sZS5sb2coJ2NvaW5iYXNlJyl9XG4gICAgfVxuICBdXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DaGVzczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDaGVzcyBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuMi4xL2Nzcy9hbGwubWluLmNzc1wiIFxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGE1MTItTVY3SzgreStnTElCb1ZENTlsUUlZaWNSNjVpYXF1a3p2Zi9ud2FzRjBucWhQYXk1dy85bEptVk0yaE1EY25LMU9uTUdDZFZLK2lRcko3bHpQSlFkMXc9PVwiIFxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIiAvPlxuICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy4uL3N0eWxlcy9Ib21lLmNzcycgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuaWNvbmlmeS5kZXNpZ24vMy8zLjAuMC9pY29uaWZ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgIFxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8TmF2YmFyLz5cbiAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5XZWxjb21lIHRvIENoZXNzIEdhbWVzPC9oMT4gXG5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhZ0xpbmV9PlNpZ24gaW4gd2l0aCB5b3VyIHdhbGxldCB0byBiZSBhYmxlIHRvIGF1dGhlbnRpY2F0ZSBhbmQgcGxheSBnYW1lczwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0xMiBteC1hdXRvJz5cbiAgICAgIHtcbiAgICAgICAgc2lnbkluT3B0aW9ucy5tYXAoKG9wdHMpID0+IHtcbiAgICAgIHJldHVybiA8U2lnbkluQnV0dG9uIGtleT17b3B0cy5uYW1lfSB0aXRsZT17b3B0cy50aXRsZX0gbmFtZT17b3B0cy5uYW1lfSBpY29uPXtvcHRzLmljb259IGJnPXtvcHRzLmJnfSBvbkNsaWNrPXtpc1dhbGxldENvbm5lY3RlZH0gLz5cbiAgICAgICBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIHVuZGVybGluZSc+XG48YSBjbGFzc05hbWU9J214LWF1dG8nPlxuICAgICAgICBTaG93IE1vcmUgT3B0aW9uc1xuICAgICAgPC9hPlxuPC9kaXY+XG5cbiAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgIDwvbWFpbj5cblxuICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJOYXZiYXIiLCJzdHlsZXMiLCJ1c2VMb2dpbiIsIlNpZ25JbkJ1dHRvbiIsIldlYjMiLCJyZXF1aXJlIiwid2ViMyIsImdpdmVuUHJvdmlkZXIiLCJIb21lIiwibG9naW4iLCJpc1dhbGxldENvbm5lY3RlZCIsImV0aGVyZXVtIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2lnbkluT3B0aW9ucyIsIm5hbWUiLCJ0aXRsZSIsImljb24iLCJiZyIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW50ZWdyaXR5IiwiY3Jvc3NPcmlnaW4iLCJyZWZlcnJlclBvbGljeSIsInNjcmlwdCIsInNyYyIsIm1haW4iLCJzZWN0aW9uIiwiaDEiLCJoZWFkaW5nIiwicCIsInRhZ0xpbmUiLCJtYXAiLCJvcHRzIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});