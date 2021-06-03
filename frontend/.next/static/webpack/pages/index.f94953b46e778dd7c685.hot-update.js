self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AgregarVehiculos/index.js":
/*!**********************************************!*\
  !*** ./components/AgregarVehiculos/index.js ***!
  \**********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\AgregarVehiculos\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    mutation entradaEstacionamiento($input: InputEstacionamiento) {\n        entradaEstacionamiento(input: $input) {\n            id\n            cedula\n            nombre\n            horaEntrada\n            vehiculo {\n                id\n                placa\n                tipo\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    query obtenerVehiculos {\n        obtenerVehiculos {\n            id\n            placa\n            tipo\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var getVehicles = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject());
var agregarEstacionamiento = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject2());

var AgregarVehiculos = function AgregarVehiculos() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      vehiculo = _useState[0],
      setVehiculo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      vehiculos = _useState2[0],
      setVehiculos = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showModal = _useState4[0],
      setShowModal = _useState4[1];

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(getVehicles),
      data = _useQuery.data;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(agregarEstacionamiento),
      _useMutation2 = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      agregar = _useMutation2[0];

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (data) {
      var collectVehicles = data.obtenerVehiculos.map(function (veh) {
        return {
          value: veh.id,
          label: veh.placa
        };
      });
      setVehiculos(collectVehicles);
    }
  }, [data]); // console.log(vehiculos);

  var form = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
    initialValues: {
      nombre: "",
      cedula: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__.object({
      nombre: yup__WEBPACK_IMPORTED_MODULE_7__.string().required("El nombre es requerido"),
      cedula: yup__WEBPACK_IMPORTED_MODULE_7__.string().min(8, "Esta campo admite 8 caracteres").required("La cedula es requeria")
    }),
    onSubmit: function () {
      var _onSubmit = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(vals) {
        var _yield$agregar, _data;

        return C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!vehiculo) {
                  _context.next = 7;
                  break;
                }

                vals.vehiculo = vehiculo;
                _context.next = 4;
                return agregar({
                  variables: {
                    input: vals
                  }
                });

              case 4:
                _yield$agregar = _context.sent;
                _data = _yield$agregar.data;

                if (_data) {
                  form.resetForm();
                  setShowModal(false);
                }

              case 7:
                setError("Elija un vehiculo");

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  });
  var values = form.values,
      handleSubmit = form.handleSubmit,
      handleChange = form.handleChange,
      errors = form.errors,
      handleBlur = form.handleBlur; // console.log(errors);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "px-5 mb-3",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "px-5 py-2 bg-gray-800 text-white rounded-md",
      onClick: function onClick() {
        return setShowModal(true);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-md",
        children: "Ingresar Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, _this), showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            onClick: function onClick() {
              return setShowModal(false);
            },
            className: "absolute text-2xl right-0 -top-3 cursor-pointer",
            children: "x"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_9__.default, {
            className: "bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3",
            options: vehiculos,
            onChange: function onChange(e) {
              return setVehiculo(e.value);
            },
            onBlur: handleBlur,
            placeholder: "Vehiculo",
            name: "vehiculo",
            id: "vehiculo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "submit",
            value: "Ingresar Vehiculo",
            className: "px-3 py-2 bg-gray-800 mx-auto text-white rounded-md block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, _this);
};

_s(AgregarVehiculos, "G8j7YYhRC8b4KaSZK9TPYdxhUMQ=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation, formik__WEBPACK_IMPORTED_MODULE_6__.useFormik];
});

_c = AgregarVehiculos;
/* harmony default export */ __webpack_exports__["default"] = (AgregarVehiculos);

var _c;

$RefreshReg$(_c, "AgregarVehiculos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZ3JlZ2FyVmVoaWN1bG9zL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFZlaGljbGVzIiwiZ3FsIiwiYWdyZWdhckVzdGFjaW9uYW1pZW50byIsIkFncmVnYXJWZWhpY3Vsb3MiLCJ1c2VTdGF0ZSIsInZlaGljdWxvIiwic2V0VmVoaWN1bG8iLCJ2ZWhpY3Vsb3MiLCJzZXRWZWhpY3Vsb3MiLCJlcnJvciIsInNldEVycm9yIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlUXVlcnkiLCJkYXRhIiwidXNlTXV0YXRpb24iLCJhZ3JlZ2FyIiwidXNlRWZmZWN0IiwiY29sbGVjdFZlaGljbGVzIiwib2J0ZW5lclZlaGljdWxvcyIsIm1hcCIsInZlaCIsInZhbHVlIiwiaWQiLCJsYWJlbCIsInBsYWNhIiwiZm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJub21icmUiLCJjZWR1bGEiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJtaW4iLCJvblN1Ym1pdCIsInZhbHMiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlc2V0Rm9ybSIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImVycm9ycyIsImhhbmRsZUJsdXIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxtREFBSCxtQkFBakI7QUFTQSxJQUFNQyxzQkFBc0IsR0FBR0QsbURBQUgsb0JBQTVCOztBQWdCQSxJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFBQTs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxJQUFELENBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUFBLG1CQUVPRiwr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R0ksb0JBQVEsRUFBRSxrQkFBQ3NDLENBQUQ7QUFBQSxxQkFBT3ZDLFdBQVcsQ0FBQ3VDLENBQUMsQ0FBQ3ZCLEtBQUgsQ0FBbEI7QUFBQSxhQUhkO0FBSUksa0JBQU0sRUFBRXNCLFVBSlo7QUFLSSx1QkFBVyxFQUFDLFVBTGhCO0FBTUksZ0JBQUksRUFBQyxVQU5UO0FBT0ksY0FBRSxFQUFDO0FBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkosZUE4Qkk7QUFDSSxnQkFBSSxFQUFDLFFBRFQ7QUFFSSxpQkFBSyxFQUFDLG1CQUZWO0FBR0kscUJBQVMsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwREgsQ0E1R0Q7O0dBQU16QyxnQjtVQUtlVSxvRCxFQUNDRSx1RCxFQWNMWSw2Qzs7O0tBcEJYeEIsZ0I7QUE4R04sK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5NDk1M2I0NmU3NzhkZDdjNjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24sIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5cclxuY29uc3QgZ2V0VmVoaWNsZXMgPSBncWxgXHJcbiAgICBxdWVyeSBvYnRlbmVyVmVoaWN1bG9zIHtcclxuICAgICAgICBvYnRlbmVyVmVoaWN1bG9zIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgcGxhY2FcclxuICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuY29uc3QgYWdyZWdhckVzdGFjaW9uYW1pZW50byA9IGdxbGBcclxuICAgIG11dGF0aW9uIGVudHJhZGFFc3RhY2lvbmFtaWVudG8oJGlucHV0OiBJbnB1dEVzdGFjaW9uYW1pZW50bykge1xyXG4gICAgICAgIGVudHJhZGFFc3RhY2lvbmFtaWVudG8oaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjZWR1bGFcclxuICAgICAgICAgICAgbm9tYnJlXHJcbiAgICAgICAgICAgIGhvcmFFbnRyYWRhXHJcbiAgICAgICAgICAgIHZlaGljdWxvIHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBwbGFjYVxyXG4gICAgICAgICAgICAgICAgdGlwb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQWdyZWdhclZlaGljdWxvcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt2ZWhpY3Vsbywgc2V0VmVoaWN1bG9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdmVoaWN1bG9zLCBzZXRWZWhpY3Vsb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KGdldFZlaGljbGVzKTtcclxuICAgIGNvbnN0IFthZ3JlZ2FyXSA9IHVzZU11dGF0aW9uKGFncmVnYXJFc3RhY2lvbmFtaWVudG8pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sbGVjdFZlaGljbGVzID0gZGF0YS5vYnRlbmVyVmVoaWN1bG9zLm1hcCgodmVoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2ZWguaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHZlaC5wbGFjYSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRWZWhpY3Vsb3MoY29sbGVjdFZlaGljbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGF0YV0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codmVoaWN1bG9zKTtcclxuICAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICAgICAgbm9tYnJlOiBcIlwiLFxyXG4gICAgICAgICAgICBjZWR1bGE6IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgbm9tYnJlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbCBub21icmUgZXMgcmVxdWVyaWRvXCIpLFxyXG4gICAgICAgICAgICBjZWR1bGE6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLm1pbig4LCBcIkVzdGEgY2FtcG8gYWRtaXRlIDggY2FyYWN0ZXJlc1wiKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKFwiTGEgY2VkdWxhIGVzIHJlcXVlcmlhXCIpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyAodmFscykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmVoaWN1bG8pIHtcclxuICAgICAgICAgICAgICAgIHZhbHMudmVoaWN1bG8gPSB2ZWhpY3VsbztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYWdyZWdhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB2YWxzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldEVycm9yKFwiRWxpamEgdW4gdmVoaWN1bG9cIik7XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgZXJyb3JzLCBoYW5kbGVCbHVyIH0gPSBmb3JtO1xyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IG1iLTNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIGJnLWdyYXktODAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LW1kXCI+SW5ncmVzYXIgVmVoaWN1bG88L2gzPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW4gYWJzb2x1dGUgYmctb3BhY2l0eS00MCBiZy1ibGFjayB0b3AtMCBsZWZ0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBweC01IGJnLXdoaXRlIHJvdW5kZWQtbWQgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ncmVzYXIgYSBFc3RhY2lvbmFtaWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LTJ4bCByaWdodC0wIC10b3AtMyBjdXJzb3ItcG9pbnRlclwiPng8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNlZHVsYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjZWR1bGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGZvY3VzOmJnLXdoaXRlIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgc206dGV4dC1zbSBib3JkZXItZ3JheS0xMDAgcm91bmRlZC1tZCB0ZXh0LWJhc2UgYm9yZGVyIG91dGxpbmUtbm9uZSBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlZHVsYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jZWR1bGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBibG9jayB3LWZ1bGwgcHktMiBweC0zIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGJvcmRlciBvdXRsaW5lLW5vbmUgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBibG9jayB3LWZ1bGwgcHktMiBweC0zIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGJvcmRlciBvdXRsaW5lLW5vbmUgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dmVoaWN1bG9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmVoaWN1bG8oZS52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmVoaWN1bG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2ZWhpY3Vsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2ZWhpY3Vsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJJbmdyZXNhciBWZWhpY3Vsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIGJnLWdyYXktODAwIG14LWF1dG8gdGV4dC13aGl0ZSByb3VuZGVkLW1kIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFncmVnYXJWZWhpY3Vsb3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=