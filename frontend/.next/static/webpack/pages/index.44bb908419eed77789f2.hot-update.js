self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var components_AgregarVehiculos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/AgregarVehiculos */ "./components/AgregarVehiculos/index.js");
/* harmony import */ var components_cards_NumberVehicles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/NumberVehicles */ "./components/cards/NumberVehicles.js");
/* harmony import */ var components_TableEstacionamiento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/TableEstacionamiento */ "./components/TableEstacionamiento/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\pages\\index.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query obternerCantidadPuestos {\n        obtenerVehiculosEstacionados {\n            id\n            cedula\n            nombre\n            horaEntrada\n            vehiculo {\n                id\n                placa\n                tipo\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query obternerCantidadPuestos {\n        obtenerCantidadPuestos {\n            carros\n            motos\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var QUERY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject());
var QUERY2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject2());
function Home() {
  _s();

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(QUERY),
      data = _useQuery.data,
      startPolling = _useQuery.startPolling,
      stopPolling = _useQuery.stopPolling;

  var _useQuery2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(QUERY2),
      estacionamiento = _useQuery2.data,
      startPolling2 = _useQuery2.startPolling,
      stopPolling2 = _useQuery2.stopPolling;

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    startPolling(1000);
    startPolling2(1000);
    return function () {
      stopPolling();
      stopPolling2();
    };
  }, [startPolling, startPolling2, stopPolling, stopPolling2]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5 py-5 border-gray-200 border-b mb-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-gray-900 text-2xl font-semibold",
        children: "Estacionamiento"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_AgregarVehiculos__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid grid-cols-2 w-full gap-5 px-5 justify-items-center text-gray-900",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_NumberVehicles__WEBPACK_IMPORTED_MODULE_3__.default, {
        type: "carros",
        number: data.obtenerCantidadPuestos.carros
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_NumberVehicles__WEBPACK_IMPORTED_MODULE_3__.default, {
        type: "motos",
        number: data.obtenerCantidadPuestos.motos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full px-5 mt-3",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-gray-900 text-2xl text-center",
        children: "Vehiculos Estacionados"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-4",
        children: estacionamiento && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_TableEstacionamiento__WEBPACK_IMPORTED_MODULE_4__.default, {
          estacionamiento: estacionamiento.obtenerVehiculosEstacionados
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

_s(Home, "OGQ+WIvqq2G/KbXo+//+u+nQX18=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUVVFUlkiLCJncWwiLCJRVUVSWTIiLCJIb21lIiwidXNlUXVlcnkiLCJkYXRhIiwic3RhcnRQb2xsaW5nIiwic3RvcFBvbGxpbmciLCJlc3RhY2lvbmFtaWVudG8iLCJzdGFydFBvbGxpbmcyIiwic3RvcFBvbGxpbmcyIiwidXNlRWZmZWN0Iiwib2J0ZW5lckNhbnRpZGFkUHVlc3RvcyIsImNhcnJvcyIsIm1vdG9zIiwib2J0ZW5lclZlaGljdWxvc0VzdGFjaW9uYWRvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1EQUFILG1CQUFYO0FBUUEsSUFBTUMsTUFBTSxHQUFHRCxtREFBSCxvQkFBWjtBQWdCZSxTQUFTRSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ2lCQyx3REFBUSxDQUFDSixLQUFELENBRHpCO0FBQUEsTUFDbkJLLElBRG1CLGFBQ25CQSxJQURtQjtBQUFBLE1BQ2JDLFlBRGEsYUFDYkEsWUFEYTtBQUFBLE1BQ0NDLFdBREQsYUFDQ0EsV0FERDs7QUFBQSxtQkFFNkRILHdEQUFRLENBQUNGLE1BQUQsQ0FGckU7QUFBQSxNQUViTSxlQUZhLGNBRW5CSCxJQUZtQjtBQUFBLE1BRWlCSSxhQUZqQixjQUVJSCxZQUZKO0FBQUEsTUFFNENJLFlBRjVDLGNBRWdDSCxXQUZoQzs7QUFJM0JJLGtEQUFTLENBQUMsWUFBTTtBQUNaTCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBRyxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLFdBQU8sWUFBTTtBQUNURixpQkFBVztBQUNYRyxrQkFBWTtBQUNmLEtBSEQ7QUFJSCxHQVBRLEVBT04sQ0FBQ0osWUFBRCxFQUFjRyxhQUFkLEVBQTRCRixXQUE1QixFQUF3Q0csWUFBeEMsQ0FQTSxDQUFUO0FBVUEsc0JBQ0ksOERBQUMsdURBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDZCQUNJO0FBQUksaUJBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU1JLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixFQU9LTCxJQUFJLGlCQUNEO0FBQUssZUFBUyxFQUFDLHVFQUFmO0FBQUEsOEJBQ0ksOERBQUMsb0VBQUQ7QUFDSSxZQUFJLEVBQUMsUUFEVDtBQUVJLGNBQU0sRUFBRUEsSUFBSSxDQUFDTyxzQkFBTCxDQUE0QkM7QUFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0ksOERBQUMsb0VBQUQ7QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLGNBQU0sRUFBRVIsSUFBSSxDQUFDTyxzQkFBTCxDQUE0QkU7QUFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJSLGVBbUJJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLG9DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNLTixlQUFlLGlCQUFJLDhEQUFDLG9FQUFEO0FBQ2hCLHlCQUFlLEVBQ1hBLGVBQWUsQ0FBQ087QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQ0g7O0dBaER1QlosSTtVQUN3QkMsb0QsRUFDNENBLG9EOzs7S0FGcEVELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDRiYjkwODQxOWVlZDc3Nzg5ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBBZ3JlZ2FyVmVoaWN1bG9zIGZyb20gXCJjb21wb25lbnRzL0FncmVnYXJWZWhpY3Vsb3NcIjtcbmltcG9ydCBOdW1iZXJWZWhpY2xlcyBmcm9tIFwiY29tcG9uZW50cy9jYXJkcy9OdW1iZXJWZWhpY2xlc1wiO1xuaW1wb3J0IFRhYmxlRXN0YWNpb25hbWllbnRvIGZyb20gXCJjb21wb25lbnRzL1RhYmxlRXN0YWNpb25hbWllbnRvXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IFFVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IG9idGVybmVyQ2FudGlkYWRQdWVzdG9zIHtcbiAgICAgICAgb2J0ZW5lckNhbnRpZGFkUHVlc3RvcyB7XG4gICAgICAgICAgICBjYXJyb3NcbiAgICAgICAgICAgIG1vdG9zXG4gICAgICAgIH1cbiAgICB9XG5gO1xuY29uc3QgUVVFUlkyID0gZ3FsYFxuICAgIHF1ZXJ5IG9idGVybmVyQ2FudGlkYWRQdWVzdG9zIHtcbiAgICAgICAgb2J0ZW5lclZlaGljdWxvc0VzdGFjaW9uYWRvcyB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgY2VkdWxhXG4gICAgICAgICAgICBub21icmVcbiAgICAgICAgICAgIGhvcmFFbnRyYWRhXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBwbGFjYVxuICAgICAgICAgICAgICAgIHRpcG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBzdGFydFBvbGxpbmcsIHN0b3BQb2xsaW5nIH0gPSB1c2VRdWVyeShRVUVSWSk7XG4gICAgY29uc3QgeyBkYXRhOiBlc3RhY2lvbmFtaWVudG8sIHN0YXJ0UG9sbGluZzpzdGFydFBvbGxpbmcyLCBzdG9wUG9sbGluZzpzdG9wUG9sbGluZzIgfSA9IHVzZVF1ZXJ5KFFVRVJZMik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzdGFydFBvbGxpbmcoMTAwMClcbiAgICAgICAgc3RhcnRQb2xsaW5nMigxMDAwKVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3RvcFBvbGxpbmcoKVxuICAgICAgICAgICAgc3RvcFBvbGxpbmcyKClcbiAgICAgICAgfVxuICAgIH0sIFtzdGFydFBvbGxpbmcsc3RhcnRQb2xsaW5nMixzdG9wUG9sbGluZyxzdG9wUG9sbGluZzJdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTUgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1iIG1iLTIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIEVzdGFjaW9uYW1pZW50b1xuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBZ3JlZ2FyVmVoaWN1bG9zIC8+XG4gICAgICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHctZnVsbCBnYXAtNSBweC01IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPE51bWJlclZlaGljbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2Fycm9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcj17ZGF0YS5vYnRlbmVyQ2FudGlkYWRQdWVzdG9zLmNhcnJvc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPE51bWJlclZlaGljbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibW90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXtkYXRhLm9idGVuZXJDYW50aWRhZFB1ZXN0b3MubW90b3N9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBtdC0zXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgVmVoaWN1bG9zIEVzdGFjaW9uYWRvc1xuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtlc3RhY2lvbmFtaWVudG8gJiYgPFRhYmxlRXN0YWNpb25hbWllbnRvXG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RhY2lvbmFtaWVudG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFjaW9uYW1pZW50by5vYnRlbmVyVmVoaWN1bG9zRXN0YWNpb25hZG9zXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9