"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setter = setter;

function setter(key, value) {
  var rootKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (!rootKey) {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }

  var currentStoredValuesString = localStorage.getItem(rootKey);
  var currentStoredValues = JSON.parse(currentStoredValuesString);
  currentStoredValues[key] = value;
  localStorage.setItem(rootKey, JSON.stringify(currentStoredValues));
}