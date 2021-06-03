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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/cards/MostrarSalida */ "./components/cards/MostrarSalida.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
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
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    query obtenerVehiculoEstacionado($id: ID!) {\n        obtenerVehiculoEstacionado(id: $id) {\n            cedula\n            nombre\n            horaEntrada\n            horaSalida\n            vehiculo {\n                placa\n                tipo\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var query = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql)(_templateObject());
var mutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.gql)(_templateObject2());

var SalidaPage = function SalidaPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  var id = router.query.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      salida = _useState[0],
      setSalida = _useState[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(mutation),
      _useMutation2 = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      registrarSalida = _useMutation2[0];

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery)(query, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data;

  if (!data) return null; // console.log(data)

  var _data$obtenerVehiculo = data.obtenerVehiculoEstacionado,
      vehiculo = _data$obtenerVehiculo.vehiculo,
      cedula = _data$obtenerVehiculo.cedula,
      nombre = _data$obtenerVehiculo.nombre,
      horaEntrada = _data$obtenerVehiculo.horaEntrada,
      horaSalida = _data$obtenerVehiculo.horaSalida;

  if (horaSalida) {
    setTimeout(function () {
      setSalida(data.obtenerVehiculoEstacionado);
    }, 1000);
  }

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5 py-5 border-gray-200 border-b mb-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-gray-900 text-2xl font-semibold",
        children: "Registrar Salida"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 p-5 mt-3 bg-white shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl font-bold mb-3",
        children: "Informacion del Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this), salida ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__.default, {
          cedula: salida.cedula,
          nombre: salida.nombre,
          horaEntrada: salida.horaEntrada,
          horaSalida: salida.horaEntrada,
          vehiculo: salida.vehiculo,
          montoPagado: salida.vehiculo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block",
            children: "Volver a Estacionamiento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_8__.default, {
          cedula: cedula,
          nombre: nombre,
          horaEntrada: horaEntrada,
          vehiculo: vehiculo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: salidaVehiculo,
          className: "mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block",
          children: "Aceptar salida"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }, _this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, _this);
};

_s(SalidaPage, "uqf/bO36AE/Uq0vCj+ndr+4yP8w=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2FsaWRhL1tpZF0uanMiXSwibmFtZXMiOlsicXVlcnkiLCJncWwiLCJtdXRhdGlvbiIsIlNhbGlkYVBhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInVzZVN0YXRlIiwic2FsaWRhIiwic2V0U2FsaWRhIiwidXNlTXV0YXRpb24iLCJyZWdpc3RyYXJTYWxpZGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJvYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbyIsInZlaGljdWxvIiwiY2VkdWxhIiwibm9tYnJlIiwiaG9yYUVudHJhZGEiLCJob3JhU2FsaWRhIiwic2V0VGltZW91dCIsInNhbGlkYVZlaGljdWxvIiwic2FsaWRhRXN0YWNpb25hbWllbnRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxvREFBSCxtQkFBWDtBQWNBLElBQU1DLFFBQVEsR0FBR0Qsb0RBQUgsb0JBQWQ7O0FBZ0JBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURxQixNQUViQyxFQUZhLEdBRU5GLE1BQU0sQ0FBQ0osS0FGRCxDQUViTSxFQUZhOztBQUFBLGtCQUdPQywrQ0FBUSxDQUFDLElBQUQsQ0FIZjtBQUFBLE1BR2RDLE1BSGM7QUFBQSxNQUdOQyxTQUhNOztBQUFBLHFCQUlLQyw0REFBVyxDQUFDUixRQUFELENBSmhCO0FBQUE7QUFBQSxNQUlkUyxlQUpjOztBQUFBLGtCQU1KQyx5REFBUSxDQUFDWixLQUFELEVBQVE7QUFDN0JhLGFBQVMsRUFBRTtBQUNQUCxRQUFFLEVBQUZBO0FBRE87QUFEa0IsR0FBUixDQU5KO0FBQUEsTUFNYlEsSUFOYSxhQU1iQSxJQU5hOztBQVlyQixNQUFJLENBQUNBLElBQUwsRUFBVyxPQUFPLElBQVAsQ0FaVSxDQWFyQjs7QUFicUIsOEJBZWpCQSxJQUFJLENBQUNDLDBCQWZZO0FBQUEsTUFjYkMsUUFkYSx5QkFjYkEsUUFkYTtBQUFBLE1BY0hDLE1BZEcseUJBY0hBLE1BZEc7QUFBQSxNQWNLQyxNQWRMLHlCQWNLQSxNQWRMO0FBQUEsTUFjYUMsV0FkYix5QkFjYUEsV0FkYjtBQUFBLE1BYzBCQyxVQWQxQix5QkFjMEJBLFVBZDFCOztBQWlCckIsTUFBR0EsVUFBSCxFQUFjO0FBQ1ZDLGNBQVUsQ0FBQyxZQUFNO0FBQ2JaLGVBQVMsQ0FBQ0ssSUFBSSxDQUFDQywwQkFBTixDQUFUO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIOztBQUVELE1BQU1PLGNBQWM7QUFBQSxpV0FBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSVgsZUFBZSxDQUFDO0FBQ25DRSx5QkFBUyxFQUFFO0FBQ1BQLG9CQUFFLEVBQUZBO0FBRE87QUFEd0IsZUFBRCxDQURuQjs7QUFBQTtBQUFBO0FBQ1hRLGtCQURXLHlCQUNYQSxJQURXOztBQU1uQixrQkFBSUEsSUFBSixFQUFVO0FBQ05MLHlCQUFTLENBQUNLLElBQUksQ0FBQ1MscUJBQU4sQ0FBVDtBQUNIOztBQVJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkRCxjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQWFBLHNCQUNJLDhEQUFDLHNEQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsa0RBQWY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUMsc0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFLLGVBQVMsRUFBQyxrQ0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBSUtkLE1BQU0sZ0JBQ0g7QUFBQSxnQ0FDSSw4REFBQyxtRUFBRDtBQUNJLGdCQUFNLEVBQUVBLE1BQU0sQ0FBQ1MsTUFEbkI7QUFFSSxnQkFBTSxFQUFFVCxNQUFNLENBQUNVLE1BRm5CO0FBR0kscUJBQVcsRUFBRVYsTUFBTSxDQUFDVyxXQUh4QjtBQUlJLG9CQUFVLEVBQUVYLE1BQU0sQ0FBQ1csV0FKdkI7QUFLSSxrQkFBUSxFQUFFWCxNQUFNLENBQUNRLFFBTHJCO0FBTUkscUJBQVcsRUFBRVIsTUFBTSxDQUFDUTtBQU54QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBU0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNJO0FBQVEscUJBQVMsRUFBQyx3REFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUEsc0JBREcsZ0JBaUJIO0FBQUEsZ0NBQ0ksOERBQUMsbUVBQUQ7QUFDSSxnQkFBTSxFQUFFQyxNQURaO0FBRUksZ0JBQU0sRUFBRUMsTUFGWjtBQUdJLHFCQUFXLEVBQUVDLFdBSGpCO0FBSUksa0JBQVEsRUFBRUg7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBT0k7QUFDSSxpQkFBTyxFQUFFTSxjQURiO0FBRUksbUJBQVMsRUFBQyx3REFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBLHNCQXJCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThDSCxDQWxGRDs7R0FBTW5CLFU7VUFDYUUsa0QsRUFHV0ssd0QsRUFFVEUscUQ7OztLQU5mVCxVO0FBb0ZOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NhbGlkYS9baWRdLmNkNTk2MjEzZTEyYmU2ZGU4MzIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBNb3N0cmFyU2FsaWRhIGZyb20gXCJjb21wb25lbnRzL2NhcmRzL01vc3RyYXJTYWxpZGFcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncWxgXHJcbiAgICBxdWVyeSBvYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbygkaWQ6IElEISkge1xyXG4gICAgICAgIG9idGVuZXJWZWhpY3Vsb0VzdGFjaW9uYWRvKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgY2VkdWxhXHJcbiAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICBob3JhRW50cmFkYVxyXG4gICAgICAgICAgICBob3JhU2FsaWRhXHJcbiAgICAgICAgICAgIHZlaGljdWxvIHtcclxuICAgICAgICAgICAgICAgIHBsYWNhXHJcbiAgICAgICAgICAgICAgICB0aXBvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IG11dGF0aW9uID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gc2FsaWRhRXN0YWNpb25hbWllbnRvKCRpZDogSUQhKSB7XHJcbiAgICAgICAgc2FsaWRhRXN0YWNpb25hbWllbnRvKGlkOiAkaWQpIHtcclxuICAgICAgICAgICAgY2VkdWxhXHJcbiAgICAgICAgICAgIG5vbWJyZVxyXG4gICAgICAgICAgICBob3JhRW50cmFkYVxyXG4gICAgICAgICAgICBob3JhU2FsaWRhXHJcbiAgICAgICAgICAgIG1vbnRvUGFnYWRvXHJcbiAgICAgICAgICAgIHZlaGljdWxvIHtcclxuICAgICAgICAgICAgICAgIHBsYWNhXHJcbiAgICAgICAgICAgICAgICB0aXBvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTYWxpZGFQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zdCBbc2FsaWRhLCBzZXRTYWxpZGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcmVnaXN0cmFyU2FsaWRhXSA9IHVzZU11dGF0aW9uKG11dGF0aW9uKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KHF1ZXJ5LCB7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWRhdGEpIHJldHVybiBudWxsO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgIGNvbnN0IHsgdmVoaWN1bG8sIGNlZHVsYSwgbm9tYnJlLCBob3JhRW50cmFkYSwgaG9yYVNhbGlkYSB9ID1cclxuICAgICAgICBkYXRhLm9idGVuZXJWZWhpY3Vsb0VzdGFjaW9uYWRvO1xyXG5cclxuICAgIGlmKGhvcmFTYWxpZGEpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRTYWxpZGEoZGF0YS5vYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbylcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfSAgICBcclxuXHJcbiAgICBjb25zdCBzYWxpZGFWZWhpY3VsbyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlZ2lzdHJhclNhbGlkYSh7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgc2V0U2FsaWRhKGRhdGEuc2FsaWRhRXN0YWNpb25hbWllbnRvKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktNSBib3JkZXItZ3JheS0yMDAgYm9yZGVyLWIgbWItMiBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJhciBTYWxpZGFcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTUgcC01IG10LTMgYmctd2hpdGUgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBJbmZvcm1hY2lvbiBkZWwgVmVoaWN1bG9cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICB7c2FsaWRhID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb3N0cmFyU2FsaWRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWR1bGE9e3NhbGlkYS5jZWR1bGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmU9e3NhbGlkYS5ub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhRW50cmFkYT17c2FsaWRhLmhvcmFFbnRyYWRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYVNhbGlkYT17c2FsaWRhLmhvcmFFbnRyYWRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVoaWN1bG89e3NhbGlkYS52ZWhpY3Vsb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRvUGFnYWRvPXtzYWxpZGEudmVoaWN1bG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTMgcHgtMyBweS0yIGJnLWdyYXktODAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZvbHZlciBhIEVzdGFjaW9uYW1pZW50b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vc3RyYXJTYWxpZGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlZHVsYT17Y2VkdWxhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlPXtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhRW50cmFkYT17aG9yYUVudHJhZGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWhpY3Vsbz17dmVoaWN1bG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhbGlkYVZlaGljdWxvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMyBweC0zIHB5LTIgYmctZ3JheS04MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNlcHRhciBzYWxpZGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYWxpZGFQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9