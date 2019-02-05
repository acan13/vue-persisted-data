export function setter(key, value, rootKey = "") {
    if (!rootKey) {
        localStorage.setItem(key, value);
        return;
    }

    let currentStoredValuesString = localStorage.getItem(rootKey);
    let currentStoredValues = JSON.parse(currentStoredValuesString);
    if (typeof currentStoredValues !== 'object' || Array.isArray(currentStoredValues)) {
        currentStoredValues = {};
    }
    currentStoredValues[key] = value;
    localStorage.setItem(rootKey, JSON.stringify(currentStoredValues));
}

export function getter(rootKey = "") {
    if (!rootKey) {
        return localStorage;
    }

    return JSON.parse(localStorage.getItem(rootKey));
}