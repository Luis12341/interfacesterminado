self["webpackHotUpdate_N_E"]("pages/vehiculos/[id]",{

/***/ "./pages/vehiculos/[id].js":
/*!*********************************!*\
  !*** ./pages/vehiculos/[id].js ***!
  \*********************************/
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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\pages\\vehiculos\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query obternerHistorialVehiculo($id: ID!) {\n        obtenerHistorialVehiculo(id: $id) {\n            vehiculo {\n                id\n                placa\n                tipo\n            }\n            historial {\n                id\n                cedula\n                nombre\n                horaEntrada\n                horaSalida\n                montoPagado\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject());

var VehiculoPage = function VehiculoPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var id = router.query.id;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(query, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data;

  if (!data) return null;
  var _data$obtenerHistoria = data.obtenerHistorialVehiculo,
      vehiculo = _data$obtenerHistoria.vehiculo,
      historial = _data$obtenerHistoria.historial;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5 py-5 border-gray-200 border-b mb-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-gray-900 text-2xl font-semibold",
        children: "Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 px-5 mt-3 py-3 bg-white shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Placa vehiculo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this), " ", vehiculo.placa]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Tipo de vehiculo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), " ", vehiculo.tipo]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, _this);
};

_s(VehiculoPage, "f9ssaKGzixDM9dAqbM+mENt90l0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];
});

_c = VehiculoPage;
/* harmony default export */ __webpack_exports__["default"] = (VehiculoPage);

var _c;

$RefreshReg$(_c, "VehiculoPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVoaWN1bG9zL1tpZF0uanMiXSwibmFtZXMiOlsicXVlcnkiLCJncWwiLCJWZWhpY3Vsb1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsIm9idGVuZXJIaXN0b3JpYWxWZWhpY3VsbyIsInZlaGljdWxvIiwiaGlzdG9yaWFsIiwicGxhY2EiLCJ0aXBvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1EQUFILG1CQUFYOztBQW9CQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEdUIsTUFFZkMsRUFGZSxHQUVSRixNQUFNLENBQUNILEtBRkMsQ0FFZkssRUFGZTs7QUFBQSxrQkFJUkMsd0RBQVEsQ0FBQ04sS0FBRCxFQUFPO0FBQzFCTyxhQUFTLEVBQUM7QUFDTkYsUUFBRSxFQUFGQTtBQURNO0FBRGdCLEdBQVAsQ0FKQTtBQUFBLE1BSWhCRyxJQUpnQixhQUloQkEsSUFKZ0I7O0FBVXZCLE1BQUcsQ0FBQ0EsSUFBSixFQUFVLE9BQU8sSUFBUDtBQVZhLDhCQVlPQSxJQUFJLENBQUNDLHdCQVpaO0FBQUEsTUFZaEJDLFFBWmdCLHlCQVloQkEsUUFaZ0I7QUFBQSxNQVlOQyxTQVpNLHlCQVlOQSxTQVpNO0FBY3ZCLHNCQUNJLDhEQUFDLHNEQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFLLGVBQVMsRUFBQyx3Q0FBZjtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosT0FDc0NELFFBQVEsQ0FBQ0UsS0FEL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLE9BQ3dDRixRQUFRLENBQUNHLElBRGpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaUJILENBL0JEOztHQUFNWCxZO1VBQ2FFLGtELEVBR0FFLG9EOzs7S0FKYkosWTtBQWlDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZWhpY3Vsb3MvW2lkXS5kMjFmYjlhNWU4MDY5OGZhZTg3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncWxgXHJcbiAgICBxdWVyeSBvYnRlcm5lckhpc3RvcmlhbFZlaGljdWxvKCRpZDogSUQhKSB7XHJcbiAgICAgICAgb2J0ZW5lckhpc3RvcmlhbFZlaGljdWxvKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgdmVoaWN1bG8ge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHBsYWNhXHJcbiAgICAgICAgICAgICAgICB0aXBvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGlzdG9yaWFsIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjZWR1bGFcclxuICAgICAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICAgICAgaG9yYUVudHJhZGFcclxuICAgICAgICAgICAgICAgIGhvcmFTYWxpZGFcclxuICAgICAgICAgICAgICAgIG1vbnRvUGFnYWRvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBWZWhpY3Vsb1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCB7ZGF0YX0gPSB1c2VRdWVyeShxdWVyeSx7XHJcbiAgICAgICAgdmFyaWFibGVzOntcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZighZGF0YSkgcmV0dXJuIG51bGxcclxuXHJcbiAgICBjb25zdCB7dmVoaWN1bG8sIGhpc3RvcmlhbH0gPSBkYXRhLm9idGVuZXJIaXN0b3JpYWxWZWhpY3Vsb1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTUgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1iIG1iLTIgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICBWZWhpY3Vsb1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNSBweC01IG10LTMgcHktMyBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlBsYWNhIHZlaGljdWxvOjwvc3Ryb25nPiB7dmVoaWN1bG8ucGxhY2F9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGlwbyBkZSB2ZWhpY3Vsbzo8L3N0cm9uZz4ge3ZlaGljdWxvLnRpcG99XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZWhpY3Vsb1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=