"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrate = void 0;

require("core-js/modules/web.dom.iterable");

function _hydrate(dataValue, structureValue) {
  let config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (dataValue === undefined) {
    return structureValue;
  }

  if (typeof dataValue !== typeof structureValue) {
    return structureValue;
  }

  if (Array.isArray(dataValue) !== Array.isArray(structureValue)) {
    return structureValue;
  }

  if (Array.isArray(structureValue)) {
    return dataValue;
  }

  if (typeof structureValue !== 'object') {
    return dataValue;
  }

  let hydratedObject = {};

  for (const key of Object.keys(structureValue)) {
    hydratedObject[key] = hydrate(dataValue[key], structureValue[key]);
  }

  return hydratedObject;
}

let hydrate = _hydrate;
exports.hydrate = hydrate;