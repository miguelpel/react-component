"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyComponent = function MyComponent() {
  return _react["default"].createElement("h1", null, "My React Component");
};

var _default = MyComponent;
exports["default"] = _default;