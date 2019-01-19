function _hydrate(dataValue, structureValue, config = {}) {
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
export let hydrate = _hydrate;