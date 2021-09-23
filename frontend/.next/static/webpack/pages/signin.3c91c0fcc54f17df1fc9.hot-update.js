"use strict";
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/auth/SigninComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SigninComponent.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_yashh_Desktop_Study_Projects_seoblog_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\yashh\\Desktop\\Study\\Projects\\seoblog\\frontend\\components\\auth\\SigninComponent.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_yashh_Desktop_Study_Projects_seoblog_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var SigninComponent = function SigninComponent() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    email: "ryan@gmail.com",
    password: "rrrrrr",
    error: "",
    loading: false,
    message: "",
    showForm: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var email = values.email,
      password = values.password,
      error = values.error,
      loading = values.loading,
      message = values.message,
      showForm = values.showForm;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.table({ name, email, password, error, loading, message, showForm });

    setValues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true,
      error: false
    }));
    var user = {
      email: email,
      password: password
    };
    (0,_actions_auth__WEBPACK_IMPORTED_MODULE_2__.signin)(user).then(function (data) {
      if (data.error) {
        setValues(_objectSpread(_objectSpread({}, values), {}, {
          error: data.error,
          loading: false
        }));
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
      }
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      setValues(_objectSpread(_objectSpread({}, values), {}, (0,C_Users_yashh_Desktop_Study_Projects_seoblog_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
        error: false
      }, name, e.target.value)));
    };
  };

  var showLoading = function showLoading() {
    return loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "alert alert-info",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }, _this) : "";
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this) : "";
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }, _this) : "";
  };

  var signinForm = function signinForm() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          value: email,
          onChange: handleChange("email"),
          type: "email",
          className: "form-control",
          placeholder: "Type your email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          value: password,
          onChange: handleChange("password"),
          type: "password",
          className: "form-control",
          placeholder: "Type your password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          className: "btn btn-primary",
          children: "Signin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [showError(), showLoading(), showMessage(), showForm && signinForm()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, _this);
};

_s(SigninComponent, "1mTrwEwC2db0KKsz0K25ZtRk550=");

_c = SigninComponent;
/* harmony default export */ __webpack_exports__["default"] = (SigninComponent);

var _c;

$RefreshReg$(_c, "SigninComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjNjOTFjMGZjYzU0ZjE3ZGYxZmM5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQzVCLGtCQUE0QkgsK0NBQVEsQ0FBQztBQUNuQ0ksSUFBQUEsS0FBSyxFQUFFLGdCQUQ0QjtBQUVuQ0MsSUFBQUEsUUFBUSxFQUFFLFFBRnlCO0FBR25DQyxJQUFBQSxLQUFLLEVBQUUsRUFINEI7QUFJbkNDLElBQUFBLE9BQU8sRUFBRSxLQUowQjtBQUtuQ0MsSUFBQUEsT0FBTyxFQUFFLEVBTDBCO0FBTW5DQyxJQUFBQSxRQUFRLEVBQUU7QUFOeUIsR0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQVNBLE1BQVFQLEtBQVIsR0FBK0RNLE1BQS9ELENBQVFOLEtBQVI7QUFBQSxNQUFlQyxRQUFmLEdBQStESyxNQUEvRCxDQUFlTCxRQUFmO0FBQUEsTUFBeUJDLEtBQXpCLEdBQStESSxNQUEvRCxDQUF5QkosS0FBekI7QUFBQSxNQUFnQ0MsT0FBaEMsR0FBK0RHLE1BQS9ELENBQWdDSCxPQUFoQztBQUFBLE1BQXlDQyxPQUF6QyxHQUErREUsTUFBL0QsQ0FBeUNGLE9BQXpDO0FBQUEsTUFBa0RDLFFBQWxELEdBQStEQyxNQUEvRCxDQUFrREQsUUFBbEQ7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEMEIsQ0FFMUI7O0FBQ0FILElBQUFBLFNBQVMsaUNBQU1ELE1BQU47QUFBY0gsTUFBQUEsT0FBTyxFQUFFLElBQXZCO0FBQTZCRCxNQUFBQSxLQUFLLEVBQUU7QUFBcEMsT0FBVDtBQUNBLFFBQU1TLElBQUksR0FBRztBQUFF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IndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25pbkNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduaW4gfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9hdXRoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBTaWduaW5Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6IFwicnlhbkBnbWFpbC5jb21cIixcbiAgICBwYXNzd29yZDogXCJycnJycnJcIixcbiAgICBlcnJvcjogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBcIlwiLFxuICAgIHNob3dGb3JtOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0gPSB2YWx1ZXM7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0pO1xuICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IGZhbHNlIH0pO1xuICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xuXG4gICAgc2lnbmluKHVzZXIpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2F2ZSB1c2VyIHRva2VuIHRvIGNvb2tpZVxuICAgICAgICAvLyBzYXZlIHVzZXIgaW5mbyB0byBsb2NhbHN0b3JhZ2VcbiAgICAgICAgLy8gYXV0aGVudGljYXRlIHVzZXJcbiAgICAgICAgUm91dGVyLnB1c2goYC9gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSkgPT4gKGUpID0+IHtcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBmYWxzZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+XG4gICAgbG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPkxvYWRpbmcuLi48L2Rpdj4gOiBcIlwiO1xuICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PlxuICAgIGVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+IDogXCJcIjtcbiAgY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PlxuICAgIG1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj57bWVzc2FnZX08L2Rpdj4gOiBcIlwiO1xuXG4gIGNvbnN0IHNpZ25pbkZvcm0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJlbWFpbFwiKX1cbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcInBhc3N3b3JkXCIpfVxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNpZ25pbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge3Nob3dFcnJvcigpfVxuICAgICAge3Nob3dMb2FkaW5nKCl9XG4gICAgICB7c2hvd01lc3NhZ2UoKX1cbiAgICAgIHtzaG93Rm9ybSAmJiBzaWduaW5Gb3JtKCl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25pbkNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic2lnbmluIiwiUm91dGVyIiwiU2lnbmluQ29tcG9uZW50IiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJzaG93Rm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJ0aGVuIiwiZGF0YSIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbmluRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=