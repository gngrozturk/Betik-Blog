webpackHotUpdate_N_E("pages/[username]",{

/***/ "./pages/[username].js":
/*!*****************************!*\
  !*** ./pages/[username].js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slug */ "./node_modules/slug/slug.js");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _username_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./username.module.css */ "./pages/username.module.css");
/* harmony import */ var _username_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_username_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Gungor\\Desktop\\mark2\\pages\\[username].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function ArticleDetail(_ref) {
  var _this = this;

  var articles = _ref.articles;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, articles.map(function (article) {
    return __jsx("title", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, article.created_by.firstname + " " + article.created_by.lastname);
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "my-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: _username_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contentCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, articles.slice(0, 1).map(function (article) {
    return __jsx("h1", {
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.titleCenter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, article.created_by.firstname + " " + article.created_by.lastname);
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, articles.map(function (article) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sm: 3,
      md: 6,
      lg: 3,
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/article/[slug]",
      as: "/article/".concat(slug__WEBPACK_IMPORTED_MODULE_4___default()(article.title), "-").concat(article.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.links,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: article.id,
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cardGeneral,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Img, {
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cardImg,
      variant: "top",
      src: article.banner.name,
      alt: article.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx("h2", {
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.cardTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 23
      }
    }, article.title), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 23
      }
    }), __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 23
      }
    }, article.created_by.firstname + " " + article.created_by.lastname)), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, __jsx("i", {
      "class": "far fa-clock",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }), " ", moment__WEBPACK_IMPORTED_MODULE_9___default()(article.date).format("DD.MM.YYYY")))))));
  }))));
}

_c = ArticleDetail;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ArticleDetail);

var _c;

$RefreshReg$(_c, "ArticleDetail");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJuYW1lXS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlRGV0YWlsIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiY3JlYXRlZF9ieSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwic3R5bGVzIiwiY29udGVudENlbnRlciIsInNsaWNlIiwidGl0bGVDZW50ZXIiLCJzbHVnIiwidGl0bGUiLCJpZCIsImxpbmtzIiwiY2FyZEdlbmVyYWwiLCJjYXJkSW1nIiwiYmFubmVyIiwibmFtZSIsImNhcmRUaXRsZSIsIk1vbWVudCIsImRhdGUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUFxQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUNuQyxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsV0FDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dBLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQkMsU0FBbkIsR0FBK0IsR0FBL0IsR0FBcUNGLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQkUsUUFEM0QsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQURGLEVBUUUsTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgdW5mZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBzbHVnIGZyb20gXCJzbHVnXCI7XHJcbmltcG9ydCBxcyBmcm9tIFwicXNcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3VzZXJuYW1lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmZ1bmN0aW9uIEFydGljbGVEZXRhaWwoeyBhcnRpY2xlcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAge2FydGljbGUuY3JlYXRlZF9ieS5maXJzdG5hbWUgKyBcIiBcIiArIGFydGljbGUuY3JlYXRlZF9ieS5sYXN0bmFtZX1cclxuICAgICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJteS01XCI+XHJcbiAgICAgICAgPFJvdyBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q2VudGVyfT5cclxuICAgICAgICAgIHthcnRpY2xlcy5zbGljZSgwLCAxKS5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ2VudGVyfT5cclxuICAgICAgICAgICAgICB7YXJ0aWNsZS5jcmVhdGVkX2J5LmZpcnN0bmFtZSArIFwiIFwiICsgYXJ0aWNsZS5jcmVhdGVkX2J5Lmxhc3RuYW1lfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcclxuICAgICAgICAgICAgPENvbCBzbT17M30gbWQ9ezZ9IGxnPXszfSBjbGFzc05hbWU9XCJteS0yXCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYXJ0aWNsZS9bc2x1Z11cIlxyXG4gICAgICAgICAgICAgICAgYXM9e2AvYXJ0aWNsZS8ke3NsdWcoYXJ0aWNsZS50aXRsZSl9LSR7YXJ0aWNsZS5pZH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzfT5cclxuICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXthcnRpY2xlLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkR2VuZXJhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUuYmFubmVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5jcmVhdGVkX2J5LmZpcnN0bmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuY3JlYXRlZF9ieS5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2xvY2tcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7TW9tZW50KGFydGljbGUuZGF0ZSkuZm9ybWF0KFwiREQuTU0uWVlZWVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgdW5mZXRjaChcclxuICAgIFwiaHR0cHM6Ly9iZXRpa2Jsb2cuaGVyb2t1YXBwLmNvbS9hcnRpY2xlcz9fc29ydD1jcmVhdGVkX2F0OkRFU0NcIlxyXG4gICk7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBhcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgcmV0dXJuIHsgcGFyYW1zOiB7IHVzZXJuYW1lOiBgJHthcnRpY2xlLmNyZWF0ZWRfYnkudXNlcm5hbWV9YCB9IH07XHJcbiAgICB9KSxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHVzZXJuYW1lID0gcGFyYW1zLnVzZXJuYW1lO1xyXG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgIF93aGVyZTogW3sgXCJjcmVhdGVkX2J5LnVzZXJuYW1lXCI6IHVzZXJuYW1lIH1dLFxyXG4gICAgX3NvcnQ6IFwiY3JlYXRlZF9hdDpERVNDXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHVuZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9iZXRpa2Jsb2cuaGVyb2t1YXBwLmNvbS9hcnRpY2xlcz8ke3F1ZXJ5fWBcclxuICApO1xyXG5cclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYXJ0aWNsZXMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVEZXRhaWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=