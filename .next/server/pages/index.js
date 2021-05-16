/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./config/app.ts":
/*!***********************!*\
  !*** ./config/app.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isProduction\": function() { return /* binding */ isProduction; },\n/* harmony export */   \"isDebug\": function() { return /* binding */ isDebug; },\n/* harmony export */   \"apiEndpoint\": function() { return /* binding */ apiEndpoint; }\n/* harmony export */ });\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ \"./config/env.ts\");\n\nconst isProduction = _env__WEBPACK_IMPORTED_MODULE_0__.ENV === 'production';\nconst isDebug = _env__WEBPACK_IMPORTED_MODULE_0__.ENV === 'development';\nconst apiEndpoint = isDebug ? 'http://localhost:3065' : 'productEndpoints';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vY29uZmlnL2FwcC50cz9iY2E4Il0sIm5hbWVzIjpbImlzUHJvZHVjdGlvbiIsIkVOViIsImlzRGVidWciLCJhcGlFbmRwb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxHQUFHQyxxQ0FBRyxLQUFLLFlBQTdCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxxQ0FBRyxLQUFLLGFBQXhCO0FBRUEsTUFBTUUsV0FBVyxHQUFHRCxPQUFPLEdBQUcsdUJBQUgsR0FBNkIsa0JBQXhEIiwiZmlsZSI6Ii4vY29uZmlnL2FwcC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVOViB9IGZyb20gJy4vZW52JztcblxuZXhwb3J0IGNvbnN0IGlzUHJvZHVjdGlvbiA9IEVOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuZXhwb3J0IGNvbnN0IGlzRGVidWcgPSBFTlYgPT09ICdkZXZlbG9wbWVudCc7XG5cbmV4cG9ydCBjb25zdCBhcGlFbmRwb2ludCA9IGlzRGVidWcgPyAnaHR0cDovL2xvY2FsaG9zdDozMDY1JyA6ICdwcm9kdWN0RW5kcG9pbnRzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/app.ts\n");

/***/ }),

/***/ "./config/env.ts":
/*!***********************!*\
  !*** ./config/env.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ENV\": function() { return /* binding */ ENV; }\n/* harmony export */ });\nconst ENV = \"development\" || 0;\nconsole.log(ENV, 'ENV');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vY29uZmlnL2Vudi50cz9mNTFlIl0sIm5hbWVzIjpbIkVOViIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxHQUFHLEdBQUcsaUJBQW1FLENBQS9FO0FBRVBDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLEtBQWpCIiwiZmlsZSI6Ii4vY29uZmlnL2Vudi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBFTlYgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgYXMgJ3Byb2R1Y3Rpb24nIHwgJ3Rlc3QnIHwgJ2RldmVsb3BtZW50JykgfHwgJ2RldmVsb3BtZW50JztcblxuY29uc29sZS5sb2coRU5WLCAnRU5WJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/env.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/configureStore */ \"./store/configureStore.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types_user_userType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/user/userType */ \"./types/user/userType.ts\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/mark/Desktop/boliterplate/nextjs_storybook_skeleton_typescript/pages/index.tsx\";\n\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"Home Page\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_1__.default.getServerSideProps(async context => {\n  var _sagaTask;\n\n  const cookie = context.req ? context.req.headers.cookie : '';\n  (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.Cookie) = '';\n\n  if (context.req && cookie) {\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.Cookie) = cookie;\n  }\n\n  context.store.dispatch({\n    type: _types_user_userType__WEBPACK_IMPORTED_MODULE_3__.LOAD_MY_INFO_REQUEST\n  });\n  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_4__.END);\n  await ((_sagaTask = context.store.sagaTask) === null || _sagaTask === void 0 ? void 0 : _sagaTask.toPromise());\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsImdldFNlcnZlclNpZGVQcm9wcyIsIndyYXBwZXIiLCJjb250ZXh0IiwiY29va2llIiwicmVxIiwiaGVhZGVycyIsImF4aW9zIiwic3RvcmUiLCJkaXNwYXRjaCIsInR5cGUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkVORCIsInNhZ2FUYXNrIiwidG9Qcm9taXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2pCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUdPLE1BQU1DLGtCQUFrQixHQUFHQyw2RUFBQSxDQUEyQixNQUFNQyxPQUFOLElBQWlCO0FBQUE7O0FBQzVFLFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxHQUFSLEdBQWNGLE9BQU8sQ0FBQ0UsR0FBUixDQUFZQyxPQUFaLENBQW9CRixNQUFsQyxHQUEyQyxFQUExRDtBQUNBRyx3RUFBQSxHQUFnQyxFQUFoQzs7QUFDQSxNQUFJSixPQUFPLENBQUNFLEdBQVIsSUFBZUQsTUFBbkIsRUFBMkI7QUFDekJHLDBFQUFBLEdBQWdDSCxNQUFoQztBQUNEOztBQUNERCxTQUFPLENBQUNLLEtBQVIsQ0FBY0MsUUFBZCxDQUF1QjtBQUNyQkMsUUFBSSxFQUFFQyxzRUFBb0JBO0FBREwsR0FBdkI7QUFJQVIsU0FBTyxDQUFDSyxLQUFSLENBQWNDLFFBQWQsQ0FBdUJHLDJDQUF2QjtBQUNBLHNCQUFPVCxPQUFPLENBQUNLLEtBQVQsQ0FBNkJLLFFBQW5DLDhDQUFNLFVBQXVDQyxTQUF2QyxFQUFOO0FBQ0QsQ0FaaUMsQ0FBM0I7QUFhUCwrREFBZWQsSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3cmFwcGVyLCB7IFNhZ2FTdG9yZSB9IGZyb20gJ0BzdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi90eXBlcy91c2VyL3VzZXJUeXBlJztcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gPGRpdj5Ib21lIFBhZ2U8L2Rpdj47XG59O1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIGNvbnRleHQgPT4ge1xuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XG4gIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcbiAgfVxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcbiAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgfSk7XG5cbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xuICBhd2FpdCAoY29udGV4dC5zdG9yZSBhcyBTYWdhU3RvcmUpLnNhZ2FUYXNrPy50b1Byb21pc2UoKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./reducers/user.ts":
/*!**************************!*\
  !*** ./reducers/user.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_user_userInitialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/user/userInitialState */ \"./types/user/userInitialState.ts\");\n/* harmony import */ var _types_user_userType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/user/userType */ \"./types/user/userType.ts\");\n\n\n\n\nconst reducer = (state = _types_user_userInitialState__WEBPACK_IMPORTED_MODULE_1__.userInitialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n  switch (action.type) {\n    case _types_user_userType__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_REQUEST:\n      draft.signUpLoading = true;\n      draft.signUpDone = false;\n      draft.signUpError = null;\n      break;\n\n    case _types_user_userType__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_SUCCESS:\n      draft.signUpLoading = false;\n      draft.signUpDone = true;\n      break;\n\n    case _types_user_userType__WEBPACK_IMPORTED_MODULE_2__.SIGN_UP_FAILURE:\n      draft.signUpLoading = false;\n      draft.signUpError = action.error;\n      break;\n\n    case _types_user_userType__WEBPACK_IMPORTED_MODULE_2__.LOAD_MY_INFO_REQUEST:\n      draft.loadMyInfoLoading = true;\n      draft.loadMyInfoDone = false;\n      draft.loadMyInfoError = null;\n      break;\n\n    case _types_user_userType__WEBPACK_IMPORTED_MODULE_2__.LOAD_MY_INFO_SUCCESS:\n      draft.loadMyInfoLoading = false;\n      draft.loadMyInfoDone = true;\n      draft.me = action.data;\n      break;\n\n    case _types_user_userType__WEBPACK_IMPORTED_MODULE_2__.LOAD_MY_INFO_FAILURE:\n      draft.loadMyInfoLoading = false;\n      draft.loadMyInfoError = action.error;\n      break;\n\n    default:\n      break;\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vcmVkdWNlcnMvdXNlci50cz9lNDJmIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJzdGF0ZSIsInVzZXJJbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImVycm9yIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJtZSIsImRhdGEiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBR0E7O0FBVUEsTUFBTUEsT0FBa0MsR0FBRyxDQUFDQyxLQUFLLEdBQUdDLDBFQUFULEVBQTJCQyxNQUEzQixLQUN6Q0MsNENBQU8sQ0FBbUJILEtBQW5CLEVBQTJCSSxLQUFELElBQW9DO0FBQ25FLFVBQVFGLE1BQU0sQ0FBQ0csSUFBZjtBQUNFLFNBQUtDLGlFQUFMO0FBQ0VGLFdBQUssQ0FBQ0csYUFBTixHQUFzQixJQUF0QjtBQUNBSCxXQUFLLENBQUNJLFVBQU4sR0FBbUIsS0FBbkI7QUFDQUosV0FBSyxDQUFDSyxXQUFOLEdBQW9CLElBQXBCO0FBQ0E7O0FBQ0YsU0FBS0MsaUVBQUw7QUFDRU4sV0FBSyxDQUFDRyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FILFdBQUssQ0FBQ0ksVUFBTixHQUFtQixJQUFuQjtBQUNBOztBQUNGLFNBQUtHLGlFQUFMO0FBQ0VQLFdBQUssQ0FBQ0csYUFBTixHQUFzQixLQUF0QjtBQUNBSCxXQUFLLENBQUNLLFdBQU4sR0FBb0JQLE1BQU0sQ0FBQ1UsS0FBM0I7QUFDQTs7QUFFRixTQUFLQyxzRUFBTDtBQUNFVCxXQUFLLENBQUNVLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0FWLFdBQUssQ0FBQ1csY0FBTixHQUF1QixLQUF2QjtBQUNBWCxXQUFLLENBQUNZLGVBQU4sR0FBd0IsSUFBeEI7QUFDQTs7QUFDRixTQUFLQyxzRUFBTDtBQUNFYixXQUFLLENBQUNVLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FWLFdBQUssQ0FBQ1csY0FBTixHQUF1QixJQUF2QjtBQUNBWCxXQUFLLENBQUNjLEVBQU4sR0FBV2hCLE1BQU0sQ0FBQ2lCLElBQWxCO0FBQ0E7O0FBQ0YsU0FBS0Msc0VBQUw7QUFDRWhCLFdBQUssQ0FBQ1UsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQVYsV0FBSyxDQUFDWSxlQUFOLEdBQXdCZCxNQUFNLENBQUNVLEtBQS9CO0FBQ0E7O0FBRUY7QUFDRTtBQS9CSjtBQWlDRCxDQWxDTSxDQURUOztBQXFDQSwrREFBZWIsT0FBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSwgeyBEcmFmdCB9IGZyb20gJ2ltbWVyJztcbmltcG9ydCB7IHVzZXJJbml0aWFsU3RhdGUgfSBmcm9tICcuLi90eXBlcy91c2VyL3VzZXJJbml0aWFsU3RhdGUnO1xuXG5pbXBvcnQgeyBBbnlBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge1xuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxuICBTSUdOX1VQX0ZBSUxVUkUsXG4gIFNJR05fVVBfUkVRVUVTVCxcbiAgU0lHTl9VUF9TVUNDRVNTLFxuICBVc2VySW5pdGlhbFN0YXRlLFxufSBmcm9tICcuLi90eXBlcy91c2VyL3VzZXJUeXBlJztcblxuY29uc3QgcmVkdWNlcjogUmVkdWNlcjxVc2VySW5pdGlhbFN0YXRlPiA9IChzdGF0ZSA9IHVzZXJJbml0aWFsU3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSA9PlxuICBwcm9kdWNlPFVzZXJJbml0aWFsU3RhdGU+KHN0YXRlLCAoZHJhZnQ6IERyYWZ0PFVzZXJJbml0aWFsU3RhdGU+KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.ts\n");

/***/ }),

/***/ "./sagas/index.ts":
/*!************************!*\
  !*** ./sagas/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ rootSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./sagas/user.ts\");\n\n\nfunction* rootSaga() {\n  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_user__WEBPACK_IMPORTED_MODULE_1__.default)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vc2FnYXMvaW5kZXgudHM/ZWYwMiJdLCJuYW1lcyI6WyJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFFZSxVQUFVQSxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1DLHVEQUFHLENBQUMsQ0FBQ0Msd0RBQUksQ0FBQ0MsMENBQUQsQ0FBTCxDQUFELENBQVQ7QUFDRCIsImZpbGUiOiIuL3NhZ2FzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcblxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHVzZXJTYWdhKV0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/index.ts\n");

/***/ }),

/***/ "./sagas/user.ts":
/*!***********************!*\
  !*** ./sagas/user.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ userSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types_user_userType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/user/userType */ \"./types/user/userType.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./services/index.ts\");\n\n\n\n\nfunction* signUp(action) {\n  try {\n    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)((0,_services__WEBPACK_IMPORTED_MODULE_2__.userService)().signUp, action.data);\n  } catch (e) {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n      type: _types_user_userType__WEBPACK_IMPORTED_MODULE_1__.SIGN_UP_FAILURE,\n      error: e.response.data\n    });\n  }\n}\n\nfunction* loadMyInfo() {\n  try {\n    const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)((0,_services__WEBPACK_IMPORTED_MODULE_2__.userService)().loadMyInfo);\n    console.log(result);\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n      type: _types_user_userType__WEBPACK_IMPORTED_MODULE_1__.LOAD_MY_INFO_SUCCESS,\n      data: result.data\n    });\n  } catch (e) {\n    console.error(e.response.data);\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({\n      type: _types_user_userType__WEBPACK_IMPORTED_MODULE_1__.LOAD_MY_INFO_FAILURE,\n      error: e.response.data\n    });\n  }\n}\n\nfunction* watchSignUp() {\n  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_types_user_userType__WEBPACK_IMPORTED_MODULE_1__.SIGN_UP_REQUEST, signUp);\n}\n\nfunction* watchLoadMyInfo() {\n  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_types_user_userType__WEBPACK_IMPORTED_MODULE_1__.LOAD_MY_INFO_REQUEST, loadMyInfo);\n}\n\nfunction* userSaga() {\n  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadMyInfo)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vc2FnYXMvdXNlci50cz9lZDRhIl0sIm5hbWVzIjpbInNpZ25VcCIsImFjdGlvbiIsInJlc3VsdCIsImNhbGwiLCJ1c2VyU2VydmljZSIsImRhdGEiLCJlIiwicHV0IiwidHlwZSIsIlNJR05fVVBfRkFJTFVSRSIsImVycm9yIiwicmVzcG9uc2UiLCJsb2FkTXlJbmZvIiwiY29uc29sZSIsImxvZyIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJ3YXRjaFNpZ25VcCIsInRha2VMYXRlc3QiLCJTSUdOX1VQX1JFUVVFU1QiLCJ3YXRjaExvYWRNeUluZm8iLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsInVzZXJTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7O0FBR0EsVUFBVUEsTUFBVixDQUFpQkMsTUFBakIsRUFBdUM7QUFDckMsTUFBSTtBQUNGLFVBQU1DLE1BQU0sR0FBRyxNQUFNQyx3REFBSSxDQUFDQyxzREFBVyxHQUFHSixNQUFmLEVBQXVCQyxNQUFNLENBQUNJLElBQTlCLENBQXpCO0FBQ0QsR0FGRCxDQUVFLE9BQU9DLENBQVAsRUFBVTtBQUNWLFVBQU1DLHVEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFQyxpRUFERTtBQUVSQyxXQUFLLEVBQUVKLENBQUMsQ0FBQ0ssUUFBRixDQUFXTjtBQUZWLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVU8sVUFBVixHQUF1QjtBQUNyQixNQUFJO0FBQ0YsVUFBTVYsTUFBTSxHQUFHLE1BQU1DLHdEQUFJLENBQUNDLHNEQUFXLEdBQUdRLFVBQWYsQ0FBekI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlaLE1BQVo7QUFDQSxVQUFNSyx1REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRU8sc0VBREU7QUFFUlYsVUFBSSxFQUFFSCxNQUFNLENBQUNHO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FQRCxDQU9FLE9BQU9DLENBQVAsRUFBVTtBQUNWTyxXQUFPLENBQUNILEtBQVIsQ0FBY0osQ0FBQyxDQUFDSyxRQUFGLENBQVdOLElBQXpCO0FBQ0EsVUFBTUUsdURBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVRLHNFQURFO0FBRVJOLFdBQUssRUFBRUosQ0FBQyxDQUFDSyxRQUFGLENBQVdOO0FBRlYsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVWSxXQUFWLEdBQXdCO0FBQ3RCLFFBQU1DLDhEQUFVLENBQUNDLGlFQUFELEVBQWtCbkIsTUFBbEIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVb0IsZUFBVixHQUE0QjtBQUMxQixRQUFNRiw4REFBVSxDQUFDRyxzRUFBRCxFQUF1QlQsVUFBdkIsQ0FBaEI7QUFDRDs7QUFFYyxVQUFVVSxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1DLHVEQUFHLENBQUMsQ0FBQ0Msd0RBQUksQ0FBQ1AsV0FBRCxDQUFMLEVBQW9CTyx3REFBSSxDQUFDSixlQUFELENBQXhCLENBQUQsQ0FBVDtBQUNEIiwiZmlsZSI6Ii4vc2FnYXMvdXNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7XG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTaWduVXBBY3Rpb24sXG59IGZyb20gJy4uL3R5cGVzL3VzZXIvdXNlclR5cGUnO1xuaW1wb3J0IHsgdXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbjogU2lnblVwQWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1c2VyU2VydmljZSgpLnNpZ25VcCwgYWN0aW9uLmRhdGEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1c2VyU2VydmljZSgpLmxvYWRNeUluZm8pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUucmVzcG9uc2UuZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGUucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hTaWduVXApLCBmb3JrKHdhdGNoTG9hZE15SW5mbyldKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/user.ts\n");

/***/ }),

/***/ "./services/index.ts":
/*!***************************!*\
  !*** ./services/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userService\": function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.default; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/app */ \"./config/app.ts\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./services/user.ts\");\n\n\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = _config_app__WEBPACK_IMPORTED_MODULE_1__.apiEndpoint;\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vc2VydmljZXMvaW5kZXgudHM/MWIwNSJdLCJuYW1lcyI6WyJheGlvcyIsImFwaUVuZHBvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFFQUEsK0RBQUEsR0FBeUJDLG9EQUF6QjtBQUNBRCx1RUFBQSxHQUFpQyxJQUFqQyIsImZpbGUiOiIuL3NlcnZpY2VzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgYXBpRW5kcG9pbnQgfSBmcm9tICdAY29uZmlnL2FwcCc7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBhcGlFbmRwb2ludDtcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXInO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/index.ts\n");

/***/ }),

/***/ "./services/user.ts":
/*!**************************!*\
  !*** ./services/user.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return {\n    signUp: ({\n      email,\n      password\n    }) => axios__WEBPACK_IMPORTED_MODULE_0___default().post('/users', {\n      email,\n      password\n    }),\n    loadMyInfo: async () => {\n      const data = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/user');\n      console.log(data);\n      return data;\n    }\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vc2VydmljZXMvdXNlci50cz8yNWUyIl0sIm5hbWVzIjpbInNpZ25VcCIsImVtYWlsIiwicGFzc3dvcmQiLCJheGlvcyIsImxvYWRNeUluZm8iLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFPQSwrREFBZSxNQUFNO0FBQ25CLFNBQU87QUFDTEEsVUFBTSxFQUFFLENBQUM7QUFBRUMsV0FBRjtBQUFTQztBQUFULEtBQUQsS0FBbUNDLGlEQUFBLENBQVcsUUFBWCxFQUFxQjtBQUFFRixXQUFGO0FBQVNDO0FBQVQsS0FBckIsQ0FEdEM7QUFFTEUsY0FBVSxFQUFFLFlBQVk7QUFDdEIsWUFBTUMsSUFBSSxHQUFHLE1BQU1GLGdEQUFBLENBQVUsT0FBVixDQUFuQjtBQUNBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGFBQU9BLElBQVA7QUFDRDtBQU5JLEdBQVA7QUFRRCxDQVREIiwiZmlsZSI6Ii4vc2VydmljZXMvdXNlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmludGVyZmFjZSBVc2VyRGF0YSB7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzaWduVXA6ICh7IGVtYWlsLCBwYXNzd29yZCB9OiBVc2VyRGF0YSkgPT4gYXhpb3MucG9zdCgnL3VzZXJzJywgeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgbG9hZE15SW5mbzogYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnL3VzZXInKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/user.ts\n");

/***/ }),

/***/ "./store/configureStore.ts":
/*!*********************************!*\
  !*** ./store/configureStore.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.ts\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.ts\");\n\n\n\n\n\n\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_0___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers_user__WEBPACK_IMPORTED_MODULE_4__.default, enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__.default);\n  return store;\n};\n\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUudHM/NmUyOSJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFNQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELENBQXBCO0FBQ0EsUUFBTUcsUUFBUSxHQUNaLFNBQ0lDLENBREosR0FFSUMsNkVBQW1CLENBQUNDLHNEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUh6QjtBQUlBLFFBQU1LLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ0MsbURBQUQsRUFBVU4sUUFBVixDQUF6QjtBQUNDSSxPQUFELENBQXFCRyxRQUFyQixHQUFnQ1YsY0FBYyxDQUFDVyxHQUFmLENBQW1CQywyQ0FBbkIsQ0FBaEM7QUFDQSxTQUFPTCxLQUFQO0FBQ0QsQ0FWRDs7QUFZQSxNQUFNTSxPQUFPLEdBQUdDLGlFQUFhLENBQUNmLGNBQUQsRUFBaUI7QUFDNUNnQixPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSUEsK0RBQWVGLE9BQWYiLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSwgeyBUYXNrIH0gZnJvbSAncmVkdXgtc2FnYSc7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlLCBTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcblxuZXhwb3J0IGludGVyZmFjZSBTYWdhU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG4gIHNhZ2FUYXNrPzogVGFzaztcbn1cblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xuICBjb25zdCBlbmhhbmNlciA9XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xuICAoc3RvcmUgYXMgU2FnYVN0b3JlKS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.ts\n");

/***/ }),

/***/ "./types/user/userInitialState.ts":
/*!****************************************!*\
  !*** ./types/user/userInitialState.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userInitialState\": function() { return /* binding */ userInitialState; }\n/* harmony export */ });\nconst userInitialState = {\n  loadMyInfoLoading: false,\n  loadMyInfoDone: false,\n  loadMyInfoError: null,\n  signUpLoading: false,\n  signUpDone: false,\n  signUpError: null,\n  me: null\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vdHlwZXMvdXNlci91c2VySW5pdGlhbFN0YXRlLnRzP2IxY2MiXSwibmFtZXMiOlsidXNlckluaXRpYWxTdGF0ZSIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibWUiXSwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxnQkFBa0MsR0FBRztBQUNoREMsbUJBQWlCLEVBQUUsS0FENkI7QUFFaERDLGdCQUFjLEVBQUUsS0FGZ0M7QUFHaERDLGlCQUFlLEVBQUUsSUFIK0I7QUFJaERDLGVBQWEsRUFBRSxLQUppQztBQUtoREMsWUFBVSxFQUFFLEtBTG9DO0FBTWhEQyxhQUFXLEVBQUUsSUFObUM7QUFPaERDLElBQUUsRUFBRTtBQVA0QyxDQUEzQyIsImZpbGUiOiIuL3R5cGVzL3VzZXIvdXNlckluaXRpYWxTdGF0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJJbml0aWFsU3RhdGUgfSBmcm9tICcuL3VzZXJUeXBlJztcblxuZXhwb3J0IGNvbnN0IHVzZXJJbml0aWFsU3RhdGU6IFVzZXJJbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSxcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRXJyb3I6IG51bGwsXG4gIG1lOiBudWxsLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./types/user/userInitialState.ts\n");

/***/ }),

/***/ "./types/user/userType.ts":
/*!********************************!*\
  !*** ./types/user/userType.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOAD_MY_INFO_REQUEST\": function() { return /* binding */ LOAD_MY_INFO_REQUEST; },\n/* harmony export */   \"LOAD_MY_INFO_SUCCESS\": function() { return /* binding */ LOAD_MY_INFO_SUCCESS; },\n/* harmony export */   \"LOAD_MY_INFO_FAILURE\": function() { return /* binding */ LOAD_MY_INFO_FAILURE; },\n/* harmony export */   \"SIGN_UP_REQUEST\": function() { return /* binding */ SIGN_UP_REQUEST; },\n/* harmony export */   \"SIGN_UP_SUCCESS\": function() { return /* binding */ SIGN_UP_SUCCESS; },\n/* harmony export */   \"SIGN_UP_FAILURE\": function() { return /* binding */ SIGN_UP_FAILURE; }\n/* harmony export */ });\n// userInitialState\n// sign up\nconst LOAD_MY_INFO_REQUEST = 'user/LOAD_MY_INFO_REQUEST';\nconst LOAD_MY_INFO_SUCCESS = 'user/LOAD_MY_INFO_SUCCESS';\nconst LOAD_MY_INFO_FAILURE = 'user/LOAD_MY_INFO_FAILURE';\nconst SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';\nconst SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';\nconst SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X3N0b3J5Ym9va19wcmFjdGljZV90eXBlc2NyaXB0Ly4vdHlwZXMvdXNlci91c2VyVHlwZS50cz8zNDU5Il0sIm5hbWVzIjpbIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFZQTtBQWFPLE1BQU1BLG9CQUFvQixHQUFHLDJCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLDJCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLDJCQUE3QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxzQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsc0JBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLHNCQUF4QiIsImZpbGUiOiIuL3R5cGVzL3VzZXIvdXNlclR5cGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2VySW5pdGlhbFN0YXRlXG5cbmV4cG9ydCB0eXBlIFVzZXJJbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBib29sZWFuO1xuICBsb2FkTXlJbmZvRG9uZTogYm9vbGVhbjtcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsIHwgRXJyb3I7XG4gIHNpZ25VcExvYWRpbmc6IGJvb2xlYW47XG4gIHNpZ25VcERvbmU6IGJvb2xlYW47XG4gIHNpZ25VcEVycm9yOiBudWxsIHwgRXJyb3I7XG4gIG1lOiB7fSB8IGFueTtcbn07XG5cbi8vIHNpZ24gdXBcbnR5cGUgU2lnblVwRGF0YSA9IHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgbmlja25hbWU6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU2lnblVwQWN0aW9uID0ge1xuICB0eXBlOiBzdHJpbmc7XG4gIGRhdGE6IFNpZ25VcERhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICd1c2VyL0xPQURfTVlfSU5GT19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICd1c2VyL0xPQURfTVlfSU5GT19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICd1c2VyL0xPQURfTVlfSU5GT19GQUlMVVJFJztcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAndXNlci9TSUdOX1VQX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICd1c2VyL1NJR05fVVBfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ3VzZXIvU0lHTl9VUF9GQUlMVVJFJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./types/user/userType.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("immer");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();