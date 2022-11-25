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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameContext\": function() { return /* binding */ GameContext; },\n/* harmony export */   \"GameProvider\": function() { return /* binding */ GameProvider; },\n/* harmony export */   \"gameReducer\": function() { return /* binding */ gameReducer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n// import { auth } from \"../provider/config\";\n// import { onAuthStateChanged } from \"firebase/auth\";\nconst GameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst gameReducer = (state, action)=>{\n    switch(action.type){\n        case \"JOIN_GAME\":\n            return {\n                ...state,\n                game: action.payload\n            };\n        case \"SPECTATE_GAME\":\n            return {\n                ...state,\n                game: null\n            };\n        case \"ADD_GAME\":\n            return {\n                ...state,\n                game: action.payload,\n                authIsReady: true\n            };\n        default:\n            return state;\n    }\n};\nconst GameProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(gameReducer, {\n        game: [],\n        gameIsReady: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // const unsub =\tonAuthStateChanged(auth, (user) => {\n    // \tdispatch({type: \"AUTH_READY\", payload: user});\n    // \tunsub();\n    // });\n    }, []);\n    console.log(\"Game state?\", state);\n    localStorage.setItem(\"game\", s);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameContext.Provider, {\n        value: {\n            ...state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/context/GameContext.tsx\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined);\n};\n_s(GameProvider, \"jxhLbFD1peEubnP9K/iEWaElR8c=\");\n_c = GameProvider;\nvar _c;\n$RefreshReg$(_c, \"GameProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ1M7QUFFbEQsNkNBQTZDO0FBQzdDLHNEQUFzRDtBQUUvQyxNQUFNSSw0QkFBY0Ysb0RBQWFBLEdBQUc7QUFFcEMsTUFBTUcsY0FBYyxDQUFDQyxPQUFZQyxTQUF5QztJQUNoRixPQUFRQSxPQUFPQyxJQUFJO1FBQ25CLEtBQUs7WUFDSixPQUFPO2dCQUNOLEdBQUdGLEtBQUs7Z0JBQ1JHLE1BQU1GLE9BQU9HLE9BQU87WUFDckI7UUFDRCxLQUFLO1lBQ0osT0FBTztnQkFDTixHQUFHSixLQUFLO2dCQUNSRyxNQUFNLElBQUk7WUFDWDtRQUNELEtBQUs7WUFDSixPQUFPO2dCQUNOLEdBQUdILEtBQUs7Z0JBQ1JHLE1BQU1GLE9BQU9HLE9BQU87Z0JBQ3BCQyxhQUFhLElBQUk7WUFDbEI7UUFDRDtZQUNDLE9BQU9MO0lBQ1I7QUFDRCxFQUFFO0FBS0ssTUFBTU0sZUFBZSxTQUF5QjtRQUF4QixFQUFFQyxTQUFRLEVBQVM7O0lBRS9DLE1BQU0sQ0FBQ1AsT0FBT1EsU0FBUyxHQUFHWCxpREFBVUEsQ0FBQ0UsYUFBYTtRQUNqREksTUFBTSxFQUFFO1FBQ1JNLGFBQWEsS0FBSztJQUNuQjtJQUVBZCxnREFBU0EsQ0FBQyxJQUFNO0lBQ2YscURBQXFEO0lBQ3JELGtEQUFrRDtJQUNsRCxZQUFZO0lBQ1osTUFBTTtJQUNQLEdBQUcsRUFBRTtJQUNMZSxRQUFRQyxHQUFHLENBQUMsZUFBZVg7SUFDNUJZLGFBQWFDLE9BQU8sQ0FBQyxRQUFPQztJQUMzQixxQkFDQyw4REFBQ2hCLFlBQVlpQixRQUFRO1FBQUNDLE9BQU87WUFBRSxHQUFHaEIsS0FBSztZQUFFUTtRQUFTO2tCQUNoREQ7Ozs7OztBQUdKLEVBQUU7R0FwQldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvR2FtZUNvbnRleHQudHN4PzkyNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZSBmcm9tIFwiLi4vaG9va3MvdXNlTG9jYWxTdG9yYWdlXCI7XG4vLyBpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3Byb3ZpZGVyL2NvbmZpZ1wiO1xuLy8gaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgZ2FtZVJlZHVjZXIgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiB7IHR5cGU6IGFueTsgcGF5bG9hZDogYW55OyB9KSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0Y2FzZSBcIkpPSU5fR0FNRVwiOlxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGdhbWU6IGFjdGlvbi5wYXlsb2FkLFxuXHRcdH07XG5cdGNhc2UgXCJTUEVDVEFURV9HQU1FXCI6XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Z2FtZTogbnVsbCxcblx0XHR9O1xuXHRjYXNlIFwiQUREX0dBTUVcIjpcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRnYW1lOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdGF1dGhJc1JlYWR5OiB0cnVlLFxuXHRcdH07XG5cdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBhbnk7XG59XG5leHBvcnQgY29uc3QgR2FtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcblxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoZ2FtZVJlZHVjZXIsIHtcblx0XHRnYW1lOiBbXSxcblx0XHRnYW1lSXNSZWFkeTogZmFsc2Vcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBjb25zdCB1bnN1YiA9XHRvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcblx0XHQvLyBcdGRpc3BhdGNoKHt0eXBlOiBcIkFVVEhfUkVBRFlcIiwgcGF5bG9hZDogdXNlcn0pO1xuXHRcdC8vIFx0dW5zdWIoKTtcblx0XHQvLyB9KTtcblx0fSwgW10pO1xuXHRjb25zb2xlLmxvZyhcIkdhbWUgc3RhdGU/XCIsIHN0YXRlKTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lJyxzKVxuXHRyZXR1cm4gKFxuXHRcdDxHYW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyAuLi5zdGF0ZSwgZGlzcGF0Y2ggfX0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9HYW1lQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJHYW1lQ29udGV4dCIsImdhbWVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZ2FtZSIsInBheWxvYWQiLCJhdXRoSXNSZWFkeSIsIkdhbWVQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJnYW1lSXNSZWFkeSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/GameContext.tsx\n"));

/***/ })

});