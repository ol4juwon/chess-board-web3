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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAuthContext */ \"./hooks/useAuthContext.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth: 200px;\\nheight: 60px;\\nborder-radius: 10px;\\ndisplay: flex;\\n@media screen and (max-width: 640px) {\\n// display: none;\\n}\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth: 50%;\\nheight: 100%;\\ndisplay: flex;\\nalign-items: center;\\njustify-content: center;\\nborder-radius: 10px 0 0 10px;\\ncolor: white;\\nbackground: #438FFE;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\npadding: 10px;\\nlineheight: 40px;\\ncolor: #000;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nwidth: 50%;\\nheight: 100%;\\ndisplay: flex;\\nalign-items: center;\\njustify-content: center;\\nborder-radius: 0 10px 10px 0 ;\\ncolor: black;\\nbackground: white;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n// const Button = styled.nav`\n//     display: none;\n// @media screen and (max-width: 640px) {\n//         display: block;\n// }\n// `\nconst Account = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\nconst Balance = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject1());\nconst Brand = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\nconst Address = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3());\nconst Navbar = (param)=>{\n    let { loca  } = param;\n    var ref;\n    _s();\n    const { user  } = (0,_hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)();\n    const [navbar, setNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    console.log(\"==\", location.href);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().head),\n                children: [\n                    \"Chess \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"noto-chess-board\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 47\n                    }, undefined),\n                    \" Games\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().account),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().balance),\n                        children: [\n                            (user === null || user === void 0 ? void 0 : user.balance) || 0,\n                            \"ETH\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().address),\n                        children: user === null || user === void 0 ? void 0 : (ref = user.address) === null || ref === void 0 ? void 0 : ref.substr(0, 6)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/components/Navbar.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navbar, \"Y0IJenkmMjZeWqNx2DgET2zIwqw=\", false, function() {\n    return [\n        _hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUztBQUNWO0FBR2tCO0FBQ3pELDZCQUE2QjtBQUU3QixxQkFBcUI7QUFDckIseUNBQXlDO0FBRXpDLDBCQUEwQjtBQUMxQixJQUFJO0FBQ0osSUFBSTtBQUNKLE1BQU1LLFVBQVVGLDZEQUFVO0FBUzFCLE1BQU1JLFVBQVVKLDZEQUFVO0FBVzFCLE1BQU1LLFFBQVFMLDZEQUFVO0FBS3hCLE1BQU1NLFVBQVVOLDZEQUFVO0FBVTFCLE1BQU1PLFNBQVMsU0FBWTtRQUFYLEVBQUNDLEtBQUksRUFBQztRQVlIQzs7SUFYZixNQUFNLEVBQUNBLEtBQUksRUFBQyxHQUFHUixxRUFBY0E7SUFDN0IsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUNjLFFBQVFDLEdBQUcsQ0FBQyxNQUFLQyxTQUFTQyxJQUFJO0lBQzlCLHFCQUNJLDhEQUFDWjtRQUFJYSxXQUFXakIsc0VBQVU7OzBCQUN0Qiw4REFBQ21CO2dCQUFHRixXQUFXakIsdUVBQVc7O29CQUFFO2tDQUFNLDhEQUFDcUI7d0JBQUtKLFdBQVU7Ozs7OztvQkFBMkI7Ozs7Ozs7MEJBQzdFLDhEQUFDYjtnQkFBSWEsV0FBV2pCLDBFQUFjOztrQ0FDMUIsOERBQUNJO3dCQUFJYSxXQUFXakIsMEVBQWM7OzRCQUMxQlUsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNYSxPQUFPLEtBQUc7NEJBQUU7Ozs7Ozs7a0NBRXRCLDhEQUFDbkI7d0JBQUlhLFdBQVdqQiwwRUFBYztrQ0FDM0JVLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsTUFBQUEsS0FBTWMsT0FBTyxjQUFiZCxpQkFBQUEsS0FBQUEsSUFBQUEsSUFBZWUsT0FBTyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0M7R0FqQk1qQjs7UUFDYU4saUVBQWNBOzs7S0FEM0JNO0FBbUJOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeD8xYjgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL05hdmJhci5tb2R1bGUuY3NzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0JztcbmltcG9ydCBjaGVzc1Bhd24gZnJvbSAnQGljb25pZnkvaWNvbnMtbm90by9jaGVzcy1wYXduJztcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSAnLi4vaG9va3MvdXNlQXV0aENvbnRleHQnO1xuLy8gY29uc3QgQnV0dG9uID0gc3R5bGVkLm5hdmBcblxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuXG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuLy8gYFxuY29uc3QgQWNjb3VudCA9IHN0eWxlZC5kaXZgXG53aWR0aDogMjAwcHg7XG5oZWlnaHQ6IDYwcHg7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuZGlzcGxheTogZmxleDtcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4vLyBkaXNwbGF5OiBub25lO1xufVxuYFxuY29uc3QgQmFsYW5jZSA9IHN0eWxlZC5kaXZgXG53aWR0aDogNTAlO1xuaGVpZ2h0OiAxMDAlO1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG5jb2xvcjogd2hpdGU7XG5iYWNrZ3JvdW5kOiAjNDM4RkZFO1xuYFxuXG5jb25zdCBCcmFuZCA9IHN0eWxlZC5kaXZgXG5wYWRkaW5nOiAxMHB4O1xubGluZWhlaWdodDogNDBweDtcbmNvbG9yOiAjMDAwO1xuYFxuY29uc3QgQWRkcmVzcyA9IHN0eWxlZC5kaXZgXG53aWR0aDogNTAlO1xuaGVpZ2h0OiAxMDAlO1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDAgO1xuY29sb3I6IGJsYWNrO1xuYmFja2dyb3VuZDogd2hpdGU7XG5gXG5jb25zdCBOYXZiYXIgPSAoe2xvY2F9KSA9PiB7XG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlQXV0aENvbnRleHQoKTtcbiAgICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFwiPT1cIixsb2NhdGlvbi5ocmVmKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+Q2hlc3MgPHNwYW4gY2xhc3NOYW1lPSdub3RvLWNoZXNzLWJvYXJkJyA+PC9zcGFuPiBHYW1lczwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsYW5jZX0+XG4gICAgICAgICAgICAgICAgICAge3VzZXI/LmJhbGFuY2V8fCAwfUVUSFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkcmVzc30+XG4gICAgICAgICAgICAgICAgICB7dXNlcj8uYWRkcmVzcz8uc3Vic3RyKDAsNil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInN0eWxlZCIsInVzZUF1dGhDb250ZXh0IiwiQWNjb3VudCIsImRpdiIsIkJhbGFuY2UiLCJCcmFuZCIsIkFkZHJlc3MiLCJOYXZiYXIiLCJsb2NhIiwidXNlciIsIm5hdmJhciIsInNldE5hdmJhciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsImhyZWYiLCJjbGFzc05hbWUiLCJuYXYiLCJoMSIsImhlYWQiLCJzcGFuIiwiYWNjb3VudCIsImJhbGFuY2UiLCJhZGRyZXNzIiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n"));

/***/ })

});