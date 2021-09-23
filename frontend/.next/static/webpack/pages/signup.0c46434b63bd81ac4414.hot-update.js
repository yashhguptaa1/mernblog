"use strict";
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signup": function() { return /* binding */ signup; },
/* harmony export */   "signin": function() { return /* binding */ signin; }
/* harmony export */ });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var signup = function signup(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__.API, "/signup"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var signin = function signin(user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__.API, "/signin"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjBjNDY0MzRiNjNiZDgxYWM0NDE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUM5QixTQUFPSCx1REFBSyxXQUFJQyx3Q0FBSixjQUFrQjtBQUM1QkcsSUFBQUEsTUFBTSxFQUFFLE1BRG9CO0FBRTVCQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsTUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGbUI7QUFNNUJDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWY7QUFOc0IsR0FBbEIsQ0FBTCxDQVFKTyxJQVJJLENBUUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FWSSxXQVdFLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FYRixDQUFQO0FBWUQsQ0FiTTtBQWVBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNiLElBQUQsRUFBVTtBQUM5QixTQUFPSCx1REFBSyxXQUFJQyx3Q0FBSixjQUFrQjtBQUM1QkcsSUFBQUEsTUFBTSxFQUFFLE1BRG9CO0FBRTVCQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsTUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGbUI7QUFNNUJDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWY7QUFOc0IsR0FBbEIsQ0FBTCxDQVFKTyxJQVJJLENBUUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsR0FWSSxXQVdFLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FYRixDQUFQO0FBWUQsQ0FiTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hY3Rpb25zL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBzaWdudXAgPSAodXNlcikgPT4ge1xuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWdudXBgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2lnbmluID0gKHVzZXIpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbmluYCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcbiJdLCJuYW1lcyI6WyJmZXRjaCIsIkFQSSIsInNpZ251cCIsInVzZXIiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ25pbiJdLCJzb3VyY2VSb290IjoiIn0=