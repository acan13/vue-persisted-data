"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = vuePersistedData;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.is-array");

var _hydrate = require("./hydrate");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function vuePersistedData() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    data: function data() {
      var dataObject = {};

      if (this.$options.persistedData) {
        var structureObjectFn = this.$options.persistedData;

        if (typeof structureObjectFn !== 'function') {
          throw "persistedData must be a function. Current value: ".concat(structureObjectFn);
        }

        var structureObject = structureObjectFn.call(this);

        if (_typeof(structureObject) !== 'object' || Array.isArray(structureObject)) {
          throw "persistedData function must return an object. Current value: ".concat(structureObject);
        }

        var persistedData = localStorage;
        dataObject = (0, _hydrate.hydrate)(persistedData, structureObject);
      }

      return dataObject;
    },
    created: function created() {
      var _this = this;

      if (this.$options.persistedData) {
        var persistedData = this.$options.persistedData.call(this);

        var _arr = Object.keys(persistedData);

        var _loop = function _loop() {
          var key = _arr[_i];

          _this.$watch(key, function (newValue) {
            window.localStorage.setItem(key, newValue);
          }, {
            deep: true
          });
        };

        for (var _i = 0; _i < _arr.length; _i++) {
          _loop();
        }
      }
    }
  };
}