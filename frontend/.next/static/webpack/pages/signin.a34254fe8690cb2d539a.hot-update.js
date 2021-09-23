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
    email: 'ryan@gmail.com',
    password: 'rrrrrr',
    error: '',
    loading: false,
    message: '',
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
      lineNumber: 41,
      columnNumber: 42
    }, _this) : '';
  };

  var showError = function showError() {
    return error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "alert alert-danger",
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 38
    }, _this) : '';
  };

  var showMessage = function showMessage() {
    return message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "alert alert-info",
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 42
    }, _this) : '';
  };

  var signinForm = function signinForm() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          value: email,
          onChange: handleChange('email'),
          type: "email",
          className: "form-control",
          placeholder: "Type your email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "form-group",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          value: password,
          onChange: handleChange('password'),
          type: "password",
          className: "form-control",
          placeholder: "Type your password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          className: "btn btn-primary",
          children: "Signup"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, _this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [showError(), showLoading(), showMessage(), showForm && signinForm()]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, _this);
};

_s(SigninComponent, "2k9GhT2ubqB/M5D6hi+GlxBRv6A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLmEzNDI1NGZlODY5MGNiMmQ1MzlhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQzFCLGtCQUE0QkgsK0NBQVEsQ0FBQztBQUNqQ0ksSUFBQUEsS0FBSyxFQUFFLGdCQUQwQjtBQUVqQ0MsSUFBQUEsUUFBUSxFQUFFLFFBRnVCO0FBR2pDQyxJQUFBQSxLQUFLLEVBQUUsRUFIMEI7QUFJakNDLElBQUFBLE9BQU8sRUFBRSxLQUp3QjtBQUtqQ0MsSUFBQUEsT0FBTyxFQUFFLEVBTHdCO0FBTWpDQyxJQUFBQSxRQUFRLEVBQUU7QUFOdUIsR0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQVNBLE1BQVFQLEtBQVIsR0FBK0RNLE1BQS9ELENBQVFOLEtBQVI7QUFBQSxNQUFlQyxRQUFmLEdBQStESyxNQUEvRCxDQUFlTCxRQUFmO0FBQUEsTUFBeUJDLEtBQXpCLEdBQStESSxNQUEvRCxDQUF5QkosS0FBekI7QUFBQSxNQUFnQ0MsT0FBaEMsR0FBK0RHLE1BQS9ELENBQWdDSCxPQUFoQztBQUFBLE1BQXlDQyxPQUF6QyxHQUErREUsTUFBL0QsQ0FBeUNGLE9BQXpDO0FBQUEsTUFBa0RDLFFBQWxELEdBQStEQyxNQUEvRCxDQUFrREQsUUFBbEQ7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3RCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEc0IsQ0FFdEI7O0FBQ0FILElBQUFBLFNBQVMsaUNBQU1ELE1BQU47QUFBY0gsTUFBQUEsT0FBTyxFQUFFLElBQXZCO0FBQTZCRCxNQUFBQSxLQUFLLEVBQUU7QUFBcEMsT0FBVDtBQUNBLFFBQU1TLElBQUksR0FBRztBQUFF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WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9TaWduaW5Db21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzaWduaW4gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFNpZ25pbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogJ3J5YW5AZ21haWwuY29tJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdycnJycnInLFxuICAgICAgICBlcnJvcjogJycsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgc2hvd0Zvcm06IHRydWVcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgbWVzc2FnZSwgc2hvd0Zvcm0gfSA9IHZhbHVlcztcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUudGFibGUoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBtZXNzYWdlLCBzaG93Rm9ybSB9KTtcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xuXG4gICAgICAgIHNpZ25pbih1c2VyKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBkYXRhLmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc2F2ZSB1c2VyIHRva2VuIHRvIGNvb2tpZVxuICAgICAgICAgICAgICAgIC8vIHNhdmUgdXNlciBpbmZvIHRvIGxvY2Fsc3RvcmFnZVxuICAgICAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0ZSB1c2VyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+IChsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+TG9hZGluZy4uLjwvZGl2PiA6ICcnKTtcbiAgICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PiAoZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvcn08L2Rpdj4gOiAnJyk7XG4gICAgY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiAobWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPnttZXNzYWdlfTwvZGl2PiA6ICcnKTtcblxuICAgIGNvbnN0IHNpZ25pbkZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNpZ251cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7c2hvd0Vycm9yKCl9XG4gICAgICAgICAgICB7c2hvd0xvYWRpbmcoKX1cbiAgICAgICAgICAgIHtzaG93TWVzc2FnZSgpfVxuICAgICAgICAgICAge3Nob3dGb3JtICYmIHNpZ25pbkZvcm0oKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzaWduaW4iLCJSb3V0ZXIiLCJTaWduaW5Db21wb25lbnQiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJsb2FkaW5nIiwibWVzc2FnZSIsInNob3dGb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInRoZW4iLCJkYXRhIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNob3dMb2FkaW5nIiwic2hvd0Vycm9yIiwic2hvd01lc3NhZ2UiLCJzaWduaW5Gb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==