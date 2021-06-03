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
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/cards/MostrarSalida */ "./components/cards/MostrarSalida.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\pages\\salida\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    mutation salidaEstacionamiento($id: ID!) {\n        salidaEstacionamiento(id: $id) {\n            cedula\n            nombre\n            horaEntrada\n            horaSalida\n            montoPagado\n            vehiculo {\n                placa\n                tipo\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    query obtenerVehiculoEstacionado($id: ID!) {\n        obtenerVehiculoEstacionado(id: $id) {\n            cedula\n            nombre\n            horaEntrada\n            vehiculo {\n                placa\n                tipo\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.gql)(_templateObject());
var mutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.gql)(_templateObject2());

var SalidaPage = function SalidaPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  var id = router.query.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      salida = _useState[0],
      setSalida = _useState[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(mutation),
      _useMutation2 = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      registrarSalida = _useMutation2[0];

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(query, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data;

  var salidaVehiculo = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var _yield$registrarSalid, data;

      return C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return registrarSalida({
                variables: {
                  id: id
                }
              });

            case 2:
              _yield$registrarSalid = _context.sent;
              data = _yield$registrarSalid.data;

              if (data) {
                setSalida(data.salidaEstacionamiento);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function salidaVehiculo() {
      return _ref.apply(this, arguments);
    };
  }();

  if (!data) return null; // console.log(data)

  var _data$obtenerVehiculo = data.obtenerVehiculoEstacionado,
      vehiculo = _data$obtenerVehiculo.vehiculo,
      cedula = _data$obtenerVehiculo.cedula,
      nombre = _data$obtenerVehiculo.nombre,
      horaEntrada = _data$obtenerVehiculo.horaEntrada;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5 py-5 border-gray-200 border-b mb-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-gray-900 text-2xl font-semibold",
        children: "Registrar Salida"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 p-5 mt-3 bg-white shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl font-bold mb-3",
        children: "Informacion del Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this), salida ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__.default, {
        cedula: salida.cedula,
        nombre: salida.nombre,
        horaEntrada: salida.horaEntrada,
        horaSalida: salida.horaEntrada,
        vehiculo: salida.vehiculo,
        montoPagado: salida.vehiculo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__.default, {
        cedula: cedula,
        nombre: nombre,
        horaEntrada: horaEntrada,
        vehiculo: vehiculo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: salidaVehiculo,
        className: "mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block",
        children: "Aceptar salida"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, _this);
};

_s(SalidaPage, "uqf/bO36AE/Uq0vCj+ndr+4yP8w=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsaWRhL1tpZF0uanMiXSwibmFtZXMiOlsicXVlcnkiLCJncWwiLCJtdXRhdGlvbiIsIlNhbGlkYVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInVzZVN0YXRlIiwic2FsaWRhIiwic2V0U2FsaWRhIiwidXNlTXV0YXRpb24iLCJyZWdpc3RyYXJTYWxpZGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJzYWxpZGFWZWhpY3VsbyIsInNhbGlkYUVzdGFjaW9uYW1pZW50byIsIm9idGVuZXJWZWhpY3Vsb0VzdGFjaW9uYWRvIiwidmVoaWN1bG8iLCJjZWR1bGEiLCJub21icmUiLCJob3JhRW50cmFkYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLG1EQUFILG1CQUFYO0FBYUEsSUFBTUMsUUFBUSxHQUFHRCxtREFBSCxvQkFBZDs7QUFnQkEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRHFCLE1BRWJDLEVBRmEsR0FFTkYsTUFBTSxDQUFDSixLQUZELENBRWJNLEVBRmE7O0FBQUEsa0JBR09DLCtDQUFRLENBQUMsSUFBRCxDQUhmO0FBQUEsTUFHZEMsTUFIYztBQUFBLE1BR05DLFNBSE07O0FBQUEscUJBSUtDLDJEQUFXLENBQUNSLFFBQUQsQ0FKaEI7QUFBQTtBQUFBLE1BSWRTLGVBSmM7O0FBQUEsa0JBTUpDLHdEQUFRLENBQUNaLEtBQUQsRUFBUTtBQUM3QmEsYUFBUyxFQUFFO0FBQ1BQLFFBQUUsRUFBRkE7QUFETztBQURrQixHQUFSLENBTko7QUFBQSxNQU1iUSxJQU5hLGFBTWJBLElBTmE7O0FBWXJCLE1BQU1DLGNBQWM7QUFBQSxpV0FBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSUosZUFBZSxDQUFDO0FBQ25DRSx5QkFBUyxFQUFFO0FBQ1BQLG9CQUFFLEVBQUZBO0FBRE87QUFEd0IsZUFBRCxDQURuQjs7QUFBQTtBQUFBO0FBQ1hRLGtCQURXLHlCQUNYQSxJQURXOztBQU1uQixrQkFBSUEsSUFBSixFQUFVO0FBQ05MLHlCQUFTLENBQUNLLElBQUksQ0FBQ0UscUJBQU4sQ0FBVDtBQUNIOztBQVJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkRCxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQVdBLE1BQUksQ0FBQ0QsSUFBTCxFQUFXLE9BQU8sSUFBUCxDQXZCVSxDQXdCckI7O0FBeEJxQiw4QkEwQmpCQSxJQUFJLENBQUNHLDBCQTFCWTtBQUFBLE1BeUJiQyxRQXpCYSx5QkF5QmJBLFFBekJhO0FBQUEsTUF5QkhDLE1BekJHLHlCQXlCSEEsTUF6Qkc7QUFBQSxNQXlCS0MsTUF6QkwseUJBeUJLQSxNQXpCTDtBQUFBLE1BeUJhQyxXQXpCYix5QkF5QmFBLFdBekJiO0FBNEJyQixzQkFDSSw4REFBQyxzREFBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBSyxlQUFTLEVBQUMsa0NBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUlLYixNQUFNLGdCQUNILDhEQUFDLG1FQUFEO0FBQ0ksY0FBTSxFQUFFQSxNQUFNLENBQUNXLE1BRG5CO0FBRUksY0FBTSxFQUFFWCxNQUFNLENBQUNZLE1BRm5CO0FBR0ksbUJBQVcsRUFBRVosTUFBTSxDQUFDYSxXQUh4QjtBQUlJLGtCQUFVLEVBQUViLE1BQU0sQ0FBQ2EsV0FKdkI7QUFLSSxnQkFBUSxFQUFFYixNQUFNLENBQUNVLFFBTHJCO0FBTUksbUJBQVcsRUFBRVYsTUFBTSxDQUFDVTtBQU54QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREcsZ0JBVUgsOERBQUMsbUVBQUQ7QUFDSSxjQUFNLEVBQUVDLE1BRFo7QUFFSSxjQUFNLEVBQUVDLE1BRlo7QUFHSSxtQkFBVyxFQUFFQyxXQUhqQjtBQUlJLGdCQUFRLEVBQUVIO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRSLGVBcUJJO0FBQVEsZUFBTyxFQUFFSCxjQUFqQjtBQUFpQyxpQkFBUyxFQUFDLHdEQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdDSCxDQTVERDs7R0FBTVosVTtVQUNhRSxrRCxFQUdXSyx1RCxFQUVURSxvRDs7O0tBTmZULFU7QUE4RE4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2FsaWRhL1tpZF0uNzJjMmU0ZDAxNWJhOWFjYjBiYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IE1vc3RyYXJTYWxpZGEgZnJvbSBcImNvbXBvbmVudHMvY2FyZHMvTW9zdHJhclNhbGlkYVwiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncWxgXHJcbiAgICBxdWVyeSBvYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbygkaWQ6IElEISkge1xyXG4gICAgICAgIG9idGVuZXJWZWhpY3Vsb0VzdGFjaW9uYWRvKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgY2VkdWxhXHJcbiAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICBob3JhRW50cmFkYVxyXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBtdXRhdGlvbiA9IGdxbGBcclxuICAgIG11dGF0aW9uIHNhbGlkYUVzdGFjaW9uYW1pZW50bygkaWQ6IElEISkge1xyXG4gICAgICAgIHNhbGlkYUVzdGFjaW9uYW1pZW50byhpZDogJGlkKSB7XHJcbiAgICAgICAgICAgIGNlZHVsYVxyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgaG9yYUVudHJhZGFcclxuICAgICAgICAgICAgaG9yYVNhbGlkYVxyXG4gICAgICAgICAgICBtb250b1BhZ2Fkb1xyXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2FsaWRhUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW3NhbGlkYSwgc2V0U2FsaWRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3JlZ2lzdHJhclNhbGlkYV0gPSB1c2VNdXRhdGlvbihtdXRhdGlvbik7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShxdWVyeSwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2FsaWRhVmVoaWN1bG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZWdpc3RyYXJTYWxpZGEoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFNhbGlkYShkYXRhLnNhbGlkYUVzdGFjaW9uYW1pZW50byk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHsgdmVoaWN1bG8sIGNlZHVsYSwgbm9tYnJlLCBob3JhRW50cmFkYSB9ID1cclxuICAgICAgICBkYXRhLm9idGVuZXJWZWhpY3Vsb0VzdGFjaW9uYWRvO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTUgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1iIG1iLTIgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RyYXIgU2FsaWRhXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC01IHAtNSBtdC0zIGJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5mb3JtYWNpb24gZGVsIFZlaGljdWxvXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAge3NhbGlkYSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8TW9zdHJhclNhbGlkYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWR1bGE9e3NhbGlkYS5jZWR1bGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZT17c2FsaWRhLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUVudHJhZGE9e3NhbGlkYS5ob3JhRW50cmFkYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYVNhbGlkYT17c2FsaWRhLmhvcmFFbnRyYWRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWhpY3Vsbz17c2FsaWRhLnZlaGljdWxvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250b1BhZ2Fkbz17c2FsaWRhLnZlaGljdWxvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3N0cmFyU2FsaWRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlZHVsYT17Y2VkdWxhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmU9e25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUVudHJhZGE9e2hvcmFFbnRyYWRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWhpY3Vsbz17dmVoaWN1bG99XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhbGlkYVZlaGljdWxvfSBjbGFzc05hbWU9XCJtdC0zIHB4LTMgcHktMiBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgYmxvY2tcIj5BY2VwdGFyIHNhbGlkYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYWxpZGFQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9