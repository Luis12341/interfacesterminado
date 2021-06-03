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
                setError(_context.t0.message);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZ3JlZ2FyVmVoaWN1bG8vaW5kZXguanMiXSwibmFtZXMiOlsiYWdyZWdhclZlaGljdWxvIiwiZ3FsIiwiQWdyZWdhclZlaGljdWxvIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlTXV0YXRpb24iLCJhZ3JlZ2FyIiwiZm9ybSIsInVzZUZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJwbGFjYSIsInRpcG8iLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwicmVxdWlyZWQiLCJvblN1Ym1pdCIsInZhbHMiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsImRhdGEiLCJlcnJvcnMiLCJyZXNldEZvcm0iLCJtZXNzYWdlIiwidmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxtREFBSCxtQkFBckI7O0FBUUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0FDLCtDQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDbkJDLEtBRG1CO0FBQUEsTUFDWkMsUUFEWTs7QUFBQSxtQkFFUUYsK0NBQVEsQ0FBQyxLQUFELENBRmhCO0FBQUEsTUFFbkJHLFNBRm1CO0FBQUEsTUFFUkMsWUFGUTs7QUFBQSxxQkFHUkMsMkRBQVcsQ0FBQ1IsZUFBRCxDQUhIO0FBQUE7QUFBQSxNQUduQlMsT0FIbUI7O0FBSzFCLE1BQU1DLElBQUksR0FBR0MsaURBQVMsQ0FBQztBQUNuQkMsaUJBQWEsRUFBRTtBQUNYQyxXQUFLLEVBQUUsRUFESTtBQUVYQyxVQUFJLEVBQUU7QUFGSyxLQURJO0FBS25CQyxvQkFBZ0IsRUFBRUMsdUNB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b0NBU0k7QUFBUSxtQkFBSyxFQUFDLEVBQWQ7QUFBaUIsc0JBQVEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosZUFZSTtBQUFRLG1CQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaSixlQWFJO0FBQVEsbUJBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYSixlQTBCSTtBQUNJLGdCQUFJLEVBQUMsUUFEVDtBQUVJLGlCQUFLLEVBQUMsbUJBRlY7QUFHSSxxQkFBUyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJESCxDQTdGRDs7R0FBTTNCLGU7VUFHZ0JNLHVELEVBRUxHLDZDOzs7S0FMWFQsZTtBQStGTiwrREFBZUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZWhpY3Vsb3MuMDcxYTgxNzM4NWI0MzY0ZmFmOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5cclxuY29uc3QgYWdyZWdhclZlaGljdWxvID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gYWdyZWdhclZlaGljdWxvKCRpbnB1dDogSW5wdXRWZWhpY3Vsbykge1xyXG4gICAgICAgIGFncmVnYXJWZWhpY3VsbyhpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQWdyZWdhclZlaGljdWxvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYWdyZWdhcl0gPSB1c2VNdXRhdGlvbihhZ3JlZ2FyVmVoaWN1bG8pO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICAgICAgcGxhY2E6IFwiXCIsXHJcbiAgICAgICAgICAgIHRpcG86IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgcGxhY2E6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIkxhIHBsYWNhIGVzIHJlcXVlcmlkYVwiKSxcclxuICAgICAgICAgICAgdGlwbzogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiRWwgdGlwbyBkZSB2ZWhpY3VsbyBlcyByZXF1ZXJpZG9cIiksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgb25TdWJtaXQ6IGFzeW5jICh2YWxzKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9ycyB9ID0gYXdhaXQgYWdyZWdhcih7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB2YWxzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0Rm9ybSgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgdmFsdWVzLCBoYW5kbGVTdWJtaXQsIGhhbmRsZUNoYW5nZSwgZXJyb3JzLCBoYW5kbGVCbHVyIH0gPSBmb3JtO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IG1iLTNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS0yIGJnLWdyYXktODAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LW1kXCI+UmVnaXN0cmFyIFZlaGljdWxvPC9oMz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtzaG93TW9kYWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuIGFic29sdXRlIGJnLW9wYWNpdHktNDAgYmctYmxhY2sgdG9wLTAgbGVmdC0wIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgcHgtNSBiZy13aGl0ZSByb3VuZGVkLW1kIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZ3Jlc2FyIGEgRXN0YWNpb25hbWllbnRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtMnhsIHJpZ2h0LTAgLXRvcC0zIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBsYWNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBsYWNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBibG9jayB3LWZ1bGwgcHktMiBweC0zIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGJvcmRlciBvdXRsaW5lLW5vbmUgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQbGFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wbGFjYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy50aXBvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGZvY3VzOmJnLXdoaXRlIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgc206dGV4dC1zbSBib3JkZXItZ3JheS0xMDAgcm91bmRlZC1tZCB0ZXh0LWJhc2UgYm9yZGVyIG91dGxpbmUtbm9uZSBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjY2lvbmUgVGlwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGlwb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY2Npb25lIFRpcG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FSUk9cIj5DYXJybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNT1RPXCI+TW90bzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkluZ3Jlc2FyIFZlaGljdWxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTIgYmctZ3JheS04MDAgbXgtYXV0byB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWdyZWdhclZlaGljdWxvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9