export function setter(key, value, rootKey = "") {
    if (!rootKey) {
        localStorage.setItem(key, JSON.stringify(value));
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

export function getAll(rootKey = "") {
    if (!rootKey) {
        let jsonStoredValues = localStorage;
        let parsedStoredValues = {};
        for (const key of Object.keys(jsonStoredValues)) {
            try {
                parsedStoredValues[key] = JSON.parse(jsonStoredValues[key]);
            } catch (error) {
                // do nothing
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

export function getter(key, rootKey = "") {
    if (!rootKey) {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (error) {
            // do nothing            
        }
    }

    return JSON.parse(localStorage.getItem(rootKey))[key];
}