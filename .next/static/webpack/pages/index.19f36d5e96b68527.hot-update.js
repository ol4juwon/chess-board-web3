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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_SignInButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SignInButton */ \"./components/SignInButton.tsx\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Web3 = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\nvar web3 = new Web3(Web3.givenProvider || \"ws://some.local-or-remote.node:8546\");\nfunction Home() {\n    _s();\n    const { active , account , library , connector , activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();\n    // const {login } = useLogin();\n    const isWalletConnected = async ()=>{\n        const { ethereum  } = window;\n        if (!ethereum) {\n            console.log(\"not connected\");\n        }\n        console.log(ethereum);\n        // try{\n        ethereum.enable().then(async (rs)=>{\n            let balance = await web3.eth.getBalance(rs[0]);\n            console.log(rs, balance, \"..\");\n        });\n    // const account = await ethereum.request({\n    //   method: 'eth_requestAccounts'\n    // })\n    // console.log('account', account)\n    // login(account[0], )\n    //     }catch(error){\n    // console.log(error)\n    //     }\n    };\n    const signInOptions = [\n        {\n            name: \"Metamask\",\n            title: \"Sign in with Metamask\",\n            icon: \"/metamask_fox.svg\",\n            bg: \"#438FFE\",\n            onClick: ()=>{\n                console.log(\"metamask\");\n            }\n        },\n        {\n            name: \"Coinbase wallet\",\n            title: \"Sign in with Coinbase wallet\",\n            icon: \"/metamask_fox.svg\",\n            bg: \"\",\n            onClick: ()=>{\n                console.log(\"coinbase\");\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chess\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Chess app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css\",\n                        integrity: \"sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==\",\n                        crossOrigin: \"anonymous\",\n                        referrerPolicy: \"no-referrer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"../styles/Home.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://code.iconify.design/3/3.0.0/iconify.min.js\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading),\n                                children: \"Welcome to Chess Games\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagLine),\n                                children: \"Sign in with your wallet to be able to authenticate and play games\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-12 mx-auto\",\n                                children: signInOptions.map((opts)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignInButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: opts.title,\n                                        name: opts.name,\n                                        icon: opts.icon,\n                                        bg: opts.bg,\n                                        onClick: isWalletConnected\n                                    }, opts.name, false, {\n                                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 14\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex justify-center underline\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"mx-auto\",\n                                    children: \"Show More Options\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 1\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"3xXgvxT7IjmJicz07oB2rdzZCWg=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2dETCwwREFBWUE7OztLQUQ1REsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2dhbWUvQ29udGFpbmVyJztcbmltcG9ydCB7IHVzZUxvZ2luIH0gZnJvbSAnLi4vaG9va3MvdXNlTG9naW4nO1xuaW1wb3J0IFNpZ25JbkJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25JbkJ1dHRvbic7XG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXG52YXIgV2ViMyA9IHJlcXVpcmUoJ3dlYjMnKTtcbnZhciB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8ICd3czovL3NvbWUubG9jYWwtb3ItcmVtb3RlLm5vZGU6ODU0NicpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBhY3RpdmUsIGFjY291bnQsIGxpYnJhcnksIGNvbm5lY3RvciwgYWN0aXZhdGUsIGRlYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpXG4gIC8vIGNvbnN0IHtsb2dpbiB9ID0gdXNlTG9naW4oKTtcblxuICBjb25zdCBpc1dhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7ZXRoZXJldW19ID0gd2luZG93O1xuICAgIGlmKCFldGhlcmV1bSl7XG4gICAgICBjb25zb2xlLmxvZygnbm90IGNvbm5lY3RlZCcpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGV0aGVyZXVtKVxuICAgIC8vIHRyeXtcbiAgICAgICBldGhlcmV1bS5lbmFibGUoKS50aGVuKFxuICAgICAgICBhc3luYyhycykgPT4ge1xuICAgICAgICAgIGxldCBiYWxhbmNlID0gIGF3YWl0ICB3ZWIzLmV0aC5nZXRCYWxhbmNlKHJzWzBdKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhycyxiYWxhbmNlLCAnLi4nKTtcblxuICAgICAgICB9XG4gICAgICAgKVxuICAgICAgLy8gY29uc3QgYWNjb3VudCA9IGF3YWl0IGV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgLy8gICBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ1xuICAgICAgLy8gfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhY2NvdW50JywgYWNjb3VudClcbiAgICAgIC8vIGxvZ2luKGFjY291bnRbMF0sIClcbi8vICAgICB9Y2F0Y2goZXJyb3Ipe1xuLy8gY29uc29sZS5sb2coZXJyb3IpXG4vLyAgICAgfVxuICB9XG4gIGNvbnN0IHNpZ25Jbk9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ01ldGFtYXNrJyxcbiAgICAgIHRpdGxlOiAnU2lnbiBpbiB3aXRoIE1ldGFtYXNrJyxcbiAgICAgIGljb246ICcvbWV0YW1hc2tfZm94LnN2ZycsXG4gICAgICBiZzogJyM0MzhGRkUnLFxuICAgICAgb25DbGljazogKCkgPT4ge2NvbnNvbGUubG9nKCdtZXRhbWFzaycpfVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NvaW5iYXNlIHdhbGxldCcsXG4gICAgICB0aXRsZTogJ1NpZ24gaW4gd2l0aCBDb2luYmFzZSB3YWxsZXQnLFxuICAgICAgaWNvbjogJy9tZXRhbWFza19mb3guc3ZnJyxcbiAgICAgIGJnOiAnJyxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtjb25zb2xlLmxvZygnY29pbmJhc2UnKX1cbiAgICB9XG4gIF1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNoZXNzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNoZXNzIGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi4yLjEvY3NzL2FsbC5taW4uY3NzXCIgXG4gICAgICAgIGludGVncml0eT1cInNoYTUxMi1NVjdLOCt5K2dMSUJvVkQ1OWxRSVlpY1I2NWlhcXVrenZmL253YXNGMG5xaFBheTV3LzlsSm1WTTJoTURjbksxT25NR0NkVksraVFySjdselBKUWQxdz09XCIgXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlclwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLi4vc3R5bGVzL0hvbWUuY3NzJyAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5pY29uaWZ5LmRlc2lnbi8zLzMuMC4wL2ljb25pZnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxOYXZiYXIvPlxuICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PldlbGNvbWUgdG8gQ2hlc3MgR2FtZXM8L2gxPiBcblxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGFnTGluZX0+U2lnbiBpbiB3aXRoIHlvdXIgd2FsbGV0IHRvIGJlIGFibGUgdG8gYXV0aGVudGljYXRlIGFuZCBwbGF5IGdhbWVzPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J215LTEyIG14LWF1dG8nPlxuICAgICAge1xuICAgICAgICBzaWduSW5PcHRpb25zLm1hcCgob3B0cykgPT4ge1xuICAgICAgcmV0dXJuIDxTaWduSW5CdXR0b24ga2V5PXtvcHRzLm5hbWV9IHRpdGxlPXtvcHRzLnRpdGxlfSBuYW1lPXtvcHRzLm5hbWV9IGljb249e29wdHMuaWNvbn0gYmc9e29wdHMuYmd9IG9uQ2xpY2s9e2lzV2FsbGV0Q29ubmVjdGVkfSAvPlxuICAgICAgIFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgdW5kZXJsaW5lJz5cbjxhIGNsYXNzTmFtZT0nbXgtYXV0byc+XG4gICAgICAgIFNob3cgTW9yZSBPcHRpb25zXG4gICAgICA8L2E+XG48L2Rpdj5cblxuICAgICA8L3NlY3Rpb24+XG5cblxuICAgICAgPC9tYWluPlxuXG4gICAgIFxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIk5hdmJhciIsInN0eWxlcyIsIlNpZ25JbkJ1dHRvbiIsInVzZVdlYjNSZWFjdCIsIldlYjMiLCJyZXF1aXJlIiwid2ViMyIsImdpdmVuUHJvdmlkZXIiLCJIb21lIiwiYWN0aXZlIiwiYWNjb3VudCIsImxpYnJhcnkiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJpc1dhbGxldENvbm5lY3RlZCIsImV0aGVyZXVtIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsImVuYWJsZSIsInRoZW4iLCJycyIsImJhbGFuY2UiLCJldGgiLCJnZXRCYWxhbmNlIiwic2lnbkluT3B0aW9ucyIsIm5hbWUiLCJ0aXRsZSIsImljb24iLCJiZyIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW50ZWdyaXR5IiwiY3Jvc3NPcmlnaW4iLCJyZWZlcnJlclBvbGljeSIsInNjcmlwdCIsInNyYyIsIm1haW4iLCJzZWN0aW9uIiwiaDEiLCJoZWFkaW5nIiwicCIsInRhZ0xpbmUiLCJtYXAiLCJvcHRzIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});