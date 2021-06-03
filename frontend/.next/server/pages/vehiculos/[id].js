(function() {
var exports = {};
exports.id = "pages/vehiculos/[id]";
exports.ids = ["pages/vehiculos/[id]"];
exports.modules = {

/***/ "./components/TableHistorial/Historial.js":
/*!************************************************!*\
  !*** ./components/TableHistorial/Historial.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\TableHistorial\\Historial.js";


const Historial = ({
  nombre,
  horaEntrada,
  horaSalida,
  cedula
}) => {
  const horaE = new Date(parseInt(horaEntrada));
  const horaS = new Date(parseInt(horaSalida));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4",
      children: nombre
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4",
      children: cedula
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4",
      children: horaE.toLocaleString()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4",
      children: horaSalida && horaS.toLocaleDateString()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Historial);

/***/ }),

/***/ "./components/TableHistorial/index.js":
/*!********************************************!*\
  !*** ./components/TableHistorial/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Historial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Historial */ "./components/TableHistorial/Historial.js");

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\TableHistorial\\index.js";


const clasesThead = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

const TableHistorial = ({
  historial
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
    className: "min-w-full divide-y divide-gray-200 shadow-lg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
      className: "bg-gray-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          scope: "col",
          className: clasesThead,
          children: "Conductor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          scope: "col",
          className: clasesThead,
          children: "Cedula"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          scope: "col",
          className: clasesThead,
          children: "Entrada"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          scope: "col",
          className: clasesThead,
          children: "Salida"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
      className: "bg-white divide-y divide-gray-200",
      children: historial.map(es => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Historial__WEBPACK_IMPORTED_MODULE_2__.default, {
        id: es.id,
        horaSalida: es.horaSalida,
        cedula: es.cedula,
        horaEntrada: es.horaEntrada,
        nombre: es.nombre
      }, es.id, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TableHistorial);

/***/ }),

/***/ "./pages/vehiculos/[id].js":
/*!*********************************!*\
  !*** ./pages/vehiculos/[id].js ***!
  \*********************************/
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
/* harmony import */ var components_TableHistorial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TableHistorial */ "./components/TableHistorial/index.js");

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\pages\\vehiculos\\[id].js";





const query = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
    query obternerHistorialVehiculo($id: ID!) {
        obtenerHistorialVehiculo(id: $id) {
            vehiculo {
                id
                placa
                tipo
            }
            historial {
                id
                cedula
                nombre
                horaEntrada
                horaSalida
                montoPagado
            }
        }
    }
`;

const VehiculoPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    id
  } = router.query;
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(query, {
    variables: {
      id
    }
  });
  if (!data) return null;
  const {
    vehiculo,
    historial
  } = data.obtenerHistorialVehiculo;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "px-5 py-5 border-gray-200 border-b mb-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-gray-900 text-2xl font-semibold",
        children: "Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 p-5 mt-3 bg-white shadow-lg",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl font-bold mb-3",
        children: "Informacion del Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Placa vehiculo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), " ", vehiculo.placa]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Tipo de vehiculo:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined), " ", vehiculo.tipo]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-5 mt-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_TableHistorial__WEBPACK_IMPORTED_MODULE_5__.default, {
        historial: historial
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (VehiculoPage);

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_index_js"], function() { return __webpack_exec__("./pages/vehiculos/[id].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvVGFibGVIaXN0b3JpYWwvSGlzdG9yaWFsLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9UYWJsZUhpc3RvcmlhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL3ZlaGljdWxvcy9baWRdLmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSGlzdG9yaWFsIiwibm9tYnJlIiwiaG9yYUVudHJhZGEiLCJob3JhU2FsaWRhIiwiY2VkdWxhIiwiaG9yYUUiLCJEYXRlIiwicGFyc2VJbnQiLCJob3JhUyIsInRvTG9jYWxlU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY2xhc2VzVGhlYWQiLCJUYWJsZUhpc3RvcmlhbCIsImhpc3RvcmlhbCIsIm1hcCIsImVzIiwiaWQiLCJxdWVyeSIsImdxbCIsIlZlaGljdWxvUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRhdGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInZlaGljdWxvIiwib2J0ZW5lckhpc3RvcmlhbFZlaGljdWxvIiwicGxhY2EiLCJ0aXBvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUMsYUFBVjtBQUF1QkMsWUFBdkI7QUFBbUNDO0FBQW5DLENBQUQsS0FBaUQ7QUFDL0QsUUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosQ0FBU0MsUUFBUSxDQUFDTCxXQUFELENBQWpCLENBQWQ7QUFDQSxRQUFNTSxLQUFLLEdBQUcsSUFBSUYsSUFBSixDQUFTQyxRQUFRLENBQUNKLFVBQUQsQ0FBakIsQ0FBZDtBQUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUFBLGdCQUEyQkY7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUksZUFBUyxFQUFDLFdBQWQ7QUFBQSxnQkFBMkJHO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFJLGVBQVMsRUFBQyxXQUFkO0FBQUEsZ0JBQ0tDLEtBQUssQ0FBQ0ksY0FBTjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFNSTtBQUFJLGVBQVMsRUFBQyxXQUFkO0FBQUEsZ0JBQ01OLFVBQVUsSUFBSUssS0FBSyxDQUFDRSxrQkFBTjtBQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBWUgsQ0FmRDs7QUFpQkEsK0RBQWVWLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUEsTUFBTVcsV0FBVyxHQUNiLGdGQURKOztBQUdBLE1BQU1DLGNBQWMsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQjtBQUNwQyxzQkFDSTtBQUFPLGFBQVMsRUFBQywrQ0FBakI7QUFBQSw0QkFDSTtBQUFPLGVBQVMsRUFBQyxZ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SSw4REFBQyw4REFBRDtBQUFnQixpQkFBUyxFQUFFZjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXFCSCxDQW5DRDs7QUFxQ0EsK0RBQWVNLFlBQWYsRTs7Ozs7Ozs7Ozs7QUMvREEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvdmVoaWN1bG9zL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIaXN0b3JpYWwgPSAoeyBub21icmUsIGhvcmFFbnRyYWRhLCBob3JhU2FsaWRhLCBjZWR1bGEgfSkgPT4ge1xyXG4gICAgY29uc3QgaG9yYUUgPSBuZXcgRGF0ZShwYXJzZUludChob3JhRW50cmFkYSkpXHJcbiAgICBjb25zdCBob3JhUyA9IG5ldyBEYXRlKHBhcnNlSW50KGhvcmFTYWxpZGEpKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57bm9tYnJlfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj57Y2VkdWxhfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIHtob3JhRS50b0xvY2FsZVN0cmluZygpfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XHJcbiAgICAgICAgICAgICAgICB7IGhvcmFTYWxpZGEgJiYgaG9yYVMudG9Mb2NhbGVEYXRlU3RyaW5nKCl9ICAgICAgXHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaXN0b3JpYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhpc3RvcmlhbCBmcm9tIFwiLi9IaXN0b3JpYWxcIjtcclxuXHJcbmNvbnN0IGNsYXNlc1RoZWFkID1cclxuICAgIFwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI7XHJcblxyXG5jb25zdCBUYWJsZUhpc3RvcmlhbCA9ICh7aGlzdG9yaWFsfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPXtjbGFzZXNUaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmR1Y3RvclxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPXtjbGFzZXNUaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENlZHVsYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPXtjbGFzZXNUaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudHJhZGFcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT17Y2xhc2VzVGhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTYWxpZGFcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAge2hpc3RvcmlhbC5tYXAoZXM9PihcclxuICAgICAgICAgICAgICAgICAgICA8SGlzdG9yaWFsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtlcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICBpZD17ZXMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaG9yYVNhbGlkYT17ZXMuaG9yYVNhbGlkYX1cclxuICAgICAgICAgICAgICAgICAgICBjZWR1bGE9e2VzLmNlZHVsYX1cclxuICAgICAgICAgICAgICAgICAgICBob3JhRW50cmFkYT17ZXMuaG9yYUVudHJhZGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlPXtlcy5ub21icmV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUhpc3RvcmlhbDtcclxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgVGFibGVIaXN0b3JpYWwgZnJvbSBcImNvbXBvbmVudHMvVGFibGVIaXN0b3JpYWxcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gICAgcXVlcnkgb2J0ZXJuZXJIaXN0b3JpYWxWZWhpY3VsbygkaWQ6IElEISkge1xyXG4gICAgICAgIG9idGVuZXJIaXN0b3JpYWxWZWhpY3VsbyhpZDogJGlkKSB7XHJcbiAgICAgICAgICAgIHZlaGljdWxvIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhpc3RvcmlhbCB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgY2VkdWxhXHJcbiAgICAgICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgICAgIGhvcmFFbnRyYWRhXHJcbiAgICAgICAgICAgICAgICBob3JhU2FsaWRhXHJcbiAgICAgICAgICAgICAgICBtb250b1BhZ2Fkb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgVmVoaWN1bG9QYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShxdWVyeSwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCB7IHZlaGljdWxvLCBoaXN0b3JpYWwgfSA9IGRhdGEub2J0ZW5lckhpc3RvcmlhbFZlaGljdWxvO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTUgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1iIG1iLTIgYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICBWZWhpY3Vsb1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNSBwLTUgbXQtMyBiZy13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItM1wiPkluZm9ybWFjaW9uIGRlbCBWZWhpY3VsbzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QbGFjYSB2ZWhpY3Vsbzo8L3N0cm9uZz4ge3ZlaGljdWxvLnBsYWNhfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRpcG8gZGUgdmVoaWN1bG86PC9zdHJvbmc+IHt2ZWhpY3Vsby50aXBvfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNSBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVIaXN0b3JpYWwgaGlzdG9yaWFsPXtoaXN0b3JpYWx9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlaGljdWxvUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9