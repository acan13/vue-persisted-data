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
        let structureObjectFn = this.$options.persistedData;

        if (typeof structureObjectFn !== 'function') {
          throw `persistedData must be a function. Current value: ${structureObjectFn}`;
        }

        let structureObject = structureObjectFn.call(this);

        if (typeof structureObject !== 'object' || Array.isArray(structureObject)) {
          throw `persistedData function must return an object. Current value: ${structureObject}`;
        }

        let persistedData = localStorage;
        dataObject = (0, _hydrate.hydrate)(persistedData, structureObject);
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