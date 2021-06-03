(function() {
var exports = {};
exports.id = "pages/salida/[id]";
exports.ids = ["pages/salida/[id]"];
exports.modules = {

/***/ "./components/cards/MostrarSalida.js":
/*!*******************************************!*\
  !*** ./components/cards/MostrarSalida.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\cards\\MostrarSalida.js";


const MostrarSalida = ({
  cedula,
  nombre,
  horaEntrada,
  horaSalida,
  montoPagado,
  vehiculo
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-base block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Cedula:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), " ", cedula]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-base block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Nombre:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), nombre]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-base block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Placa:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), vehiculo.placa]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-base block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Tipo Vehiculo:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), vehiculo.tipo]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-base block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Hora Entrada:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined), horaEntrada]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), horaSalida && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-base block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Hora Salida:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, undefined), horaSalida]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }, undefined), montoPagado && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-base block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Monto Pagado:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, undefined), montoPagado, "$"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MostrarSalida);

/***/ }),

/***/ "./pages/salida/[id].js":
/*!******************************!*\
  !*** ./pages/salida/[id].js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/cards/MostrarSalida */ "./components/cards/MostrarSalida.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\pages\\salida\\[id].js";






const query = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
    query obtenerVehiculoEstacionado($id: ID!) {
        obtenerVehiculoEstacionado(id: $id) {
            cedula
            nombre
            horaEntrada
            horaSalida
            montoPagado
            vehiculo {
                placa
                tipo
            }
        }
    }
`;
const mutation = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
    mutation salidaEstacionamiento($id: ID!) {
        salidaEstacionamiento(id: $id) {
            cedula
            nombre
            horaEntrada
            horaSalida
            montoPagado
            vehiculo {
                placa
                tipo
            }
        }
    }
`;

const SalidaPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    id
  } = router.query;
  const {
    0: salida,
    1: setSalida
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [registrarSalida] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(mutation);
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(query, {
    variables: {
      id
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (data.obtenerVehiculoEstacionado.horaSalida) {
      setSalida(data.obtenerVehiculoEstacionado);
    }
  }, [data]);
  if (!data) return null; // console.log(data)

  const {
    vehiculo,
    cedula,
    nombre,
    horaEntrada,
    horaSalida
  } = data.obtenerVehiculoEstacionado;

  const salidaVehiculo = async () => {
    const {
      data
    } = await registrarSalida({
      variables: {
        id
      }
    });

    if (data) {
      setSalida(data.salidaEstacionamiento);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5 py-5 border-gray-200 border-b mb-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-gray-900 text-2xl font-semibold",
        children: "Registrar Salida"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 p-5 mt-3 bg-white shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl font-bold mb-3",
        children: "Informacion del Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined), salida ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_5__.default, {
          cedula: salida.cedula,
          nombre: salida.nombre,
          horaEntrada: salida.horaEntrada,
          horaSalida: salida.horaEntrada,
          vehiculo: salida.vehiculo,
          montoPagado: salida.montoPagado
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block",
            children: "Volver a Estacionamiento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }, undefined)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_MostrarSalida__WEBPACK_IMPORTED_MODULE_5__.default, {
          cedula: cedula,
          nombre: nombre,
          horaEntrada: horaEntrada,
          vehiculo: vehiculo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: salidaVehiculo,
          className: "mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block",
          children: "Aceptar salida"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }, undefined)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SalidaPage);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_index_js"], function() { return __webpack_exec__("./pages/salida/[id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvY2FyZHMvTW9zdHJhclNhbGlkYS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL3NhbGlkYS9baWRdLmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTW9zdHJhclNhbGlkYSIsImNlZHVsYSIsIm5vbWJyZSIsImhvcmFFbnRyYWRhIiwiaG9yYVNhbGlkYSIsIm1vbnRvUGFnYWRvIiwidmVoaWN1bG8iLCJwbGFjYSIsInRpcG8iLCJxdWVyeSIsImdxbCIsIm11dGF0aW9uIiwiU2FsaWRhUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwic2FsaWRhIiwic2V0U2FsaWRhIiwidXNlU3RhdGUiLCJyZWdpc3RyYXJTYWxpZGEiLCJ1c2VNdXRhdGlvbiIsImRhdGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInVzZUVmZmVjdCIsIm9idGVuZXJWZWhpY3Vsb0VzdGFjaW9uYWRvIiwic2FsaWRh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O0FBQUE7QUFBQSxxQkFESixlQVNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSTtBQUFRLHFCQUFTLEVBQUMsd0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSjtBQUFBLHNCQURHLGdCQWlCSDtBQUFBLGdDQUNJLDhEQUFDLG1FQUFEO0FBQ0ksZ0JBQU0sRUFBRUosTUFEWjtBQUVJLGdCQUFNLEVBQUVDLE1BRlo7QUFHSSxxQkFBVyxFQUFFQyxXQUhqQjtBQUlJLGtCQUFRLEVBQUVHO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU9JO0FBQ0ksaUJBQU8sRUFBRW9CLGNBRGI7QUFFSSxtQkFBUyxFQUFDLHdEQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKO0FBQUEsc0JBckJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQThDSCxDQWhGRDs7QUFrRkEsK0RBQWVkLFVBQWYsRTs7Ozs7Ozs7Ozs7QUN4SEEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvc2FsaWRhL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNb3N0cmFyU2FsaWRhID0gKHtcclxuICAgIGNlZHVsYSxcclxuICAgIG5vbWJyZSxcclxuICAgIGhvcmFFbnRyYWRhLFxyXG4gICAgaG9yYVNhbGlkYSxcclxuICAgIG1vbnRvUGFnYWRvLFxyXG4gICAgdmVoaWN1bG8sXHJcbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNlZHVsYTo8L3N0cm9uZz4ge2NlZHVsYX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm9tYnJlOjwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgIHtub21icmV9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlBsYWNhOjwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgIHt2ZWhpY3Vsby5wbGFjYX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VGlwbyBWZWhpY3Vsbzo8L3N0cm9uZz4gXHJcbiAgICAgICAgICAgICAgICB7dmVoaWN1bG8udGlwb31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SG9yYSBFbnRyYWRhOjwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgIHtob3JhRW50cmFkYX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICB7aG9yYVNhbGlkYSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkhvcmEgU2FsaWRhOjwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgICAgICB7aG9yYVNhbGlkYX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge21vbnRvUGFnYWRvICYmIChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TW9udG8gUGFnYWRvOjwvc3Ryb25nPiBcclxuICAgICAgICAgICAgICAgICAgICB7bW9udG9QYWdhZG99JFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vc3RyYXJTYWxpZGE7XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgTW9zdHJhclNhbGlkYSBmcm9tIFwiY29tcG9uZW50cy9jYXJkcy9Nb3N0cmFyU2FsaWRhXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gICAgcXVlcnkgb2J0ZW5lclZlaGljdWxvRXN0YWNpb25hZG8oJGlkOiBJRCEpIHtcclxuICAgICAgICBvYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkbyhpZDogJGlkKSB7XHJcbiAgICAgICAgICAgIGNlZHVsYVxyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgaG9yYUVudHJhZGFcclxuICAgICAgICAgICAgaG9yYVNhbGlkYVxyXG4gICAgICAgICAgICBtb250b1BhZ2Fkb1xyXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBtdXRhdGlvbiA9IGdxbGBcclxuICAgIG11dGF0aW9uIHNhbGlkYUVzdGFjaW9uYW1pZW50bygkaWQ6IElEISkge1xyXG4gICAgICAgIHNhbGlkYUVzdGFjaW9uYW1pZW50byhpZDogJGlkKSB7XHJcbiAgICAgICAgICAgIGNlZHVsYVxyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgaG9yYUVudHJhZGFcclxuICAgICAgICAgICAgaG9yYVNhbGlkYVxyXG4gICAgICAgICAgICBtb250b1BhZ2Fkb1xyXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2FsaWRhUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW3NhbGlkYSwgc2V0U2FsaWRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3JlZ2lzdHJhclNhbGlkYV0gPSB1c2VNdXRhdGlvbihtdXRhdGlvbik7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShxdWVyeSwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS5vYnRlbmVyVmVoaWN1bG9Fc3RhY2lvbmFkby5ob3JhU2FsaWRhKSB7XHJcbiAgICAgICAgICAgIHNldFNhbGlkYShkYXRhLm9idGVuZXJWZWhpY3Vsb0VzdGFjaW9uYWRvKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIG51bGw7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3QgeyB2ZWhpY3VsbywgY2VkdWxhLCBub21icmUsIGhvcmFFbnRyYWRhLCBob3JhU2FsaWRhIH0gPVxyXG4gICAgICAgIGRhdGEub2J0ZW5lclZlaGljdWxvRXN0YWNpb25hZG87XHJcblxyXG4gICAgY29uc3Qgc2FsaWRhVmVoaWN1bG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZWdpc3RyYXJTYWxpZGEoe1xyXG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFNhbGlkYShkYXRhLnNhbGlkYUVzdGFjaW9uYW1pZW50byk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS01IGJvcmRlci1ncmF5LTIwMCBib3JkZXItYiBtYi0yIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0cmFyIFNhbGlkYVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNSBwLTUgbXQtMyBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEluZm9ybWFjaW9uIGRlbCBWZWhpY3Vsb1xyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIHtzYWxpZGEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vc3RyYXJTYWxpZGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlZHVsYT17c2FsaWRhLmNlZHVsYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZT17c2FsaWRhLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFFbnRyYWRhPXtzYWxpZGEuaG9yYUVudHJhZGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhU2FsaWRhPXtzYWxpZGEuaG9yYUVudHJhZGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWhpY3Vsbz17c2FsaWRhLnZlaGljdWxvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udG9QYWdhZG89e3NhbGlkYS5tb250b1BhZ2Fkb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtMyBweC0zIHB5LTIgYmctZ3JheS04MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIGJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVm9sdmVyIGEgRXN0YWNpb25hbWllbnRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9zdHJhclNhbGlkYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VkdWxhPXtjZWR1bGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmU9e25vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFFbnRyYWRhPXtob3JhRW50cmFkYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlaGljdWxvPXt2ZWhpY3Vsb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2FsaWRhVmVoaWN1bG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zIHB4LTMgcHktMiBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2VwdGFyIHNhbGlkYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGlkYVBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==