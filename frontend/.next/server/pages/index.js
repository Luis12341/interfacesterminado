(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/AgregarVehiculos/index.js":
/*!**********************************************!*\
  !*** ./components/AgregarVehiculos/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\AgregarVehiculos\\index.js";





const getVehicles = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
    query obtenerVehiculos {
        obtenerVehiculos {
            id
            placa
            tipo
        }
    }
`;
const agregarEstacionamiento = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
    mutation entradaEstacionamiento($input: InputEstacionamiento) {
        entradaEstacionamiento(input: $input) {
            id
            cedula
            nombre
            horaEntrada
            vehiculo {
                id
                placa
                tipo
            }
        }
    }
`;

const AgregarVehiculos = () => {
  const {
    0: vehiculo,
    1: setVehiculo
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: vehiculos,
    1: setVehiculos
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(getVehicles);
  const [agregar] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(agregarEstacionamiento);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (data) {
      const collectVehicles = data.obtenerVehiculos.map(veh => {
        return {
          value: veh.id,
          label: veh.placa
        };
      });
      setVehiculos(collectVehicles);
    }
  }, [data]); // console.log(vehiculos);

  const form = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
    initialValues: {
      nombre: "",
      cedula: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__.object({
      nombre: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("El nombre es requerido"),
      cedula: yup__WEBPACK_IMPORTED_MODULE_5__.string().min(8, "Esta campo admite 8 caracteres").required("La cedula es requeria")
    }),
    onSubmit: async vals => {
      if (vehiculo) {
        vals.vehiculo = vehiculo;
        const {
          data
        } = await agregar({
          variables: {
            input: vals
          }
        });

        if (data) {
          form.resetForm();
          setShowModal(false);
        }
      }

      setError("Elija un vehiculo");
    }
  });
  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    handleBlur
  } = form; // console.log(errors);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "px-5 mb-3",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "px-5 py-2 bg-gray-800 text-white rounded-md",
      onClick: () => setShowModal(true),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-md",
        children: "Ingresar Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, undefined), showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full min-h-screen absolute bg-opacity-40 bg-black top-0 left-0 flex justify-center items-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-md w-full px-5 bg-white rounded-md p-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "text-xl text-center",
            children: "Ingresar a Estacionamiento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            onClick: () => setShowModal(false),
            className: "absolute text-2xl right-0 -top-3 cursor-pointer",
            children: "x"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit,
          className: "mt-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "cedula",
            id: "cedula",
            className: "bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3",
            placeholder: "Cedula",
            value: values.cedula,
            onChange: handleChange,
            onBlur: handleBlur
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "nombre",
            id: "nombre",
            className: "bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3",
            placeholder: "Nombre",
            value: values.nombre,
            onChange: handleChange,
            onBlur: handleBlur
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_select__WEBPACK_IMPORTED_MODULE_3___default()), {
            className: "bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3",
            options: vehiculos,
            onChange: e => setVehiculo(e.value),
            onBlur: handleBlur,
            placeholder: "Vehiculo",
            name: "vehiculo",
            id: "vehiculo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "submit",
            value: "Ingresar Vehiculo",
            className: "px-3 py-2 bg-gray-800 mx-auto text-white rounded-md block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AgregarVehiculos);

/***/ }),

/***/ "./components/TableEstacionamiento/index.js":
/*!**************************************************!*\
  !*** ./components/TableEstacionamiento/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_cards_Vehiculo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/cards/Vehiculo */ "./components/cards/Vehiculo.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\TableEstacionamiento\\index.js";


const clasesThead = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

const TableEstacionamiento = ({
  estacionamiento
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
          children: "Placa"
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
          children: "Vehiculo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          scope: "col",
          className: "relative px-6 py-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "sr-only",
            children: "Edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
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
      children: estacionamiento && estacionamiento.map(es => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_cards_Vehiculo__WEBPACK_IMPORTED_MODULE_1__.default, {
        id: es.id,
        vehiculo: es.vehiculo,
        cedula: es.cedula,
        horaEntrada: es.horaEntrada,
        nombre: es.nombre
      }, es.id, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TableEstacionamiento);

/***/ }),

/***/ "./components/cards/NumberVehicles.js":
/*!********************************************!*\
  !*** ./components/cards/NumberVehicles.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\cards\\NumberVehicles.js";


const NumberVehicles = ({
  number,
  type
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-white shadow-lg max-w-xs py-6 px-8 rounded-md text-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "mb-2 text-xl",
      children: ["Numero de ", type]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "text-3xl",
      children: number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NumberVehicles);

/***/ }),

/***/ "./components/cards/Vehiculo.js":
/*!**************************************!*\
  !*** ./components/cards/Vehiculo.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\cards\\Vehiculo.js";



const Vehiculo = ({
  vehiculo,
  nombre,
  cedula,
  id,
  horaEntrada
}) => {
  const entrada = new Date(parseInt(horaEntrada)); // console.log()

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4 whitespace-nowrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Nombre: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined), nombre]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Cedula: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined), cedula]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4 whitespace-nowrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: vehiculo.placa
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4 whitespace-nowrap",
      children: entrada.toLocaleString()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-900",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: vehiculo.tipo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
      className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/salida/${id}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-indigo-600 hover:text-indigo-900",
          children: "Registrar Salida"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Vehiculo);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_AgregarVehiculos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/AgregarVehiculos */ "./components/AgregarVehiculos/index.js");
/* harmony import */ var components_cards_NumberVehicles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/NumberVehicles */ "./components/cards/NumberVehicles.js");
/* harmony import */ var components_TableEstacionamiento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/TableEstacionamiento */ "./components/TableEstacionamiento/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");

var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\pages\\index.js";






const QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
    query obternerCantidadPuestos {
        obtenerCantidadPuestos {
            carros
            motos
        }
    }
`;
const QUERY2 = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
    query obternerCantidadPuestos {
        obtenerVehiculosEstacionados {
            id
            cedula
            nombre
            horaEntrada
            vehiculo {
                id
                placa
                tipo
            }
        }
    }
`;
function Home() {
  const {
    data,
    startPolling,
    stopPolling
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(QUERY);
  const {
    data: estacionamiento,
    startPolling: startPolling2,
    stopPolling: stopPolling2
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(QUERY2);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    startPolling(1000);
    startPolling2(1000);
    return () => {
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

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

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

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-select");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_index_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvQWdyZWdhclZlaGljdWxvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvVGFibGVFc3RhY2lvbmFtaWVudG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL2NhcmRzL051bWJlclZlaGljbGVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9jYXJkcy9WZWhpY3Vsby5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LXNlbGVjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJ5dXBcIiJdLCJuYW1lcyI6WyJnZXRWZWhpY2xlcyIsImdxbCIsImFncmVnYXJFc3RhY2lvbmFtaWVudG8iLCJBZ3JlZ2FyVmVoaWN1bG9zIiwidmVoaWN1bG8iLCJzZXRWZWhpY3VsbyIsInVzZVN0YXRlIiwidmVoaWN1bG9zIiwic2V0VmVoaWN1bG9zIiwiZXJyb3IiLCJzZXRFcnJvciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRhdGEiLCJ1c2VRdWVyeSIsImFncmVnYXIiLCJ1c2VNdXRhdGlvbiIsInVzZUVmZmVjdCIsImNvbGxlY3RWZWhpY2xlcyIsIm9idGVuZXJWZWhpY3Vsb3MiLCJtYXAiLCJ2ZWgiLCJ2YWx1ZSIsImlkIiwibGFiZWwiLCJwbGFjYSIsImZvcm0iLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibm9tYnJlIiwiY2VkdWxhIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwibWluIiwib25TdWJtaXQiLCJ2YWxzIiwidmFyaWFibGVzIiwiaW5wdXQiLCJyZXNldEZvcm0iLCJ2YWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlcnJvcnMiLCJoYW5kbGVCbHVyIiwiZSIsImNsYXNlc1RoZWFkIiwiVGFibGVFc3RhY2lvbmFtaWVudG8iLCJlc3RhY2lvbmFtaWVudG8iLCJlcyIsImhvcmFFbnRyYWRhIiwiTnVtYmVyVmVoaWNsZXMiLCJudW1iZXIiLCJ0eXBlIiwiVmVoaWN1bG8iLCJlbnRyYWRhIiwiRGF0ZSIsInBhcnNlSW50IiwidG9Mb2NhbGVTdHJpbmciLCJ0aXBvIiwiUVVFUlkiLCJRVUVSWTIiLCJIb21lIiwic3RhcnRQb2xsaW5nIiwic3RvcFBvbGxpbmciLCJzdGFydFBvbGxpbmcyIiwic3RvcFBvbGxpbmcyIiwib2J0ZW5lckNhbnRpZGFkUHVlc3RvcyIsImNhcnJvcyIsIm1vdG9zIiwib2J0ZW5lclZlaGljdWxvc0VzdGFjaW9uYWRvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLCtDQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNB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Qzs7Ozs7Ozs7Ozs7QUMvRUQsNEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24sIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5cclxuY29uc3QgZ2V0VmVoaWNsZXMgPSBncWxgXHJcbiAgICBxdWVyeSBvYnRlbmVyVmVoaWN1bG9zIHtcclxuICAgICAgICBvYnRlbmVyVmVoaWN1bG9zIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgcGxhY2FcclxuICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuY29uc3QgYWdyZWdhckVzdGFjaW9uYW1pZW50byA9IGdxbGBcclxuICAgIG11dGF0aW9uIGVudHJhZGFFc3RhY2lvbmFtaWVudG8oJGlucHV0OiBJbnB1dEVzdGFjaW9uYW1pZW50bykge1xyXG4gICAgICAgIGVudHJhZGFFc3RhY2lvbmFtaWVudG8oaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjZWR1bGFcclxuICAgICAgICAgICAgbm9tYnJlXHJcbiAgICAgICAgICAgIGhvcmFFbnRyYWRhXHJcbiAgICAgICAgICAgIHZlaGljdWxvIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQWdyZWdhclZlaGljdWxvcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2ZWhpY3Vsbywgc2V0VmVoaWN1bG9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdmVoaWN1bG9zLCBzZXRWZWhpY3Vsb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KGdldFZlaGljbGVzKTtcclxuICAgIGNvbnN0IFthZ3JlZ2FyXSA9IHVzZU11dGF0aW9uKGFncmVnYXJFc3RhY2lvbmFtaWVudG8pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdFZlaGljbGVzID0gZGF0YS5vYnRlbmVyVmVoaWN1bG9zLm1hcCgodmVoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2ZWguaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHZlaC5wbGFjYSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRWZWhpY3Vsb3MoY29sbGVjdFZlaGljbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGF0YV0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codmVoaWN1bG9zKTtcclxuICAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgICAgICAgICBjZWR1bGE6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgbm9tYnJlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbCBub21icmUgZXMgcmVxdWVyaWRvXCIpLFxyXG4gICAgICAgICAgICBjZWR1bGE6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLm1pbig4LCBcIkVzdGEgY2FtcG8gYWRtaXRlIDggY2FyYWN0ZXJlc1wiKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKFwiTGEgY2VkdWxhIGVzIHJlcXVlcmlhXCIpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyAodmFscykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmVoaWN1bG8pIHtcclxuICAgICAgICAgICAgICAgIHZhbHMudmVoaWN1bG8gPSB2ZWhpY3VsbztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYWdyZWdhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB2YWxzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiRWxpamEgdW4gdmVoaWN1bG9cIik7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgZXJyb3JzLCBoYW5kbGVCbHVyIH0gPSBmb3JtO1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IG1iLTNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIGJnLWdyYXktODAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LW1kXCI+SW5ncmVzYXIgVmVoaWN1bG88L2gzPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW4gYWJzb2x1dGUgYmctb3BhY2l0eS00MCBiZy1ibGFjayB0b3AtMCBsZWZ0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBweC01IGJnLXdoaXRlIHJvdW5kZWQtbWQgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ncmVzYXIgYSBFc3RhY2lvbmFtaWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LTJ4bCByaWdodC0wIC10b3AtMyBjdXJzb3ItcG9pbnRlclwiPng8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNlZHVsYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjZWR1bGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGZvY3VzOmJnLXdoaXRlIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgc206dGV4dC1zbSBib3JkZXItZ3JheS0xMDAgcm91bmRlZC1tZCB0ZXh0LWJhc2UgYm9yZGVyIG91dGxpbmUtbm9uZSBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlZHVsYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jZWR1bGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBibG9jayB3LWZ1bGwgcHktMiBweC0zIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGJvcmRlciBvdXRsaW5lLW5vbmUgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBibG9jayB3LWZ1bGwgcHktMiBweC0zIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGJvcmRlciBvdXRsaW5lLW5vbmUgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dmVoaWN1bG9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmVoaWN1bG8oZS52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmVoaWN1bG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2ZWhpY3Vsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2ZWhpY3Vsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJJbmdyZXNhciBWZWhpY3Vsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIGJnLWdyYXktODAwIG14LWF1dG8gdGV4dC13aGl0ZSByb3VuZGVkLW1kIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFncmVnYXJWZWhpY3Vsb3M7XHJcbiIsImltcG9ydCBWZWhpY3VsbyBmcm9tIFwiY29tcG9uZW50cy9jYXJkcy9WZWhpY3Vsb1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjbGFzZXNUaGVhZCA9XHJcbiAgICBcInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiO1xyXG5cclxuY29uc3QgVGFibGVFc3RhY2lvbmFtaWVudG8gPSAoeyBlc3RhY2lvbmFtaWVudG8gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPXtjbGFzZXNUaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmR1Y3RvclxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPXtjbGFzZXNUaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNhXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9e2NsYXNlc1RoZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW50cmFkYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPXtjbGFzZXNUaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZlaGljdWxvXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgIHtlc3RhY2lvbmFtaWVudG8gJiYgZXN0YWNpb25hbWllbnRvLm1hcChlcyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFZlaGljdWxvIGtleT17ZXMuaWR9IGlkPXtlcy5pZH0gdmVoaWN1bG89e2VzLnZlaGljdWxvfSBjZWR1bGE9e2VzLmNlZHVsYX0gaG9yYUVudHJhZGE9e2VzLmhvcmFFbnRyYWRhfSBub21icmU9e2VzLm5vbWJyZX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVFc3RhY2lvbmFtaWVudG87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE51bWJlclZlaGljbGVzID0gKHtudW1iZXIsIHR5cGV9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnIG1heC13LXhzIHB5LTYgcHgtOCByb3VuZGVkLW1kIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC14bFwiPk51bWVybyBkZSB7dHlwZX08L3A+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+e251bWJlcn08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bWJlclZlaGljbGVzXHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVmVoaWN1bG8gPSAoeyB2ZWhpY3Vsbywgbm9tYnJlLCBjZWR1bGEsIGlkLCBob3JhRW50cmFkYSB9KSA9PiB7XHJcbiAgICBjb25zdCBlbnRyYWRhID0gbmV3IERhdGUocGFyc2VJbnQoaG9yYUVudHJhZGEpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5vbWJyZTogPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtub21icmV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DZWR1bGE6IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2VkdWxhfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt2ZWhpY3Vsby5wbGFjYX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAge2VudHJhZGEudG9Mb2NhbGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgaW5saW5lLWZsZXggdGV4dC14cyBsZWFkaW5nLTUgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGwgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt2ZWhpY3Vsby50aXBvfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXJpZ2h0IHRleHQtc20gZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2FsaWRhLyR7aWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtaW5kaWdvLTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RyYXIgU2FsaWRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVoaWN1bG87XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBBZ3JlZ2FyVmVoaWN1bG9zIGZyb20gXCJjb21wb25lbnRzL0FncmVnYXJWZWhpY3Vsb3NcIjtcbmltcG9ydCBOdW1iZXJWZWhpY2xlcyBmcm9tIFwiY29tcG9uZW50cy9jYXJkcy9OdW1iZXJWZWhpY2xlc1wiO1xuaW1wb3J0IFRhYmxlRXN0YWNpb25hbWllbnRvIGZyb20gXCJjb21wb25lbnRzL1RhYmxlRXN0YWNpb25hbWllbnRvXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IFFVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IG9idGVybmVyQ2FudGlkYWRQdWVzdG9zIHtcbiAgICAgICAgb2J0ZW5lckNhbnRpZGFkUHVlc3RvcyB7XG4gICAgICAgICAgICBjYXJyb3NcbiAgICAgICAgICAgIG1vdG9zXG4gICAgICAgIH1cbiAgICB9XG5gO1xuY29uc3QgUVVFUlkyID0gZ3FsYFxuICAgIHF1ZXJ5IG9idGVybmVyQ2FudGlkYWRQdWVzdG9zIHtcbiAgICAgICAgb2J0ZW5lclZlaGljdWxvc0VzdGFjaW9uYWRvcyB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgY2VkdWxhXG4gICAgICAgICAgICBub21icmVcbiAgICAgICAgICAgIGhvcmFFbnRyYWRhXG4gICAgICAgICAgICB2ZWhpY3VsbyB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBwbGFjYVxuICAgICAgICAgICAgICAgIHRpcG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBzdGFydFBvbGxpbmcsIHN0b3BQb2xsaW5nIH0gPSB1c2VRdWVyeShRVUVSWSk7XG4gICAgY29uc3QgeyBkYXRhOiBlc3RhY2lvbmFtaWVudG8sIHN0YXJ0UG9sbGluZzpzdGFydFBvbGxpbmcyLCBzdG9wUG9sbGluZzpzdG9wUG9sbGluZzIgfSA9IHVzZVF1ZXJ5KFFVRVJZMik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzdGFydFBvbGxpbmcoMTAwMClcbiAgICAgICAgc3RhcnRQb2xsaW5nMigxMDAwKVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc3RvcFBvbGxpbmcoKVxuICAgICAgICAgICAgc3RvcFBvbGxpbmcyKClcbiAgICAgICAgfVxuICAgIH0sIFtzdGFydFBvbGxpbmcsc3RhcnRQb2xsaW5nMixzdG9wUG9sbGluZyxzdG9wUG9sbGluZzJdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTUgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1iIG1iLTIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCB0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIEVzdGFjaW9uYW1pZW50b1xuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBZ3JlZ2FyVmVoaWN1bG9zIC8+XG4gICAgICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHctZnVsbCBnYXAtNSBweC01IGp1c3RpZnktaXRlbXMtY2VudGVyIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPE51bWJlclZlaGljbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2Fycm9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcj17ZGF0YS5vYnRlbmVyQ2FudGlkYWRQdWVzdG9zLmNhcnJvc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPE51bWJlclZlaGljbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibW90b3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXtkYXRhLm9idGVuZXJDYW50aWRhZFB1ZXN0b3MubW90b3N9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSBtdC0zXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC0yeGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgVmVoaWN1bG9zIEVzdGFjaW9uYWRvc1xuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtlc3RhY2lvbmFtaWVudG8gJiYgPFRhYmxlRXN0YWNpb25hbWllbnRvXG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RhY2lvbmFtaWVudG89e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFjaW9uYW1pZW50by5vYnRlbmVyVmVoaWN1bG9zRXN0YWNpb25hZG9zXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2VsZWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==