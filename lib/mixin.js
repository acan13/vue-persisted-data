"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vuePersistedDataMixin = void 0;

require("core-js/modules/web.dom.iterable");

var _hydrate = require("./hydrate");

function _getVuePersistedDataMixin() {
  let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    data() {
      let dataObject = {};

      if (this.$options.persistedData) {
        let persistedDataFn = this.$options.persistedData;

        if (typeof persistedDataFn !== 'function') {
          throw `persistedData must be a function. Current value: ${persistedDataFn}`;
        }

        let persistedData = persistedDataFn.call(this);

        if (typeof persistedData !== 'object' || Array.isArray(persistedData)) {
          throw `persistedData function must return an object. Current value: ${persistedData}`;
        }

        dataObject = (0, _hydrate.hydrate)(dataObject);
      }

      return dataObject;
    },

    created() {
      if (this.$options.persistedData) {
        let persistedData = this.$options.persistedData.call(this);

        for (const key of Object.keys(persistedData)) {
          this.$watch(key, function (newValue) {
            window.localStorage.setItem(key, newValue);
          }, {
            deep: true
          });
        }
      }
    }

  };
}

let vuePersistedDataMixin = _getVuePersistedDataMixin;
exports.vuePersistedDataMixin = vuePersistedDataMixin;