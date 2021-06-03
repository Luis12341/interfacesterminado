self["webpackHotUpdate_N_E"]("pages/vehiculos",{

/***/ "./components/AgregarVehiculo/index.js":
/*!*********************************************!*\
  !*** ./components/AgregarVehiculo/index.js ***!
  \*********************************************/
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\AgregarVehiculo\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n    mutation agregarVehiculo($input: InputVehiculo) {\n        agregarVehiculo(input: $input) {\n            id\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var agregarVehiculo = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject());

var AgregarVehiculo = function AgregarVehiculo() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showModal = _useState2[0],
      setShowModal = _useState2[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(agregarVehiculo),
      _useMutation2 = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      agregar = _useMutation2[0];

  var form = (0,formik__WEBPACK_IMPORTED_MODULE_6__.useFormik)({
    initialValues: {
      placa: "",
      tipo: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__.object({
      placa: yup__WEBPACK_IMPORTED_MODULE_7__.string().required("La placa es requerida"),
      tipo: yup__WEBPACK_IMPORTED_MODULE_7__.string().required("El tipo de vehiculo es requerido")
    }),
    onSubmit: function () {
      var _onSubmit = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(vals) {
        var _yield$agregar, data, _errors;

        return C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return agregar({
                  variables: {
                    input: vals
                  }
                });

              case 3:
                _yield$agregar = _context.sent;
                data = _yield$agregar.data;
                _errors = _yield$agregar.errors;

                if (data) {
                  form.resetForm();
                  setShowModal(false);
                }

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0.message);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
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
      handleBlur = form.handleBlur;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "px-5 mb-3",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        return setShowModal(true);
      },
      className: "px-5 py-2 bg-gray-800 text-white rounded-md",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        className: "text-md",
        children: "Registrar Vehiculo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
            lineNumber: 60,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            onClick: function onClick() {
              return setShowModal(false);
            },
            className: "absolute text-2xl right-0 -top-3 cursor-pointer",
            children: "x"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit,
          className: "mt-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            name: "placa",
            id: "placa",
            className: "bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3",
            placeholder: "Placa",
            value: values.placa,
            onChange: handleChange,
            onBlur: handleBlur
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            value: values.tipo,
            className: "bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3",
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: "Seleccione Tipo",
            id: "tipo",
            name: "tipo",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "",
              disabled: true,
              children: "Seleccione Tipo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "CARRO",
              children: "Carro"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "MOTO",
              children: "Moto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "submit",
            value: "Ingresar Vehiculo",
            className: "px-3 py-2 bg-gray-800 mx-auto text-white rounded-md block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, _this);
};

_s(AgregarVehiculo, "Z2Tfmmb9giiXI1/CGSLxTByBJTk=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation, formik__WEBPACK_IMPORTED_MODULE_6__.useFormik];
});

_c = AgregarVehiculo;
/* harmony default export */ __webpack_exports__["default"] = (AgregarVehiculo);

var _c;

$RefreshReg$(_c, "AgregarVehiculo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZ3JlZ2FyVmVoaWN1bG8vaW5kZXguanMiXSwibmFtZXMiOlsiYWdyZWdhclZlaGljdWxvIiwiZ3FsIiwiQWdyZWdhclZlaGljdWxvIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlTXV0YXRpb24iLCJhZ3JlZ2FyIiwiZm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJwbGFjYSIsInRpcG8iLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInZhbHMiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImRhdGEiLCJlcnJvcnMiLCJyZXNldEZvcm0iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0MsbURBQUgsbUJBQXJCOztBQVFBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNBQywrQ0FBUSxDQUFDLEVBQUQsQ0FEUjtBQUFBLE1BQ25CQyxLQURtQjtBQUFBLE1BQ1pDLFFBRFk7O0FBQUEsbUJBRVFGLCtDQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRW5CRyxTQUZtQjtBQUFBLE1BRVJDLFlBRlE7O0FBQUEscUJBR1JDLDJEQUFXLENBQUNSLGVBQUQsQ0FISDtBQUFBO0FBQUEsTUFHbkJTLE9BSG1COztBQUsxQixNQUFNQyxJQUFJLEdBQUdDLGlEQUFTLENBQUM7QUFDbkJDLGlCQUFhLEVBQUU7QUFDWEMsV0FBSyxFQUFFLEVBREk7QUFFWEMsVUFBSSxFQUFFO0FBRkssS0FESTtBQUtuQkMs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QU9JLGdCQUFJLEVBQUMsTUFQVDtBQUFBLG9DQVNJO0FBQVEsbUJBQUssRUFBQyxFQUFkO0FBQWlCLHNCQUFRLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKLGVBWUk7QUFBUSxtQkFBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkosZUFhSTtBQUFRLG1CQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEosZUEwQkk7QUFDSSxnQkFBSSxFQUFDLFFBRFQ7QUFFSSxpQkFBSyxFQUFDLG1CQUZWO0FBR0kscUJBQVMsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEyREgsQ0E3RkQ7O0dBQU03QixlO1VBR2dCTSx1RCxFQUVMRyw2Qzs7O0tBTFhULGU7QUErRk4sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVoaWN1bG9zLjQxMjY1YWVlZmYwMjExMTc4MmZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuXHJcbmNvbnN0IGFncmVnYXJWZWhpY3VsbyA9IGdxbGBcclxuICAgIG11dGF0aW9uIGFncmVnYXJWZWhpY3VsbygkaW5wdXQ6IElucHV0VmVoaWN1bG8pIHtcclxuICAgICAgICBhZ3JlZ2FyVmVoaWN1bG8oaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEFncmVnYXJWZWhpY3VsbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FncmVnYXJdID0gdXNlTXV0YXRpb24oYWdyZWdhclZlaGljdWxvKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gdXNlRm9ybWlrKHtcclxuICAgICAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgICAgICAgIHBsYWNhOiBcIlwiLFxyXG4gICAgICAgICAgICB0aXBvOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYTogWXVwLm9iamVjdCh7XHJcbiAgICAgICAgICAgIHBsYWNhOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJMYSBwbGFjYSBlcyByZXF1ZXJpZGFcIiksXHJcbiAgICAgICAgICAgIHRpcG86IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkVsIHRpcG8gZGUgdmVoaWN1bG8gZXMgcmVxdWVyaWRvXCIpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyAodmFscykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IGFncmVnYXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogdmFscyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldEZvcm0oKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIGVycm9ycywgaGFuZGxlQmx1ciB9ID0gZm9ybTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMiBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1tZFwiPlJlZ2lzdHJhciBWZWhpY3VsbzwvaDM+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlbiBhYnNvbHV0ZSBiZy1vcGFjaXR5LTQwIGJnLWJsYWNrIHRvcC0wIGxlZnQtMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIHB4LTUgYmctd2hpdGUgcm91bmRlZC1tZCBwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmdyZXNhciBhIEVzdGFjaW9uYW1pZW50b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LTJ4bCByaWdodC0wIC10b3AtMyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGUgYmxvY2sgdy1mdWxsIHB5LTIgcHgtMyBzbTp0ZXh0LXNtIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLW1kIHRleHQtYmFzZSBib3JkZXIgb3V0bGluZS1ub25lIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxhY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGxhY2F9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGlwb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBibG9jayB3LWZ1bGwgcHktMiBweC0zIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGJvcmRlciBvdXRsaW5lLW5vbmUgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lIFRpcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGlwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWNjaW9uZSBUaXBvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBUlJPXCI+Q2Fycm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTU9UT1wiPk1vdG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJJbmdyZXNhciBWZWhpY3Vsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIGJnLWdyYXktODAwIG14LWF1dG8gdGV4dC13aGl0ZSByb3VuZGVkLW1kIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFncmVnYXJWZWhpY3VsbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==