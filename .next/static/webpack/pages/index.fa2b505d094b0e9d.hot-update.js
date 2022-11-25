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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLogin */ \"./hooks/useLogin.tsx\");\n/* harmony import */ var _components_SignInButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignInButton */ \"./components/SignInButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Web3 = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\nvar web3 = new Web3(Web3.givenProvider || \"ws://some.local-or-remote.node:8546\");\nfunction Home() {\n    _s();\n    const { login  } = (0,_hooks_useLogin__WEBPACK_IMPORTED_MODULE_3__.useLogin)();\n    const isWalletConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"not connected\");\n        }\n        console.log(ethereum);\n        // try{\n        ethereum.enable().then(async (rs)=>{\n            let balance = await web3.eth.getBalance(rs[0]);\n            console.log(rs, balance, \"..\");\n            login(rs[0], balance);\n        });\n    };\n    const signInOptions = [\n        {\n            name: \"Metamask\",\n            title: \"Sign in with Metamask\",\n            icon: \"/metamask_fox.svg\",\n            bg: \"#438FFE\",\n            onClick: ()=>{\n                console.log(\"metamask\");\n            }\n        },\n        {\n            name: \"Coinbase wallet\",\n            title: \"Sign in with Coinbase wallet\",\n            icon: \"/metamask_fox.svg\",\n            bg: \"\",\n            onClick: ()=>{\n                console.log(\"coinbase\");\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chess\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Chess app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css\",\n                        integrity: \"sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==\",\n                        crossOrigin: \"anonymous\",\n                        referrerPolicy: \"no-referrer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"../styles/Home.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://code.iconify.design/3/3.0.0/iconify.min.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading),\n                                children: \"Welcome to Chess Games\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagLine),\n                                children: \"Sign in with your wallet to be able to authenticate and play games\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-12 mx-auto\",\n                                children: signInOptions.map((opts)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignInButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: opts.title,\n                                        name: opts.name,\n                                        icon: opts.icon,\n                                        bg: opts.bg,\n                                        onClick: isWalletConnected\n                                    }, opts.name, false, {\n                                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 14\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex justify-center underline\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mx-auto\",\n                                    children: \"Show More Options\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 1\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"zPAv5sd64ojpThP2vPZLDpISgss=\", false, function() {\n    return [\n        _hooks_useLogin__WEBPACK_IMPORTED_MODULE_3__.useLogin\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUVhO0FBQ0s7QUFDRDtBQUNTO0FBQ3RELElBQUlLLE9BQU9DLG1CQUFPQSxDQUFDO0FBQ25CLElBQUlDLE9BQU8sSUFBSUYsS0FBS0EsS0FBS0csYUFBYSxJQUFJO0FBQzNCLFNBQVNDLE9BQU87O0lBQzdCLE1BQU0sRUFBQ0MsTUFBSyxFQUFFLEdBQUdQLHlEQUFRQTtJQUV6QixNQUFNUSxvQkFBb0IsVUFBWTtRQUNwQyxNQUFNLEVBQUNDLFNBQVEsRUFBQyxHQUFHQztRQUNuQixJQUFHLENBQUNELFVBQVM7WUFDWEUsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztRQUNERCxRQUFRQyxHQUFHLENBQUNIO1FBQ1osT0FBTztRQUNKQSxTQUFTSSxNQUFNLEdBQUdDLElBQUksQ0FDckIsT0FBTUMsS0FBTztZQUNYLElBQUlDLFVBQVcsTUFBT1osS0FBS2EsR0FBRyxDQUFDQyxVQUFVLENBQUNILEVBQUUsQ0FBQyxFQUFFO1lBQy9DSixRQUFRQyxHQUFHLENBQUNHLElBQUdDLFNBQVM7WUFDdkJULE1BQU1RLEVBQUUsQ0FBQyxFQUFFLEVBQUVDO1FBQ2hCO0lBR0Y7SUFDSixNQUFNRyxnQkFBZ0I7UUFDcEI7WUFDRUMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTLElBQU07Z0JBQUNiLFFBQVFDLEdBQUcsQ0FBQztZQUFXO1FBQ3pDO1FBQ0E7WUFDRVEsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsSUFBSTtZQUNKQyxTQUFTLElBQU07Z0JBQUNiLFFBQVFDLEdBQUcsQ0FBQztZQUFXO1FBQ3pDO0tBQ0Q7SUFDRCxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVzNCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRixrREFBSUE7O2tDQUNILDhEQUFDd0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ087d0JBQUtSLE1BQUs7d0JBQWNTLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7a0NBQ3RCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFDNUJDLFdBQVU7d0JBQ1ZDLGFBQVk7d0JBQVlDLGdCQUFlOzs7Ozs7a0NBQ3ZDLDhEQUFDTDt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzs7Ozs7O2tDQUM1Qiw4REFBQ0k7d0JBQU9DLEtBQUk7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ0M7Z0JBQUtaLFdBQVczQixxRUFBVzs7a0NBQzVCLDhEQUFDRCwwREFBTUE7Ozs7O2tDQUNSLDhEQUFDeUM7d0JBQVFiLFdBQVczQiwwRUFBZ0I7OzBDQUNuQyw4REFBQ3lDO2dDQUFHZCxXQUFXM0Isd0VBQWM7MENBQUU7Ozs7OzswQ0FFL0IsOERBQUMyQztnQ0FBRWhCLFdBQVczQix3RUFBYzswQ0FBRTs7Ozs7OzBDQUM5Qiw4REFBQzBCO2dDQUFJQyxXQUFVOzBDQUViUCxjQUFjeUIsR0FBRyxDQUFDLENBQUNDLE9BQVM7b0NBQzlCLHFCQUFPLDhEQUFDNUMsZ0VBQVlBO3dDQUFpQm9CLE9BQU93QixLQUFLeEIsS0FBSzt3Q0FBRUQsTUFBTXlCLEtBQUt6QixJQUFJO3dDQUFFRSxNQUFNdUIsS0FBS3ZCLElBQUk7d0NBQUVDLElBQUlzQixLQUFLdEIsRUFBRTt3Q0FBRUMsU0FBU2hCO3VDQUF0RnFDLEtBQUt6QixJQUFJOzs7OztnQ0FFakM7Ozs7OzswQ0FHRiw4REFBQ0s7Z0NBQUlDLFdBQVU7MENBQ3JCLDRFQUFDb0I7b0NBQUVwQixXQUFVOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF2QixDQUFDO0dBNUV1QnBCOztRQUNMTixxREFBUUE7OztLQURITSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VMb2dpbiB9IGZyb20gJy4uL2hvb2tzL3VzZUxvZ2luJztcbmltcG9ydCBTaWduSW5CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduSW5CdXR0b24nO1xudmFyIFdlYjMgPSByZXF1aXJlKCd3ZWIzJyk7XG52YXIgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCAnd3M6Ly9zb21lLmxvY2FsLW9yLXJlbW90ZS5ub2RlOjg1NDYnKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtsb2dpbiB9ID0gdXNlTG9naW4oKTtcblxuICBjb25zdCBpc1dhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93O1xuICAgIGlmKCFldGhlcmV1bSl7XG4gICAgICBjb25zb2xlLmxvZygnbm90IGNvbm5lY3RlZCcpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGV0aGVyZXVtKVxuICAgIC8vIHRyeXtcbiAgICAgICBldGhlcmV1bS5lbmFibGUoKS50aGVuKFxuICAgICAgICBhc3luYyhycykgPT4ge1xuICAgICAgICAgIGxldCBiYWxhbmNlID0gIGF3YWl0ICB3ZWIzLmV0aC5nZXRCYWxhbmNlKHJzWzBdKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhycyxiYWxhbmNlLCAnLi4nKTtcbiAgICAgICAgICAgbG9naW4ocnNbMF0sIGJhbGFuY2UpXG4gICAgICAgIH1cbiAgICAgICApXG5cbiAgICAgIH1cbiAgY29uc3Qgc2lnbkluT3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnTWV0YW1hc2snLFxuICAgICAgdGl0bGU6ICdTaWduIGluIHdpdGggTWV0YW1hc2snLFxuICAgICAgaWNvbjogJy9tZXRhbWFza19mb3guc3ZnJyxcbiAgICAgIGJnOiAnIzQzOEZGRScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7Y29uc29sZS5sb2coJ21ldGFtYXNrJyl9XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ29pbmJhc2Ugd2FsbGV0JyxcbiAgICAgIHRpdGxlOiAnU2lnbiBpbiB3aXRoIENvaW5iYXNlIHdhbGxldCcsXG4gICAgICBpY29uOiAnL21ldGFtYXNrX2ZveC5zdmcnLFxuICAgICAgYmc6ICcnLFxuICAgICAgb25DbGljazogKCkgPT4ge2NvbnNvbGUubG9nKCdjb2luYmFzZScpfVxuICAgIH1cbiAgXVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hlc3M8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ2hlc3MgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjIuMS9jc3MvYWxsLm1pbi5jc3NcIiBcbiAgICAgICAgaW50ZWdyaXR5PVwic2hhNTEyLU1WN0s4K3krZ0xJQm9WRDU5bFFJWWljUjY1aWFxdWt6dmYvbndhc0YwbnFoUGF5NXcvOWxKbVZNMmhNRGNuSzFPbk1HQ2RWSytpUXJKN2x6UEpRZDF3PT1cIiBcbiAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScuLi9zdHlsZXMvSG9tZS5jc3MnIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmljb25pZnkuZGVzaWduLzMvMy4wLjAvaWNvbmlmeS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICBcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPE5hdmJhci8+XG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+V2VsY29tZSB0byBDaGVzcyBHYW1lczwvaDE+IFxuXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50YWdMaW5lfT5TaWduIGluIHdpdGggeW91ciB3YWxsZXQgdG8gYmUgYWJsZSB0byBhdXRoZW50aWNhdGUgYW5kIHBsYXkgZ2FtZXM8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMTIgbXgtYXV0byc+XG4gICAgICB7XG4gICAgICAgIHNpZ25Jbk9wdGlvbnMubWFwKChvcHRzKSA9PiB7XG4gICAgICByZXR1cm4gPFNpZ25JbkJ1dHRvbiBrZXk9e29wdHMubmFtZX0gdGl0bGU9e29wdHMudGl0bGV9IG5hbWU9e29wdHMubmFtZX0gaWNvbj17b3B0cy5pY29ufSBiZz17b3B0cy5iZ30gb25DbGljaz17aXNXYWxsZXRDb25uZWN0ZWR9IC8+XG4gICAgICAgXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciB1bmRlcmxpbmUnPlxuPGEgY2xhc3NOYW1lPSdteC1hdXRvJz5cbiAgICAgICAgU2hvdyBNb3JlIE9wdGlvbnNcbiAgICAgIDwvYT5cbjwvZGl2PlxuXG4gICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICA8L21haW4+XG5cbiAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTmF2YmFyIiwic3R5bGVzIiwidXNlTG9naW4iLCJTaWduSW5CdXR0b24iLCJXZWIzIiwicmVxdWlyZSIsIndlYjMiLCJnaXZlblByb3ZpZGVyIiwiSG9tZSIsImxvZ2luIiwiaXNXYWxsZXRDb25uZWN0ZWQiLCJldGhlcmV1bSIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJlbmFibGUiLCJ0aGVuIiwicnMiLCJiYWxhbmNlIiwiZXRoIiwiZ2V0QmFsYW5jZSIsInNpZ25Jbk9wdGlvbnMiLCJuYW1lIiwidGl0bGUiLCJpY29uIiwiYmciLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWV0YSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImludGVncml0eSIsImNyb3NzT3JpZ2luIiwicmVmZXJyZXJQb2xpY3kiLCJzY3JpcHQiLCJzcmMiLCJtYWluIiwic2VjdGlvbiIsImgxIiwiaGVhZGluZyIsInAiLCJ0YWdMaW5lIiwibWFwIiwib3B0cyIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});