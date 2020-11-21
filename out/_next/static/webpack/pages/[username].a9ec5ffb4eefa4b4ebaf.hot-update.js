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
      href: "/blog/[slug]",
      as: "/blog/".concat(slug__WEBPACK_IMPORTED_MODULE_4___default()(article.title), "-").concat(article.id),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJuYW1lXS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlRGV0YWlsIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiY3JlYXRlZF9ieSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwic3R5bGVzIiwiY29udGVudENlbnRlciIsInNsaWNlIiwidGl0bGVDZW50ZXIiLCJzbHVnIiwidGl0bGUiLCJpZCIsImxpbmtzIiwiY2FyZEdlbmVyYWwiLCJjYXJkSW1nIiwiYmFubmVyIiwibmFtZSIsImNhcmRUaXRsZSIsIk1vbWVudCIsImRhdGUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUFxQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUNuQyxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsV0FDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dBLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQkMsU0FBbkIsR0FBK0IsR0FBL0IsR0FBcUNGLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQkUsUUFEM0QsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQURGLEVBUUUsTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHVuZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgc2x1ZyBmcm9tIFwic2x1Z1wiO1xyXG5pbXBvcnQgcXMgZnJvbSBcInFzXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi91c2VybmFtZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5mdW5jdGlvbiBBcnRpY2xlRGV0YWlsKHsgYXJ0aWNsZXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICAgIHthcnRpY2xlLmNyZWF0ZWRfYnkuZmlyc3RuYW1lICsgXCIgXCIgKyBhcnRpY2xlLmNyZWF0ZWRfYnkubGFzdG5hbWV9XHJcbiAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXktNVwiPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENlbnRlcn0+XHJcbiAgICAgICAgICB7YXJ0aWNsZXMuc2xpY2UoMCwgMSkubWFwKChhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNlbnRlcn0+XHJcbiAgICAgICAgICAgICAge2FydGljbGUuY3JlYXRlZF9ieS5maXJzdG5hbWUgKyBcIiBcIiArIGFydGljbGUuY3JlYXRlZF9ieS5sYXN0bmFtZX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICAgIDxDb2wgc209ezN9IG1kPXs2fSBsZz17M30gY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2Jsb2cvW3NsdWddXCJcclxuICAgICAgICAgICAgICAgIGFzPXtgL2Jsb2cvJHtzbHVnKGFydGljbGUudGl0bGUpfS0ke2FydGljbGUuaWR9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17YXJ0aWNsZS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEdlbmVyYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEltZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXthcnRpY2xlLmJhbm5lci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0bGV9PnthcnRpY2xlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuY3JlYXRlZF9ieS5maXJzdG5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmNyZWF0ZWRfYnkubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNsb2NrXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge01vbWVudChhcnRpY2xlLmRhdGUpLmZvcm1hdChcIkRELk1NLllZWVlcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHVuZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vYmV0aWtibG9nLmhlcm9rdWFwcC5jb20vYXJ0aWNsZXM/X3NvcnQ9Y3JlYXRlZF9hdDpERVNDXCJcclxuICApO1xyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IHBhcmFtczogeyB1c2VybmFtZTogYCR7YXJ0aWNsZS5jcmVhdGVkX2J5LnVzZXJuYW1lfWAgfSB9O1xyXG4gICAgfSksXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCB1c2VybmFtZSA9IHBhcmFtcy51c2VybmFtZTtcclxuICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICBfd2hlcmU6IFt7IFwiY3JlYXRlZF9ieS51c2VybmFtZVwiOiB1c2VybmFtZSB9XSxcclxuICAgIF9zb3J0OiBcImNyZWF0ZWRfYXQ6REVTQ1wiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB1bmZldGNoKFxyXG4gICAgYGh0dHBzOi8vYmV0aWtibG9nLmhlcm9rdWFwcC5jb20vYXJ0aWNsZXM/JHtxdWVyeX1gXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFydGljbGVzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlRGV0YWlsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9