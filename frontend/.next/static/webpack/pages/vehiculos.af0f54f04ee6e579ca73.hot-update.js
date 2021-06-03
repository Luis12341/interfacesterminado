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
      nombre: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("El nombre es requerido"),
      cedula: yup__WEBPACK_IMPORTED_MODULE_5__.string().min(8, "Esta campo admite 8 caracteres").required("La cedula es requeria")
    }),
    onSubmit: function () {
      var _onSubmit = (0,C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(vals) {
        return C_Users_Desarrollo_2_Desktop_caso_de_estudio_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(vals);

              case 1:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZ3JlZ2FyVmVoaWN1bG8vaW5kZXguanMiXSwibmFtZXMiOlsiQWdyZWdhclZlaGljdWxvIiwidXNlU3RhdGUiLCJ2ZWhpY3VsbyIsInNldFZlaGljdWxvIiwiZXJyb3IiLCJzZXRFcnJvciIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImZvcm0iLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwicGxhY2EiLCJ0aXBvIiwidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsIm5vbWJyZSIsInJlcXVpcmVkIiwiY2VkdWxhIiwibWluIiwib25TdWJtaXQiLCJ2YWxzIiwiY29uc29sZSIsImxvZyIsInZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImVycm9ycyIsImhhbmRsZUJsdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLCtDQUFRLENBQUMsSUFBRCxDQURkO0FBQUEsTUFDbkJDLFFBRG1CO0FBQUEsTUFDVEMsV0FEUzs7QUFBQSxtQkFFQUYsK0NBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVuQkcsS0FGbUI7QUFBQSxNQUVaQyxRQUZZOztBQUFBLG1CQUdRSiwrQ0FBUSxDQUFDLEtBQUQsQ0FIaEI7QUFBQSxNQUduQkssU0FIbUI7QUFBQSxNQUdSQyxZQUhROztBQUsxQixNQUFNQyxJQUFJLEdBQUdDLGlEQUFTLENBQUM7QUFDbkJDLGlCQUFhLEVBQUU7QUFDWEMsV0FBSyxFQUFFLEVBREk7QUFFWEMsVUFBSSxFQUFFO0FBRkssS0FESTtBQUtuQkMsb0JBQWdCLEVBQUVDLHVDQUFBLENBQVc7QUFDekJDLFlBQU0sRUFBRUQsdUNBQUEsR0FBYUUsUUFBYixDQUFzQix3QkFBdEIsQ0FEaUI7QUFFekJDLFlBQU0sRUFB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QTtBQUFBLGlCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVESCxDQTlFRDs7R0FBTTNCLGU7VUFLV1MsNkM7OztLQUxYVCxlO0FBZ0ZOLCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlaGljdWxvcy5hZjBmNTRmMDRlZTZlNTc5Y2E3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xyXG5cclxuY29uc3QgQWdyZWdhclZlaGljdWxvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZlaGljdWxvLCBzZXRWZWhpY3Vsb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtaWsoe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICAgICAgcGxhY2E6IFwiXCIsXHJcbiAgICAgICAgICAgIHRpcG86IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcclxuICAgICAgICAgICAgbm9tYnJlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJFbCBub21icmUgZXMgcmVxdWVyaWRvXCIpLFxyXG4gICAgICAgICAgICBjZWR1bGE6IFl1cC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLm1pbig4LCBcIkVzdGEgY2FtcG8gYWRtaXRlIDggY2FyYWN0ZXJlc1wiKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKFwiTGEgY2VkdWxhIGVzIHJlcXVlcmlhXCIpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9uU3VibWl0OiBhc3luYyAodmFscykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWxzKTtcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyB2YWx1ZXMsIGhhbmRsZVN1Ym1pdCwgaGFuZGxlQ2hhbmdlLCBlcnJvcnMsIGhhbmRsZUJsdXIgfSA9IGZvcm07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgbWItM1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIgYmctZ3JheS04MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbWRcIj5SZWdpc3RyYXIgVmVoaWN1bG88L2gzPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW4gYWJzb2x1dGUgYmctb3BhY2l0eS00MCBiZy1ibGFjayB0b3AtMCBsZWZ0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIHctZnVsbCBweC01IGJnLXdoaXRlIHJvdW5kZWQtbWQgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ncmVzYXIgYSBFc3RhY2lvbmFtaWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC0yeGwgcmlnaHQtMCAtdG9wLTMgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGxhY2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGZvY3VzOmJnLXdoaXRlIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgc206dGV4dC1zbSBib3JkZXItZ3JheS0xMDAgcm91bmRlZC1tZCB0ZXh0LWJhc2UgYm9yZGVyIG91dGxpbmUtbm9uZSBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsYWNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBsYWNhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnRpcG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGUgYmxvY2sgdy1mdWxsIHB5LTIgcHgtMyBzbTp0ZXh0LXNtIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLW1kIHRleHQtYmFzZSBib3JkZXIgb3V0bGluZS1ub25lIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWNjaW9uZSBUaXBvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+U2VsZWNjaW9uZSBUaXBvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBUlJPXCI+Q2Fycm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTU9UT1wiPk1vdG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJJbmdyZXNhciBWZWhpY3Vsb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0yIGJnLWdyYXktODAwIG14LWF1dG8gdGV4dC13aGl0ZSByb3VuZGVkLW1kIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFncmVnYXJWZWhpY3VsbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==