self["webpackHotUpdate_N_E"]("pages/vehiculos/[id]",{

/***/ "./components/TableHistorial/index.js":
/*!********************************************!*\
  !*** ./components/TableHistorial/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Historial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Historial */ "./components/TableHistorial/Historial.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Desarrollo-2\\Desktop\\caso de estudio\\frontend\\components\\TableHistorial\\index.js",
    _this = undefined;



var clasesThead = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

var TableHistorial = function TableHistorial(_ref) {
  var historial = _ref.historial;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
    className: "w-full divide-y divide-gray-200 shadow-lg mx-5 mt-3",
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          scope: "col",
          className: clasesThead,
          children: "Cedula"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          scope: "col",
          className: clasesThead,
          children: "Entrada"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          scope: "col",
          className: clasesThead,
          children: "Salida"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
      className: "bg-white divide-y divide-gray-200",
      children: historial.map(function (es) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Historial__WEBPACK_IMPORTED_MODULE_2__.default, {
          id: es.id,
          horaSalida: es.horaSalida,
          cedula: es.cedula,
          horaEntrada: es.horaEntrada,
          nombre: es.nombre
        }, es.id, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_c = TableHistorial;
/* harmony default export */ __webpack_exports__["default"] = (TableHistorial);

var _c;

$RefreshReg$(_c, "TableHistorial");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJsZUhpc3RvcmlhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJjbGFzZXNUaGVhZCIsIlRhYmxlSGlzdG9yaWFsIiwiaGlzdG9yaWFsIiwibWFwIiwiZXMiLCJpZCIsImhvcmFTYWxpZGEiLCJjZWR1bGEiLCJob3JhRW50cmFkYSIsIm5vbWJyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FDYixnRkFESjs7QUFHQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWlCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQ3BDLHNCQUNJO0FBQU8sYUFBUyxFQUFDLHFEQUFqQjtBQUFBLDRCQUNJO0FBQU8sZUFBUyxFQUFDLFlBQWpCO0FBQUEsNkJBQ0k7QUFBQSxnQ0FDSTtBQUFJLGVBQUssRUFBQyxLQUFWO0FBQWdCLG1CQUFTLEVBQUVGLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSSxlQUFLLEVBQUMsS0FBVjtBQUFnQixtQkFBUyxFQUFFQSxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JO0FBQUksZUFBSyxFQUFDLEtBQVY7QUFBZ0IsbUJBQVMsRUFBRUEsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFVSTtBQUFJLGVBQUssRUFBQyxLQUFWO0FBQWdCLG1CQUFTLEVBQUVBLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQWlCSTtBQUFPLGVBQVMsRUFBQyxtQ0FBakI7QUFBQSxnQkFDS0UsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQUMsRUFBRTtBQUFBLDRCQUNiLDhEQUFDLCtDQUFEO0FBRUEsWUFBRSxFQUFFQSxFQUFFLENBQUNDLEVBRlA7QUFHQSxvQkFBVSxFQUFFRCxFQUFFLENBQUNFLFVBSGY7QUFJQSxnQkFBTSxFQUFFRixFQUFFLENBQUNHLE1BSlg7QUFLQSxxQkFBVyxFQUFFSCxFQUFFLENBQUNJLFdBTGhCO0FBTUEsZ0JBQU0sRUFBRUosRUFBRSxDQUFDSztBQU5YLFdBQ0tMLEVBQUUsQ0FBQ0MsRUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBakNEOztLQUFNSixjO0FBbUNOLCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlaGljdWxvcy9baWRdLjliNmQ3Yzk5ODdhNjBlZGRmYTUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIaXN0b3JpYWwgZnJvbSBcIi4vSGlzdG9yaWFsXCI7XHJcblxyXG5jb25zdCBjbGFzZXNUaGVhZCA9XHJcbiAgICBcInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiO1xyXG5cclxuY29uc3QgVGFibGVIaXN0b3JpYWwgPSAoe2hpc3RvcmlhbH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgc2hhZG93LWxnIG14LTUgbXQtM1wiPlxyXG4gICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT17Y2xhc2VzVGhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25kdWN0b3JcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT17Y2xhc2VzVGhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDZWR1bGFcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT17Y2xhc2VzVGhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbnRyYWRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9e2NsYXNlc1RoZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2FsaWRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgIHtoaXN0b3JpYWwubWFwKGVzPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPEhpc3RvcmlhbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17ZXMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2VzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGhvcmFTYWxpZGE9e2VzLmhvcmFTYWxpZGF9XHJcbiAgICAgICAgICAgICAgICAgICAgY2VkdWxhPXtlcy5jZWR1bGF9XHJcbiAgICAgICAgICAgICAgICAgICAgaG9yYUVudHJhZGE9e2VzLmhvcmFFbnRyYWRhfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZT17ZXMubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFibGVIaXN0b3JpYWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=