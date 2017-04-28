/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Component = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      single: 'apples',
      multi: ['apples']
    }, _this.renderOptions = function () {
      return ['apples', 'oranges', 'bananas', 'kiwis'].map(function (option) {
        return _react2.default.createElement(
          'option',
          { key: option, value: option },
          option
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          'h1',
          null,
          'react-normalized-select'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Single choice select'
          ),
          _react2.default.createElement(
            'p',
            null,
            '(drop-in replacement)'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'single' },
            _react2.default.createElement(
              _Component.NormalizedSelect,
              {
                id: 'single',
                value: this.state.single,
                onChange: function onChange(e) {
                  return _this2.setState({ single: e.target.value });
                } },
              this.renderOptions()
            )
          ),
          _react2.default.createElement(
            'pre',
            null,
            'this.state.single = ',
            JSON.stringify(this.state.single, null, '  ')
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Multi-choice select'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'multi' },
            _react2.default.createElement(
              _Component.NormalizedSelect,
              {
                id: 'multi',
                multiple: true,
                size: 5,
                value: this.state.multi,
                onChange: function onChange(e) {
                  return _this2.setState({ multi: e.target.value });
                } },
              this.renderOptions()
            )
          ),
          _react2.default.createElement(
            'pre',
            null,
            'this.state.multi = ',
            JSON.stringify(this.state.multi, null, '  ')
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.PureComponent);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(1);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */

var appRoot = document.createElement('div');

appRoot.id = 'app';
document.body.appendChild(appRoot);
_reactDom2.default.render(_react2.default.createElement(_App.App, null), appRoot);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NormalizedSelect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NormalizedSelect = exports.NormalizedSelect = function (_React$PureComponent) {
  _inherits(NormalizedSelect, _React$PureComponent);

  function NormalizedSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NormalizedSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NormalizedSelect.__proto__ || Object.getPrototypeOf(NormalizedSelect)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
      if (!_this.props.multiple) {
        _this.props.onChange(event);
        return;
      }
      _this.props.onChange(_extends({}, event, {
        target: _extends({}, event.target, {
          value: Array.prototype.slice.call(event.target.options, 0).filter(function (o) {
            return o.selected;
          }).map(function (o) {
            return o.value;
          })
        })
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NormalizedSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          props = _objectWithoutProperties(_props, ['onChange']);

      return onChange ? _react2.default.createElement('select', _extends({}, props, { onChange: this.onChange })) : _react2.default.createElement('select', props);
    }
  }]);

  return NormalizedSelect;
}(_react2.default.PureComponent);

NormalizedSelect.defaultProps = {
  multiple: false,
  onChange: undefined
};

/***/ })
/******/ ]);