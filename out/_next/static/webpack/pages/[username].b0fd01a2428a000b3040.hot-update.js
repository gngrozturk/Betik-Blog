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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3VzZXJuYW1lXS5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlRGV0YWlsIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiY3JlYXRlZF9ieSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwic3R5bGVzIiwiY29udGVudENlbnRlciIsInNsaWNlIiwidGl0bGVDZW50ZXIiLCJzbHVnIiwidGl0bGUiLCJpZCIsImNhcmRHZW5lcmFsIiwiY2FyZEltZyIsImJhbm5lciIsIm5hbWUiLCJjYXJkVGl0bGUiLCJNb21lbnQiLCJkYXRlIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDbkMsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLFdBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxPQUFPLENBQUNDLFVBQVIsQ0FBbUJDLFNBQW5CLEdBQStCLEdBQS9CLEdBQXFDRixPQUFPLENBQUNDLFVBQVIsQ0FBbUJFLFFBRDNELENBRFk7QUFBQSxHQUFiLENBREgsQ0FERixFQVFFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUVDLDJEQUFNLENBQUNDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsUUFBUSxDQUFDUSxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQlAsR0FBckIsQ0FBeUIsVUFBQ0MsT0FBRDtBQUFBLFdBQ3hCO0FBQUksZUFBUyxFQUFFSSwyREFBTSxDQUFDRyxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dQLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQkMsU0FBbkIsR0FBK0IsR0FBL0IsR0FBcUNGLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQkUsUUFEM0QsQ0FEd0I7QUFBQSxHQUF6QixDQURILENBREYsRUFRRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLFdBQ1osTUFBQywyREFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQVksUUFBRSxFQUFFLENBQWhCO0FBQW1CLFFBQUUsRUFBRSxDQUF2QjtBQUEwQixlQUFTLEVBQUMsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFDRSxVQUFJLEVBQUMsaUJBRFA7QUFFRSxRQUFFLHFCQUFjUSwyQ0FBSSxDQUFDUixPQUFPLENBQUNTLEtBQVQsQ0FBbEIsY0FBcUNULE9BQU8sQ0FBQ1UsRUFBN0MsQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsNERBQUQ7QUFBTSxTQUFHLEVBQUVWLE9BQU8sQ0FBQ1UsRUFBbkI7QUFBdUIsZUFBUyxFQUFFTiwyREFBTSxDQUFDTyxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0REFBRCxDQUFNLEdBQU47QUFDRSxlQUFTLEVBQUVQLDJEQUFNLENBQUNRLE9BRHBCO0FBRUUsYUFBTyxFQUFDLEtBRlY7QUFHRSxTQUFHLEVBQUVaLE9BQU8sQ0FBQ2EsTUFBUixDQUFlQyxJQUh0QjtBQUlFLFNBQUcsRUFBRWQsT0FBTyxDQUFDUyxLQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU9FLE1BQUMsNERBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBRUwsMkRBQU0sQ0FBQ1csU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFrQ2YsT0FBTyxDQUFDUyxLQUExQyxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVCxPQUFPLENBQUNDLFVBQVIsQ0FBbUJDLFNBQW5CLEdBQ0MsR0FERCxHQUVDRixPQUFPLENBQUNDLFVBQVIsQ0FBbUJFLFFBSHZCLENBSEYsQ0FQRixFQWdCRSxNQUFDLDREQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxlQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBTSxjQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUMrQixHQUQvQixFQUVHYSw2Q0FBTSxDQUFDaEIsT0FBTyxDQUFDaUIsSUFBVCxDQUFOLENBQXFCQyxNQUFyQixDQUE0QixZQUE1QixDQUZILENBREYsQ0FoQkYsQ0FERixDQUpGLENBREYsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQVJGLENBUkYsQ0FERjtBQXdERDs7S0F6RFFyQixhOztBQTJGTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW3VzZXJuYW1lXS5iMGZkMDFhMjQyOGEwMDBiMzA0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB1bmZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHNsdWcgZnJvbSBcInNsdWdcIjtcclxuaW1wb3J0IHFzIGZyb20gXCJxc1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9DYXJkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdXNlcm5hbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZnVuY3Rpb24gQXJ0aWNsZURldGFpbCh7IGFydGljbGVzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICB7YXJ0aWNsZS5jcmVhdGVkX2J5LmZpcnN0bmFtZSArIFwiIFwiICsgYXJ0aWNsZS5jcmVhdGVkX2J5Lmxhc3RuYW1lfVxyXG4gICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm15LTVcIj5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDZW50ZXJ9PlxyXG4gICAgICAgICAge2FydGljbGVzLnNsaWNlKDAsIDEpLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDZW50ZXJ9PlxyXG4gICAgICAgICAgICAgIHthcnRpY2xlLmNyZWF0ZWRfYnkuZmlyc3RuYW1lICsgXCIgXCIgKyBhcnRpY2xlLmNyZWF0ZWRfYnkubGFzdG5hbWV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8Q29sIHNtPXszfSBtZD17Nn0gbGc9ezN9IGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hcnRpY2xlL1tzbHVnXVwiXHJcbiAgICAgICAgICAgICAgICBhcz17YC9hcnRpY2xlLyR7c2x1ZyhhcnRpY2xlLnRpdGxlKX0tJHthcnRpY2xlLmlkfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2FydGljbGUuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRHZW5lcmFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRJbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5iYW5uZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGxlfT57YXJ0aWNsZS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmNyZWF0ZWRfYnkuZmlyc3RuYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5jcmVhdGVkX2J5Lmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jbG9ja1wiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtNb21lbnQoYXJ0aWNsZS5kYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB1bmZldGNoKFxyXG4gICAgXCJodHRwczovL2JldGlrYmxvZy5oZXJva3VhcHAuY29tL2FydGljbGVzP19zb3J0PWNyZWF0ZWRfYXQ6REVTQ1wiXHJcbiAgKTtcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IGFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICByZXR1cm4geyBwYXJhbXM6IHsgdXNlcm5hbWU6IGAke2FydGljbGUuY3JlYXRlZF9ieS51c2VybmFtZX1gIH0gfTtcclxuICAgIH0pLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgdXNlcm5hbWUgPSBwYXJhbXMudXNlcm5hbWU7XHJcbiAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgX3doZXJlOiBbeyBcImNyZWF0ZWRfYnkudXNlcm5hbWVcIjogdXNlcm5hbWUgfV0sXHJcbiAgICBfc29ydDogXCJjcmVhdGVkX2F0OkRFU0NcIixcclxuICB9KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgdW5mZXRjaChcclxuICAgIGBodHRwczovL2JldGlrYmxvZy5oZXJva3VhcHAuY29tL2FydGljbGVzPyR7cXVlcnl9YFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFydGljbGVzID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBhcnRpY2xlcyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZURldGFpbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==