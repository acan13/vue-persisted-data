"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setter = setter;
exports.getAll = getAll;
exports.getter = getter;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.is-array");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function setter(key, value) {
  var rootKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (!rootKey) {
    localStorage.setItem(key, JSON.stringify(value));
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

function getAll() {
  var rootKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  if (!rootKey) {
    var jsonStoredValues = localStorage;
    var parsedStoredValues = {};

    var _arr = Object.keys(jsonStoredValues);

    for (var _i = 0; _i < _arr.length; _i++) {
      var key = _arr[_i];

      try {
        parsedStoredValues[key] = JSON.parse(jsonStoredValues[key]);
      } catch (error) {// do nothing
      }
    }

    return parsedStoredValues;
  }

  try {
    return JSON.parse(localStorage.getItem(rootKey));
  } catch (error) {
    return;
  }
}

function getter(key) {
  var rootKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  if (!rootKey) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {// do nothing            
    }
  }

  return JSON.parse(localStorage.getItem(rootKey))[key];
}