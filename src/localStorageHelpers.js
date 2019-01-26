export function setter(key, value, rootKey = "") {
    if (!rootKey) {
        localStorage.setItem(key, JSON.stringify(value));
        return;
    }

    let currentStoredValuesString = localStorage.getItem(rootKey);
    let currentStoredValues = JSON.parse(currentStoredValuesString);
    currentStoredValues[key] = value;
    localStorage.setItem(rootKey, JSON.stringify(currentStoredValues));
}