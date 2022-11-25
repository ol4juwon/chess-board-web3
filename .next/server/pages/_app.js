/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"authReducer\": () => (/* binding */ authReducer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// import { auth } from \"../provider/config\";\n// import { onAuthStateChanged } from \"firebase/auth\";\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst authReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        case \"AUTH_READY\":\n            return {\n                ...state,\n                user: action.payload,\n                authIsReady: true\n            };\n        default:\n            return state;\n    }\n};\nconst AuthProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(authReducer, {\n        user: null,\n        authIsReady: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // const unsub =\tonAuthStateChanged(auth, (user) => {\n    // \tdispatch({type: \"AUTH_READY\", payload: user});\n    // \tunsub();\n    // });\n    }, []);\n    console.log(\"Auth user?\", state);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            ...state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/context/AuthContext.tsx\",\n        lineNumber: 49,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDUztBQUNsRCw2Q0FBNkM7QUFDN0Msc0RBQXNEO0FBRS9DLE1BQU1JLDRCQUFjRixvREFBYUEsR0FBRztBQUVwQyxNQUFNRyxjQUFjLENBQUNDLE9BQU9DLFNBQVc7SUFDN0MsT0FBUUEsT0FBT0MsSUFBSTtRQUNuQixLQUFLO1lBQ0osT0FBTztnQkFDTixHQUFHRixLQUFLO2dCQUNSRyxNQUFNRixPQUFPRyxPQUFPO1lBQ3JCO1FBQ0QsS0FBSztZQUNKLE9BQU87Z0JBQ04sR0FBR0osS0FBSztnQkFDUkcsTUFBTSxJQUFJO1lBQ1g7UUFDRCxLQUFLO1lBQ0osT0FBTztnQkFDTixHQUFHSCxLQUFLO2dCQUNSRyxNQUFNRixPQUFPRyxPQUFPO2dCQUNwQkMsYUFBYSxJQUFJO1lBQ2xCO1FBQ0Q7WUFDQyxPQUFPTDtJQUNSO0FBQ0QsRUFBRTtBQUtLLE1BQU1NLGVBQWUsQ0FBQyxFQUFFQyxTQUFRLEVBQVMsR0FBSztJQUNwRCxNQUFNLENBQUNQLE9BQU9RLFNBQVMsR0FBR1gsaURBQVVBLENBQUNFLGFBQWE7UUFDakRJLE1BQU0sSUFBSTtRQUNWRSxhQUFhLEtBQUs7SUFDbkI7SUFFQVYsZ0RBQVNBLENBQUMsSUFBTTtJQUNmLHFEQUFxRDtJQUNyRCxrREFBa0Q7SUFDbEQsWUFBWTtJQUNaLE1BQU07SUFDUCxHQUFHLEVBQUU7SUFDTGMsUUFBUUMsR0FBRyxDQUFDLGNBQWNWO0lBRTFCLHFCQUNDLDhEQUFDRixZQUFZYSxRQUFRO1FBQUNDLE9BQU87WUFBRSxHQUFHWixLQUFLO1lBQUVRO1FBQVM7a0JBQ2hERDs7Ozs7O0FBR0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY2hlc3MvLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD9mZGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vcHJvdmlkZXIvY29uZmlnXCI7XG4vLyBpbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBhdXRoUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0Y2FzZSBcIkxPR0lOXCI6XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0dXNlcjogYWN0aW9uLnBheWxvYWQsXG5cdFx0fTtcblx0Y2FzZSBcIkxPR09VVFwiOlxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdHVzZXI6IG51bGwsXG5cdFx0fTtcblx0Y2FzZSBcIkFVVEhfUkVBRFlcIjpcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHR1c2VyOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdGF1dGhJc1JlYWR5OiB0cnVlLFxuXHRcdH07XG5cdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBhbnk7XG59XG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGF1dGhSZWR1Y2VyLCB7XG5cdFx0dXNlcjogbnVsbCxcblx0XHRhdXRoSXNSZWFkeTogZmFsc2Vcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBjb25zdCB1bnN1YiA9XHRvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcblx0XHQvLyBcdGRpc3BhdGNoKHt0eXBlOiBcIkFVVEhfUkVBRFlcIiwgcGF5bG9hZDogdXNlcn0pO1xuXHRcdC8vIFx0dW5zdWIoKTtcblx0XHQvLyB9KTtcblx0fSwgW10pO1xuXHRjb25zb2xlLmxvZyhcIkF1dGggdXNlcj9cIiwgc3RhdGUpO1xuXG5cdHJldHVybiAoXG5cdFx0PEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCBkaXNwYXRjaCB9fT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIkF1dGhDb250ZXh0IiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ1c2VyIiwicGF5bG9hZCIsImF1dGhJc1JlYWR5IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./context/GameContext.tsx":
/*!*********************************!*\
  !*** ./context/GameContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameContext\": () => (/* binding */ GameContext),\n/* harmony export */   \"GameProvider\": () => (/* binding */ GameProvider),\n/* harmony export */   \"gameReducer\": () => (/* binding */ gameReducer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// import { auth } from \"../provider/config\";\n// import { onAuthStateChanged } from \"firebase/auth\";\nconst GameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst gameReducer = (state, action)=>{\n    switch(action.type){\n        case \"JOIN_GAME\":\n            return {\n                ...state,\n                game: action.payload\n            };\n        case \"SPECTATE_GAME\":\n            return {\n                ...state,\n                game: null\n            };\n        case \"ADD_GAME\":\n            return {\n                ...state,\n                game: action.payload,\n                authIsReady: true\n            };\n        default:\n            return state;\n    }\n};\nconst GameProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(gameReducer, {\n        game: [],\n        gameIsReady: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // const unsub =\tonAuthStateChanged(auth, (user) => {\n    // \tdispatch({type: \"AUTH_READY\", payload: user});\n    // \tunsub();\n    // });\n    }, []);\n    console.log(\"Game state?\", state);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameContext.Provider, {\n        value: {\n            ...state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/context/GameContext.tsx\",\n        lineNumber: 49,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDUztBQUNsRCw2Q0FBNkM7QUFDN0Msc0RBQXNEO0FBRS9DLE1BQU1JLDRCQUFjRixvREFBYUEsR0FBRztBQUVwQyxNQUFNRyxjQUFjLENBQUNDLE9BQVlDLFNBQXlDO0lBQ2hGLE9BQVFBLE9BQU9DLElBQUk7UUFDbkIsS0FBSztZQUNKLE9BQU87Z0JBQ04sR0FBR0YsS0FBSztnQkFDUkcsTUFBTUYsT0FBT0csT0FBTztZQUNyQjtRQUNELEtBQUs7WUFDSixPQUFPO2dCQUNOLEdBQUdKLEtBQUs7Z0JBQ1JHLE1BQU0sSUFBSTtZQUNYO1FBQ0QsS0FBSztZQUNKLE9BQU87Z0JBQ04sR0FBR0gsS0FBSztnQkFDUkcsTUFBTUYsT0FBT0csT0FBTztnQkFDcEJDLGFBQWEsSUFBSTtZQUNsQjtRQUNEO1lBQ0MsT0FBT0w7SUFDUjtBQUNELEVBQUU7QUFLSyxNQUFNTSxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFTLEdBQUs7SUFDcEQsTUFBTSxDQUFDUCxPQUFPUSxTQUFTLEdBQUdYLGlEQUFVQSxDQUFDRSxhQUFhO1FBQ2pESSxNQUFNLEVBQUU7UUFDUk0sYUFBYSxLQUFLO0lBQ25CO0lBRUFkLGdEQUFTQSxDQUFDLElBQU07SUFDZixxREFBcUQ7SUFDckQsa0RBQWtEO0lBQ2xELFlBQVk7SUFDWixNQUFNO0lBQ1AsR0FBRyxFQUFFO0lBQ0xlLFFBQVFDLEdBQUcsQ0FBQyxlQUFlWDtJQUUzQixxQkFDQyw4REFBQ0YsWUFBWWMsUUFBUTtRQUFDQyxPQUFPO1lBQUUsR0FBR2IsS0FBSztZQUFFUTtRQUFTO2tCQUNoREQ7Ozs7OztBQUdKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNoZXNzLy4vY29udGV4dC9HYW1lQ29udGV4dC50c3g/OTI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3Byb3ZpZGVyL2NvbmZpZ1wiO1xuLy8gaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IEdhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgZ2FtZVJlZHVjZXIgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiB7IHR5cGU6IGFueTsgcGF5bG9hZDogYW55OyB9KSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0Y2FzZSBcIkpPSU5fR0FNRVwiOlxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGdhbWU6IGFjdGlvbi5wYXlsb2FkLFxuXHRcdH07XG5cdGNhc2UgXCJTUEVDVEFURV9HQU1FXCI6XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Z2FtZTogbnVsbCxcblx0XHR9O1xuXHRjYXNlIFwiQUREX0dBTUVcIjpcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRnYW1lOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdGF1dGhJc1JlYWR5OiB0cnVlLFxuXHRcdH07XG5cdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBhbnk7XG59XG5leHBvcnQgY29uc3QgR2FtZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGdhbWVSZWR1Y2VyLCB7XG5cdFx0Z2FtZTogW10sXG5cdFx0Z2FtZUlzUmVhZHk6IGZhbHNlXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gY29uc3QgdW5zdWIgPVx0b25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG5cdFx0Ly8gXHRkaXNwYXRjaCh7dHlwZTogXCJBVVRIX1JFQURZXCIsIHBheWxvYWQ6IHVzZXJ9KTtcblx0XHQvLyBcdHVuc3ViKCk7XG5cdFx0Ly8gfSk7XG5cdH0sIFtdKTtcblx0Y29uc29sZS5sb2coXCJHYW1lIHN0YXRlP1wiLCBzdGF0ZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8R2FtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgLi4uc3RhdGUsIGRpc3BhdGNoIH19PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvR2FtZUNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiR2FtZUNvbnRleHQiLCJnYW1lUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImdhbWUiLCJwYXlsb2FkIiwiYXV0aElzUmVhZHkiLCJHYW1lUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiZ2FtZUlzUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/GameContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GameContext */ \"./context/GameContext.tsx\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GameContext__WEBPACK_IMPORTED_MODULE_3__.GameProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFdUI7QUFDQTtBQUV0QyxTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQU8sOERBQUNKLDhEQUFZQTtrQkFDbEIsNEVBQUNDLDhEQUFZQTtzQkFDYiw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jaGVzcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9HYW1lQ29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxBdXRoUHJvdmlkZXI+XG4gICAgPEdhbWVQcm92aWRlcj5cbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cbiAgICA8L0dhbWVQcm92aWRlcj5cblxuICA8L0F1dGhQcm92aWRlcj5cbn1cbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJHYW1lUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();