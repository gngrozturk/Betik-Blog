webpackHotUpdate_N_E("pages/misafiryazarlar",{

/***/ "./pages/misafiryazarlar.js":
/*!**********************************!*\
  !*** ./pages/misafiryazarlar.js ***!
  \**********************************/
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
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _username_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./username.module.css */ "./pages/username.module.css");
/* harmony import */ var _username_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_username_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Gungor\\Desktop\\mark2\\pages\\misafiryazarlar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function HomePage(_ref) {
  var _this = this;

  var guestarticles = _ref.guestarticles;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Misafir Yazarlar"), __jsx("meta", {
    name: "description",
    content: "Yazd\u0131\u011F\u0131n\u0131z yaz\u0131lar\u0131 betikblog@gmail.com e-posta adresine g\xF6nderdi\u011Finiz takdirde edit\xF6rlerimizce incelenip sizlere gereken geri d\xF6n\xFC\u015Fler sa\u011Fland\u0131ktan sonra yaz\u0131n\u0131z\u0131n sizin de onaylad\u0131\u011F\u0131n\u0131z son halini www.betikblog.com adresinde yay\u0131nl\u0131yoruz !",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: _username_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.pageGeneral,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: _username_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.contentCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: _username_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.titleCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Sizden Gelenler")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, guestarticles.map(function (guestarticle) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sm: 3,
      md: 6,
      lg: 3,
      className: "my-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/misafirblog/[guestslug]",
      as: "/misafirblog/".concat(slug__WEBPACK_IMPORTED_MODULE_4___default()(guestarticle.guesttitle), "-").concat(guestarticle.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.links,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: guestarticle.id,
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.cardGeneral,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Img, {
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.cardImg,
      variant: "top",
      src: guestarticle.guestbanner.name,
      alt: guestarticle.guesttitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, __jsx("h2", {
      className: _username_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.cardTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 23
      }
    }, guestarticle.guesttitle), __jsx("br", {
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
    }, guestarticle.guestname)), __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_6__["default"].Footer, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx("small", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 23
      }
    }, __jsx("i", {
      "class": "far fa-clock",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }), " ", moment__WEBPACK_IMPORTED_MODULE_9___default()(guestarticle.guestdate).format("DD.MM.YYYY")))))));
  }))));
}

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWlzYWZpcnlhemFybGFyLmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiZ3Vlc3RhcnRpY2xlcyIsInN0eWxlcyIsInBhZ2VHZW5lcmFsIiwiY29udGVudENlbnRlciIsInRpdGxlQ2VudGVyIiwibWFwIiwiZ3Vlc3RhcnRpY2xlIiwic2x1ZyIsImd1ZXN0dGl0bGUiLCJpZCIsImxpbmtzIiwiY2FyZEdlbmVyYWwiLCJjYXJkSW1nIiwiZ3Vlc3RiYW5uZXIiLCJuYW1lIiwiY2FyZFRpdGxlIiwiZ3Vlc3RuYW1lIiwiTW9tZW50IiwiZ3Vlc3RkYXRlIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBcUM7QUFBQTs7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCO0FBQ25DLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxXQUFPLEVBQUMsOFZBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFTRSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFFQywyREFBTSxDQUFDQyxXQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBRUQsMkRBQU0sQ0FBQ0UsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRiwyREFBTSxDQUFDRyxXQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBREYsRUFJRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osYUFBYSxDQUFDSyxHQUFkLENBQWtCLFVBQUNDLFlBQUQ7QUFBQSxXQUNqQixNQUFDLDJEQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBWSxRQUFFLEVBQUUsQ0FBaEI7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQTBCLGVBQVMsRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUNFLFVBQUksRUFBQywwQkFEUDtBQUVFLFFBQUUseUJBQWtCQywyQ0FBSSxDQUFDRCxZQUFZLENBQUNFLFVBQWQsQ0FBdEIsY0FDQUYsWUFBWSxDQUFDRyxFQURiLENBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU1FO0FBQUcsZUFBUyxFQUFFUiwyREFBTSxDQUFDUyxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0REFBRDtBQUFNLFNBQUcsRUFBRUosWUFBWSxDQUFDRyxFQUF4QjtBQUE0QixlQUFTLEVBQUVSLDJEQUFNLENBQUNVLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFELENBQU0sR0FBTjtBQUNFLGVBQVMsRUFBRVYsMkRBQU0sQ0FBQ1csT0FEcEI7QUFFRSxhQUFPLEVBQUMsS0FGVjtBQUdFLFNBQUcsRUFBRU4sWUFBWSxDQUFDTyxXQUFiLENBQXlCQyxJQUhoQztBQUlFLFNBQUcsRUFBRVIsWUFBWSxDQUFDRSxVQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFPRSxNQUFDLDREQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUVQLDJEQUFNLENBQUNjLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1QsWUFBWSxDQUFDRSxVQURoQixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRixZQUFZLENBQUNVLFNBQWxCLENBTEYsQ0FQRixFQWNFLE1BQUMsNERBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFNLGNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBQytCLEdBRC9CLEVBRUdDLDZDQUFNLENBQUNYLFlBQVksQ0FBQ1ksU0FBZCxDQUFOLENBQStCQyxNQUEvQixDQUFzQyxZQUF0QyxDQUZILENBREYsQ0FkRixDQURGLENBTkYsQ0FERixDQURpQjtBQUFBLEdBQWxCLENBREgsQ0FKRixDQVRGLENBREY7QUFxREQ7O0tBdERRcEIsUTs7QUFxRU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21pc2FmaXJ5YXphcmxhci5lMWFkZjZjYjk2NTE5YjNmYTc4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB1bmZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHNsdWcgZnJvbSBcInNsdWdcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiO1xyXG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdXNlcm5hbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHsgZ3Vlc3RhcnRpY2xlcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5NaXNhZmlyIFlhemFybGFyPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJZYXpkxLHEn8SxbsSxeiB5YXrEsWxhcsSxIGJldGlrYmxvZ0BnbWFpbC5jb20gZS1wb3N0YSBhZHJlc2luZSBnw7ZuZGVyZGnEn2luaXogdGFrZGlyZGUgZWRpdMO2cmxlcmltaXpjZSBpbmNlbGVuaXAgc2l6bGVyZSBnZXJla2VuIGdlcmkgZMO2bsO8xZ9sZXIgc2HEn2xhbmTEsWt0YW4gc29ucmEgeWF6xLFuxLF6xLFuIHNpemluIGRlIG9uYXlsYWTEscSfxLFuxLF6IHNvbiBoYWxpbmkgd3d3LmJldGlrYmxvZy5jb20gYWRyZXNpbmRlIHlhecSxbmzEsXlvcnV6ICFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUdlbmVyYWx9PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENlbnRlcn0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVDZW50ZXJ9PlNpemRlbiBHZWxlbmxlcjwvaDE+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIHtndWVzdGFydGljbGVzLm1hcCgoZ3Vlc3RhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICAgIDxDb2wgc209ezN9IG1kPXs2fSBsZz17M30gY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL21pc2FmaXJibG9nL1tndWVzdHNsdWddXCJcclxuICAgICAgICAgICAgICAgIGFzPXtgL21pc2FmaXJibG9nLyR7c2x1ZyhndWVzdGFydGljbGUuZ3Vlc3R0aXRsZSl9LSR7XHJcbiAgICAgICAgICAgICAgICAgIGd1ZXN0YXJ0aWNsZS5pZFxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2d1ZXN0YXJ0aWNsZS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEdlbmVyYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEltZ31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtndWVzdGFydGljbGUuZ3Vlc3RiYW5uZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17Z3Vlc3RhcnRpY2xlLmd1ZXN0dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtndWVzdGFydGljbGUuZ3Vlc3R0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNT57Z3Vlc3RhcnRpY2xlLmd1ZXN0bmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNsb2NrXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge01vbWVudChndWVzdGFydGljbGUuZ3Vlc3RkYXRlKS5mb3JtYXQoXCJERC5NTS5ZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgdW5mZXRjaChcclxuICAgIFwiaHR0cHM6Ly9iZXRpa2Jsb2cuaGVyb2t1YXBwLmNvbS9ndWVzdGFydGljbGVzP19zb3J0PWNyZWF0ZWRfYXQ6REVTQ1wiXHJcbiAgKTtcclxuICBjb25zdCBndWVzdGFydGljbGVzID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBndWVzdGFydGljbGVzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==