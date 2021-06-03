self["webpackHotUpdate_N_E"]("pages/salida/[id]",{

/***/ "./pages/salida/[id].js":
/*!******************************!*\
  !*** ./pages/salida/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/cards/MostrarSalida */ "./components/cards/MostrarSalida.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\pages\\salida\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query obtenerVehiculoEstacionado($id: ID!) {\n        obtenerVehiculoEstacionado(id: $id) {\n            cedula\n            nombre\n            horaEntrada\n            vehiculo {\n                placa\n                tipo\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject());

var SalidaPage = function SalidaPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var id = router.query.id;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(query, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data;

  if (!data) null;
  console.log(data); // const { vehiculo, cedula, nombre, horaEntrada } =
  //     data.obtenerVehiculoEstacionado;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5 py-5 border-gray-200 border-b mb-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-gray-900 text-2xl font-semibold",
        children: "Registrar Salida"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 p-5 mt-3 bg-white shadow-lg",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl font-bold mb-3",
        children: "Informacion del Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(SalidaPage, "DEGZfJqR9KLjK2ajZLUqNSLjEP8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];
});

_c = SalidaPage;
/* harmony default export */ __webpack_exports__["default"] = (SalidaPage);

var _c;

$RefreshReg$(_c, "SalidaPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsaWRhL1tpZF0uanMiXSwibmFtZXMiOlsicXVlcnkiLCJncWwiLCJTYWxpZGFQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1EQUFILG1CQUFYOztBQWNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURxQixNQUViQyxFQUZhLEdBRU5GLE1BQU0sQ0FBQ0gsS0FGRCxDQUViSyxFQUZhOztBQUFBLGtCQUlKQyx3REFBUSxDQUFDTixLQUFELEVBQVE7QUFDN0JPLGFBQVMsRUFBRTtBQUNQRixRQUFFLEVBQUZBO0FBRE87QUFEa0IsR0FBUixDQUpKO0FBQUEsTUFJYkcsSUFKYSxhQUliQSxJQUphOztBQVVyQixNQUFJLENBQUNBLElBQUwsRUFBVztBQUNYQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQVhxQixDQVlyQjtBQUNBOztBQUVBLHNCQUNJLDhEQUFDLHNEQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFLLGVBQVMsRUFBQyxrQ0FBZjtBQUFBLDZCQUNJO0FBQUksaUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQW5DRDs7R0FBTU4sVTtVQUNhRSxrRCxFQUdFRSxvRDs7O0tBSmZKLFU7QUFxQ04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsaWRhL1tpZF0uMWQ4M2YzNjE3MmQ3N2M0MDMyYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IE1vc3RyYXJTYWxpZGEgZnJvbSBcImNvbXBvbmVudHMvY2FyZHMvTW9zdHJhclNhbGlkYVwiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncWxgXHJcbiAgICBxdWVyeSBvYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbygkaWQ6IElEISkge1xyXG4gICAgICAgIG9idGVuZXJWZWhpY3Vsb0VzdGFjaW9uYWRvKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgY2VkdWxhXHJcbiAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICBob3JhRW50cmFkYVxyXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2FsaWRhUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkocXVlcnksIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghZGF0YSkgbnVsbDtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAvLyBjb25zdCB7IHZlaGljdWxvLCBjZWR1bGEsIG5vbWJyZSwgaG9yYUVudHJhZGEgfSA9XHJcbiAgICAvLyAgICAgZGF0YS5vYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS01IGJvcmRlci1ncmF5LTIwMCBib3JkZXItYiBtYi0yIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmFyIFNhbGlkYVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNSBwLTUgbXQtMyBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEluZm9ybWFjaW9uIGRlbCBWZWhpY3Vsb1xyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIHsvKiA8TW9zdHJhclNhbGlkYVxyXG4gICAgICAgICAgICAgICAgICAgIGNlZHVsYT17Y2VkdWxhfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZT17bm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGhvcmFFbnRyYWRhPXtob3JhRW50cmFkYX1cclxuICAgICAgICAgICAgICAgICAgICB2ZWhpY3Vsbz17dmVoaWN1bG99XHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FsaWRhUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==