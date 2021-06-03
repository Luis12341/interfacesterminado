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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\AgregarVehiculo\\index.js",
    _this = undefined,
    _s = $RefreshSig$();





var AgregarVehiculo = function AgregarVehiculo() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      vehiculo = _useState[0],
      setVehiculo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showModal = _useState3[0],
      setShowModal = _useState3[1];

  var form = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
    initialValues: {
      placa: "",
      tipo: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_5__.object({
      placa: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("La placa es requerida"),
      tipo: yup__WEBPACK_IMPORTED_MODULE_5__.string().isValid('CARRO').isValid('MOTO').required("El tipo de vehiculo es requerido")
    }),
    onSubmit: function () {
      var _onSubmit = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(vals) {
        return C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(vals);
                console.log(errors);

              case 2:
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
        lineNumber: 34,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
            lineNumber: 40,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            onClick: function onClick() {
              return setShowModal(false);
            },
            className: "absolute text-2xl right-0 -top-3 cursor-pointer",
            children: "x"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
            lineNumber: 51,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            value: values.tipo,
            className: "bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3",
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: "Seleccione Tipo",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "",
              disabled: true,
              children: "Seleccione Tipo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "CARRO",
              children: "Carro"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: "MOTO",
              children: "Moto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "submit",
            value: "Ingresar Vehiculo",
            className: "px-3 py-2 bg-gray-800 mx-auto text-white rounded-md block"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_s(AgregarVehiculo, "tN6AwqsPO5LwJZdpLXhSpjy1iWs=", false, function () {
  return [formik__WEBPACK_IMPORTED_MODULE_4__.useFormik];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZ3JlZ2FyVmVoaWN1bG8vaW5kZXguanMiXSwibmFtZXMiOlsiQWdyZWdhclZlaGljdWxvIiwidXNlU3RhdGUiLCJ2ZWhpY3VsbyIsInNldFZlaGljdWxvIiwiZXJyb3IiLCJzZXRFcnJvciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImZvcm0iLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwicGxhY2EiLCJ0aXBvIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInJlcXVpcmVkIiwiaXNWYWxpZCIsIm9uU3VibWl0IiwidmFscyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvcnMiLCJ2YWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNNQywrQ0FBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQ25CQyxRQURtQjtBQUFBLE1BQ1RDLFdBRFM7O0FBQUEsbUJBRUFGLCtDQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFbkJHLEtBRm1CO0FBQUEsTUFFWkMsUUFGWTs7QUFBQSxtQkFHUUosK0NBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHbkJLLFNBSG1CO0FBQUEsTUFHUkMsWUFIUTs7QUFLMUIsTUFBTUMsSUFBSSxHQUFHQyxpREFBUyxDQUFDO0FBQ25CQyxpQkFBYSxFQUFFO0FBQ1hDLFdBQUssRUFBRSxFQURJO0FBRVhDLFVBQUksRUFBRTtBQUZLLEtBREk7QUFLbkJDLG9CQUFnQixFQUFFQyx1Q0FBQSxDQUFXO0FBQ3pCSCxXQUFLLEVBQUVHLHVDQUFBLEdBQWFDLFFBQWIsQ0FBc0IsdUJBQXRCLENBRGtCO0FBRXpCSCxVQUFJLEVBQUVFLHVDQUFBLEdBQWFF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QTtBQUFBLG1CQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdURILENBOUVEOztHQUFNekIsZTtVQUtXUyw2Qzs7O0tBTFhULGU7QUFnRk4sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVoaWN1bG9zLmJkZDMyMDc5NzkyOWUzYjIzNGFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcblxyXG5jb25zdCBBZ3JlZ2FyVmVoaWN1bG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmVoaWN1bG8sIHNldFZlaGljdWxvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IHVzZUZvcm1payh7XHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgICBwbGFjYTogXCJcIixcclxuICAgICAgICAgICAgdGlwbzogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE6IFl1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgICBwbGFjYTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiTGEgcGxhY2EgZXMgcmVxdWVyaWRhXCIpLFxyXG4gICAgICAgICAgICB0aXBvOiBZdXAuc3RyaW5nKCkuaXNWYWxpZCgnQ0FSUk8nKS5pc1ZhbGlkKCdNT1RPJylcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZChcIkVsIHRpcG8gZGUgdmVoaWN1bG8gZXMgcmVxdWVyaWRvXCIpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyAodmFscykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHZhbHVlcywgaGFuZGxlU3VibWl0LCBoYW5kbGVDaGFuZ2UsIGVycm9ycywgaGFuZGxlQmx1ciB9ID0gZm9ybTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMiBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1tZFwiPlJlZ2lzdHJhciBWZWhpY3VsbzwvaDM+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlbiBhYnNvbHV0ZSBiZy1vcGFjaXR5LTQwIGJnLWJsYWNrIHRvcC0wIGxlZnQtMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgdy1mdWxsIHB4LTUgYmctd2hpdGUgcm91bmRlZC1tZCBwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmdyZXNhciBhIEVzdGFjaW9uYW1pZW50b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LTJ4bCByaWdodC0wIC10b3AtMyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwbGFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwbGFjYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGUgYmxvY2sgdy1mdWxsIHB5LTIgcHgtMyBzbTp0ZXh0LXNtIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLW1kIHRleHQtYmFzZSBib3JkZXIgb3V0bGluZS1ub25lIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGxhY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGxhY2F9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudGlwb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBibG9jayB3LWZ1bGwgcHktMiBweC0zIHNtOnRleHQtc20gYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGJvcmRlciBvdXRsaW5lLW5vbmUgbWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25lIFRpcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5TZWxlY2Npb25lIFRpcG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FSUk9cIj5DYXJybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNT1RPXCI+TW90bzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkluZ3Jlc2FyIFZlaGljdWxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTIgYmctZ3JheS04MDAgbXgtYXV0byB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWdyZWdhclZlaGljdWxvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9