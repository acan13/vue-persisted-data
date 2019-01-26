import { hydrate } from './hydrate';
import { setter } from './localStorageHelpers';

export default function vuePersistedData({hydrateFn = hydrate, storageKey = ""} = {}) {
    return {
        data(){
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

                let persistedDataString = storageKey ? localStorage.getItem(storageKey) : localStorage;
                let persistedData = JSON.parse(persistedDataString);

                dataObject = hydrateFn(persistedData, structureObject);
            }
            return dataObject;
        },
        created() {
            if (this.$options.persistedData) {
                let persistedData = this.$options.persistedData.call(this);
                for (const key of Object.keys(persistedData)) {
                    this.$watch(key, function(newValue) {
                        setter(key, newValue, storageKey);
                    }, {deep: true});
                }
            }
        },
    }
}