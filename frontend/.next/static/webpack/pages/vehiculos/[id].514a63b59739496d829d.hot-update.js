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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var components_TableHistorial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TableHistorial */ "./components/TableHistorial/index.js");
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






var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject());

var VehiculoPage = function VehiculoPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var id = router.query.id;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(query, {
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
        lineNumber: 44,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 px-5 mt-3 py-3 bg-white shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl font-bold",
        children: "Informacion del Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Placa vehiculo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), " ", vehiculo.placa]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Tipo de vehiculo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), " ", vehiculo.tipo]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 mt-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_TableHistorial__WEBPACK_IMPORTED_MODULE_5__.default, {
        historial: historial
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(VehiculoPage, "DEGZfJqR9KLjK2ajZLUqNSLjEP8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmVoaWN1bG9zL1tpZF0uanMiXSwibmFtZXMiOlsicXVlcnkiLCJncWwiLCJWZWhpY3Vsb1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsIm9idGVuZXJIaXN0b3JpYWxWZWhpY3VsbyIsInZlaGljdWxvIiwiaGlzdG9yaWFsIiwicGxhY2EiLCJ0aXBvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1EQUFILG1CQUFYOztBQW9CQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEdUIsTUFFZkMsRUFGZSxHQUVSRixNQUFNLENBQUNILEtBRkMsQ0FFZkssRUFGZTs7QUFBQSxrQkFJTkMsd0RBQVEsQ0FBQ04sS0FBRCxFQUFRO0FBQzdCTyxhQUFTLEVBQUU7QUFDUEYsUUFBRSxFQUFGQTtBQURPO0FBRGtCLEdBQVIsQ0FKRjtBQUFBLE1BSWZHLElBSmUsYUFJZkEsSUFKZTs7QUFVdkIsTUFBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTyxJQUFQO0FBVlksOEJBWVNBLElBQUksQ0FBQ0Msd0JBWmQ7QUFBQSxNQVlmQyxRQVplLHlCQVlmQSxRQVplO0FBQUEsTUFZTEMsU0FaSyx5QkFZTEEsU0FaSztBQWN2QixzQkFDSSw4REFBQyxzREFBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBSyxlQUFTLEVBQUMsd0NBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosT0FDc0NELFFBQVEsQ0FBQ0UsS0FEL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFLSTtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLE9BQ3dDRixRQUFRLENBQUNHLElBRGpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBZUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJLDhEQUFDLDhEQUFEO0FBQWdCLGlCQUFTLEVBQUVGO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0FuQ0Q7O0dBQU1ULFk7VUFDYUUsa0QsRUFHRUUsb0Q7OztLQUpmSixZO0FBcUNOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlaGljdWxvcy9baWRdLjUxNGE2M2I1OTczOTQ5NmQ4MjlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBUYWJsZUhpc3RvcmlhbCBmcm9tIFwiY29tcG9uZW50cy9UYWJsZUhpc3RvcmlhbFwiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncWxgXHJcbiAgICBxdWVyeSBvYnRlcm5lckhpc3RvcmlhbFZlaGljdWxvKCRpZDogSUQhKSB7XHJcbiAgICAgICAgb2J0ZW5lckhpc3RvcmlhbFZlaGljdWxvKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgdmVoaWN1bG8ge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHBsYWNhXHJcbiAgICAgICAgICAgICAgICB0aXBvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGlzdG9yaWFsIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBjZWR1bGFcclxuICAgICAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICAgICAgaG9yYUVudHJhZGFcclxuICAgICAgICAgICAgICAgIGhvcmFTYWxpZGFcclxuICAgICAgICAgICAgICAgIG1vbnRvUGFnYWRvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBWZWhpY3Vsb1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KHF1ZXJ5LCB7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHsgdmVoaWN1bG8sIGhpc3RvcmlhbCB9ID0gZGF0YS5vYnRlbmVySGlzdG9yaWFsVmVoaWN1bG87XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktNSBib3JkZXItZ3JheS0yMDAgYm9yZGVyLWIgbWItMiBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZlaGljdWxvXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC01IHB4LTUgbXQtMyBweS0zIGJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkluZm9ybWFjaW9uIGRlbCBWZWhpY3VsbzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QbGFjYSB2ZWhpY3Vsbzo8L3N0cm9uZz4ge3ZlaGljdWxvLnBsYWNhfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpcG8gZGUgdmVoaWN1bG86PC9zdHJvbmc+IHt2ZWhpY3Vsby50aXBvfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNSBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVIaXN0b3JpYWwgaGlzdG9yaWFsPXtoaXN0b3JpYWx9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlaGljdWxvUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==