"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/GameContext.tsx":
/*!*********************************!*\
  !*** ./context/GameContext.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameContext\": function() { return /* binding */ GameContext; },\n/* harmony export */   \"GameProvider\": function() { return /* binding */ GameProvider; },\n/* harmony export */   \"gameReducer\": function() { return /* binding */ gameReducer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n// import { auth } from \"../provider/config\";\n// import { onAuthStateChanged } from \"firebase/auth\";\nconst GameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst gameReducer = (state, action)=>{\n    switch(action.type){\n        case \"JOIN_GAME\":\n            return {\n                ...state,\n                game: action.payload\n            };\n        case \"SPECTATE_GAME\":\n            return {\n                ...state,\n                game: null\n            };\n        case \"ADD_GAME\":\n            localStorage.setItem(\"games\");\n            return {\n                ...state,\n                game: action.payload,\n                authIsReady: true\n            };\n        default:\n            return state;\n    }\n};\nconst GameProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(gameReducer, {\n        game: [],\n        gameIsReady: false\n    });\n    console.log(\"Game state?\", state);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"game\", JSON.stringify(state));\n    }, [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameContext.Provider, {\n        value: {\n            ...state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/context/GameContext.tsx\",\n        lineNumber: 52,\n        columnNumber: 3\n    }, undefined);\n};\n_s(GameProvider, \"jxhLbFD1peEubnP9K/iEWaElR8c=\");\n_c = GameProvider;\nvar _c;\n$RefreshReg$(_c, \"GameProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ3lDO0FBQ1M7QUFFbEQsNkNBQTZDO0FBQzdDLHNEQUFzRDtBQUUvQyxNQUFNSSw0QkFBY0Ysb0RBQWFBLEdBQUc7QUFFcEMsTUFBTUcsY0FBYyxDQUFDQyxPQUFZQyxTQUF5QztJQUNoRixPQUFRQSxPQUFPQyxJQUFJO1FBQ25CLEtBQUs7WUFDSixPQUFPO2dCQUNOLEdBQUdGLEtBQUs7Z0JBQ1JHLE1BQU1GLE9BQU9HLE9BQU87WUFDckI7UUFDRCxLQUFLO1lBQ0osT0FBTztnQkFDTixHQUFHSixLQUFLO2dCQUNSRyxNQUFNLElBQUk7WUFDWDtRQUNELEtBQUs7WUFDRUUsYUFBYUMsT0FBTyxDQUFDO1lBQzNCLE9BQU87Z0JBQ04sR0FBR04sS0FBSztnQkFDUkcsTUFBTUYsT0FBT0csT0FBTztnQkFDcEJHLGFBQWEsSUFBSTtZQUNsQjtRQUVEO1lBQ0MsT0FBT1A7SUFDUjtBQUNELEVBQUU7QUFLSyxNQUFNUSxlQUFlLFNBQXlCO1FBQXhCLEVBQUVDLFNBQVEsRUFBUzs7SUFFL0MsTUFBTSxDQUFDVCxPQUFPVSxTQUFTLEdBQUdiLGlEQUFVQSxDQUFDRSxhQUFhO1FBQ2pESSxNQUFNLEVBQUU7UUFDUlEsYUFBYSxLQUFLO0lBQ25CO0lBR0FDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlYjtJQUN4QkwsZ0RBQVNBLENBQUMsSUFBSTtRQUNWVSxhQUFhQyxPQUFPLENBQUMsUUFBT1EsS0FBS0MsU0FBUyxDQUFDZjtJQUUvQyxHQUFHO1FBQUNBO0tBQU07SUFDYixxQkFDQyw4REFBQ0YsWUFBWWtCLFFBQVE7UUFBQ0MsT0FBTztZQUFFLEdBQUdqQixLQUFLO1lBQUVVO1FBQVM7a0JBQ2hERDs7Ozs7O0FBR0osRUFBRTtHQWxCV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9HYW1lQ29udGV4dC50c3g/OTI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGF0IH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gXCIuLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VcIjtcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vcHJvdmlkZXIvY29uZmlnXCI7XG4vLyBpbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgR2FtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBnYW1lUmVkdWNlciA9IChzdGF0ZTogYW55LCBhY3Rpb246IHsgdHlwZTogYW55OyBwYXlsb2FkOiBhbnk7IH0pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRjYXNlIFwiSk9JTl9HQU1FXCI6XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Z2FtZTogYWN0aW9uLnBheWxvYWQsXG5cdFx0fTtcblx0Y2FzZSBcIlNQRUNUQVRFX0dBTUVcIjpcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRnYW1lOiBudWxsLFxuXHRcdH07XG5cdGNhc2UgXCJBRERfR0FNRVwiOlxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZXMnLClcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRnYW1lOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdGF1dGhJc1JlYWR5OiB0cnVlLFxuXHRcdH07XG4gICAgICBcblx0ZGVmYXVsdDpcblx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cbn07XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY2hpbGRyZW46IGFueTtcbn1cbmV4cG9ydCBjb25zdCBHYW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihnYW1lUmVkdWNlciwge1xuXHRcdGdhbWU6IFtdLFxuXHRcdGdhbWVJc1JlYWR5OiBmYWxzZVxuXHR9KTtcblxuXG5cdGNvbnNvbGUubG9nKFwiR2FtZSBzdGF0ZT9cIiwgc3RhdGUpO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZScsSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxuXG4gICAgfSwgW3N0YXRlXSlcblx0cmV0dXJuIChcblx0XHQ8R2FtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgLi4uc3RhdGUsIGRpc3BhdGNoIH19PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvR2FtZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiR2FtZUNvbnRleHQiLCJnYW1lUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImdhbWUiLCJwYXlsb2FkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImF1dGhJc1JlYWR5IiwiR2FtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImdhbWVJc1JlYWR5IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/GameContext.tsx\n"));

/***/ })

});