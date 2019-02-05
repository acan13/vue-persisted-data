"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setter = setter;
exports.getter = getter;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function setter(key, value) {
  var rootKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (!rootKey) {
    localStorage.setItem(key, value);
    return;
  }

  var currentStoredValuesString = localStorage.getItem(rootKey);
  var currentStoredValues = JSON.parse(currentStoredValuesString);

  if (_typeof(currentStoredValues) !== 'object' || Array.isArray(currentStoredValues)) {
    currentStoredValues = {};
  }

  currentStoredValues[key] = value;
  localStorage.setItem(rootKey, JSON.stringify(currentStoredValues));
}

function getter() {
  var rootKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  if (!rootKey) {
    return localStorage;
  }

  return JSON.parse(localStorage.getItem(rootKey));
}