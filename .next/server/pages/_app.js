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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"authReducer\": () => (/* binding */ authReducer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// import { auth } from \"../provider/config\";\n// import { onAuthStateChanged } from \"firebase/auth\";\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst authReducer = (state, action)=>{\n    switch(action.type){\n        case \"LOGIN\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null\n            };\n        case \"AUTH_READY\":\n            return {\n                ...state,\n                user: action.payload,\n                authIsReady: true\n            };\n        default:\n            return state;\n    }\n};\nconst AuthProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(authReducer, {\n        user: null,\n        authIsReady: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    console.log(\"Auth user?\", state);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            ...state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/context/AuthContext.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDUztBQUNsRCw2Q0FBNkM7QUFDN0Msc0RBQXNEO0FBRS9DLE1BQU1JLDRCQUFjRixvREFBYUEsR0FBRztBQUVwQyxNQUFNRyxjQUFjLENBQUNDLE9BQU9DLFNBQVc7SUFDN0MsT0FBUUEsT0FBT0MsSUFBSTtRQUNuQixLQUFLO1lBQ0osT0FBTztnQkFDTixHQUFHRixLQUFLO2dCQUNSRyxNQUFNRixPQUFPRyxPQUFPO1lBQ3JCO1FBQ0QsS0FBSztZQUNKLE9BQU87Z0JBQ04sR0FBR0osS0FBSztnQkFDUkcsTUFBTSxJQUFJO1lBQ1g7UUFDRCxLQUFLO1lBQ0osT0FBTztnQkFDTixHQUFHSCxLQUFLO2dCQUNSRyxNQUFNRixPQUFPRyxPQUFPO2dCQUNwQkMsYUFBYSxJQUFJO1lBQ2xCO1FBQ0Q7WUFDQyxPQUFPTDtJQUNSO0FBQ0QsRUFBRTtBQUtLLE1BQU1NLGVBQWUsQ0FBQyxFQUFFQyxTQUFRLEVBQVMsR0FBSztJQUNwRCxNQUFNLENBQUNQLE9BQU9RLFNBQVMsR0FBR1gsaURBQVVBLENBQUNFLGFBQWE7UUFDakRJLE1BQU0sSUFBSTtRQUNWRSxhQUFhLEtBQUs7SUFDbkI7SUFFQVYsZ0RBQVNBLENBQUMsSUFBTSxDQUVoQixHQUFHLEVBQUU7SUFDTGMsUUFBUUMsR0FBRyxDQUFDLGNBQWNWO0lBRTFCLHFCQUNDLDhEQUFDRixZQUFZYSxRQUFRO1FBQUNDLE9BQU87WUFBRSxHQUFHWixLQUFLO1lBQUVRO1FBQVM7a0JBQ2hERDs7Ozs7O0FBR0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtY2hlc3MvLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD9mZGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vcHJvdmlkZXIvY29uZmlnXCI7XG4vLyBpbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBhdXRoUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0Y2FzZSBcIkxPR0lOXCI6XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0dXNlcjogYWN0aW9uLnBheWxvYWQsXG5cdFx0fTtcblx0Y2FzZSBcIkxPR09VVFwiOlxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdHVzZXI6IG51bGwsXG5cdFx0fTtcblx0Y2FzZSBcIkFVVEhfUkVBRFlcIjpcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHR1c2VyOiBhY3Rpb24ucGF5bG9hZCxcblx0XHRcdGF1dGhJc1JlYWR5OiB0cnVlLFxuXHRcdH07XG5cdGRlZmF1bHQ6XG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBhbnk7XG59XG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGF1dGhSZWR1Y2VyLCB7XG5cdFx0dXNlcjogbnVsbCxcblx0XHRhdXRoSXNSZWFkeTogZmFsc2Vcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblxuXHR9LCBbXSk7XG5cdGNvbnNvbGUubG9nKFwiQXV0aCB1c2VyP1wiLCBzdGF0ZSk7XG5cblx0cmV0dXJuIChcblx0XHQ8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgLi4uc3RhdGUsIGRpc3BhdGNoIH19PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiQXV0aENvbnRleHQiLCJhdXRoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInVzZXIiLCJwYXlsb2FkIiwiYXV0aElzUmVhZHkiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./context/GameContext.tsx":
/*!*********************************!*\
  !*** ./context/GameContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameContext\": () => (/* binding */ GameContext),\n/* harmony export */   \"GameProvider\": () => (/* binding */ GameProvider),\n/* harmony export */   \"gameReducer\": () => (/* binding */ gameReducer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// import { auth } from \"../provider/config\";\n// import { onAuthStateChanged } from \"firebase/auth\";\nconst GameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst gameReducer = (state, action)=>{\n    switch(action.type){\n        case \"JOIN_GAME\":\n            return {\n                ...state,\n                game: action.payload\n            };\n        case \"SPECTATE_GAME\":\n            return {\n                ...state,\n                game: null\n            };\n        case \"ADD_GAME\":\n            console.log(\"dddd\", state.game);\n            // const x  = [...state?.game!, action.payload];\n            // localStorage.setItem('games', JSON.stringify(x))\n            return {\n                ...state,\n                game: action.payload,\n                authIsReady: true\n            };\n        default:\n            return state;\n    }\n};\nconst GameProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(gameReducer, {\n        game: [],\n        gameIsReady: false\n    });\n    console.log(\"Game state?\", state);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameContext.Provider, {\n        value: {\n            ...state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/context/GameContext.tsx\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0dhbWVDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDeUM7QUFDUztBQUVsRCw2Q0FBNkM7QUFDN0Msc0RBQXNEO0FBRS9DLE1BQU1HLDRCQUFjRixvREFBYUEsR0FBRztBQUVwQyxNQUFNRyxjQUFjLENBQUNDLE9BQVlDLFNBQXlDO0lBQ2hGLE9BQVFBLE9BQU9DLElBQUk7UUFDbkIsS0FBSztZQUNKLE9BQU87Z0JBQ04sR0FBR0YsS0FBSztnQkFDUkcsTUFBTUYsT0FBT0csT0FBTztZQUNyQjtRQUNELEtBQUs7WUFDSixPQUFPO2dCQUNOLEdBQUdKLEtBQUs7Z0JBQ1JHLE1BQU0sSUFBSTtZQUNYO1FBQ0QsS0FBSztZQUNFRSxRQUFRQyxHQUFHLENBQUMsUUFBT04sTUFBTUcsSUFBSTtZQUM3QixnREFBZ0Q7WUFDaEQsbURBQW1EO1lBQ3pELE9BQU87Z0JBQ04sR0FBR0gsS0FBSztnQkFDUkcsTUFBTUYsT0FBT0csT0FBTztnQkFDcEJHLGFBQWEsSUFBSTtZQUNsQjtRQUVEO1lBQ0MsT0FBT1A7SUFDUjtBQUNELEVBQUU7QUFLSyxNQUFNUSxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFTLEdBQUs7SUFFcEQsTUFBTSxDQUFDVCxPQUFPVSxTQUFTLEdBQUdiLGlEQUFVQSxDQUFDRSxhQUFhO1FBQ2pESSxNQUFNLEVBQUU7UUFDUlEsYUFBYSxLQUFLO0lBQ25CO0lBR0FOLFFBQVFDLEdBQUcsQ0FBQyxlQUFlTjtJQUMzQixxQkFDQyw4REFBQ0YsWUFBWWMsUUFBUTtRQUFDQyxPQUFPO1lBQUUsR0FBR2IsS0FBSztZQUFFVTtRQUFTO2tCQUNoREQ7Ozs7OztBQUdKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNoZXNzLy4vY29udGV4dC9HYW1lQ29udGV4dC50c3g/OTI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdGF0IH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gXCIuLi9ob29rcy91c2VMb2NhbFN0b3JhZ2VcIjtcbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vcHJvdmlkZXIvY29uZmlnXCI7XG4vLyBpbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5leHBvcnQgY29uc3QgR2FtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBnYW1lUmVkdWNlciA9IChzdGF0ZTogYW55LCBhY3Rpb246IHsgdHlwZTogYW55OyBwYXlsb2FkOiBhbnk7IH0pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRjYXNlIFwiSk9JTl9HQU1FXCI6XG5cdFx0cmV0dXJuIHtcblx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0Z2FtZTogYWN0aW9uLnBheWxvYWQsXG5cdFx0fTtcblx0Y2FzZSBcIlNQRUNUQVRFX0dBTUVcIjpcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRnYW1lOiBudWxsLFxuXHRcdH07XG5cdGNhc2UgXCJBRERfR0FNRVwiOlxuICAgICAgICBjb25zb2xlLmxvZyhcImRkZGRcIixzdGF0ZS5nYW1lKTtcbiAgICAgICAgLy8gY29uc3QgeCAgPSBbLi4uc3RhdGU/LmdhbWUhLCBhY3Rpb24ucGF5bG9hZF07XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lcycsIEpTT04uc3RyaW5naWZ5KHgpKVxuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdGdhbWU6IGFjdGlvbi5wYXlsb2FkLFxuXHRcdFx0YXV0aElzUmVhZHk6IHRydWUsXG5cdFx0fTtcbiAgICAgIFxuXHRkZWZhdWx0OlxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBjaGlsZHJlbjogYW55O1xufVxuZXhwb3J0IGNvbnN0IEdhbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG5cblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGdhbWVSZWR1Y2VyLCB7XG5cdFx0Z2FtZTogW10sXG5cdFx0Z2FtZUlzUmVhZHk6IGZhbHNlXG5cdH0pO1xuXG5cblx0Y29uc29sZS5sb2coXCJHYW1lIHN0YXRlP1wiLCBzdGF0ZSk7XG5cdHJldHVybiAoXG5cdFx0PEdhbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCBkaXNwYXRjaCB9fT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L0dhbWVDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsIkdhbWVDb250ZXh0IiwiZ2FtZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJnYW1lIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJhdXRoSXNSZWFkeSIsIkdhbWVQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJnYW1lSXNSZWFkeSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/GameContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var _context_GameContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GameContext */ \"./context/GameContext.tsx\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"@web3-react/core\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction getLibrary(provider) {\n    return new (web3__WEBPACK_IMPORTED_MODULE_5___default())(provider);\n}\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.Web3ReactProvider, {\n        getLibrary: getLibrary,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GameContext__WEBPACK_IMPORTED_MODULE_3__.GameProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/juwon/chess-board/pages/_app.tsx\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRXVCO0FBQ0E7QUFDRDtBQUU1QjtBQUV4QixTQUFTSSxXQUFXQyxRQUFrQixFQUFFO0lBRXRDLE9BQU8sSUFBSUYsNkNBQUlBLENBQUNFO0FBRWhCO0FBQ2EsU0FBU0MsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELHFCQUFPLDhEQUFDTiwrREFBaUJBO1FBQUNFLFlBQVlBO2tCQUN0Qyw0RUFBQ0osOERBQVlBO3NCQUNYLDRFQUFDQyw4REFBWUE7MEJBQ2IsNEVBQUNNO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1jaGVzcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0IHsgR2FtZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9HYW1lQ29udGV4dCdcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcbmltcG9ydCB7IEV4dGVybmFsUHJvdmlkZXIsIEpzb25ScGNGZXRjaEZ1bmMsIFdlYjNQcm92aWRlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIjtcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IHsgcHJvdmlkZXIgfSBmcm9tICd3ZWIzLWNvcmUnXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBwcm92aWRlcikge1xuXG4gIHJldHVybiBuZXcgV2ViMyhwcm92aWRlcik7XG4gIFxuICB9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxuICA8QXV0aFByb3ZpZGVyPlxuICAgIDxHYW1lUHJvdmlkZXI+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgPC9HYW1lUHJvdmlkZXI+XG5cbiAgPC9BdXRoUHJvdmlkZXI+XG4gIDwvV2ViM1JlYWN0UHJvdmlkZXI+XG5cbn1cbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJHYW1lUHJvdmlkZXIiLCJXZWIzUmVhY3RQcm92aWRlciIsIldlYjMiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

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

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("web3");

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