import { hydrate } from './hydrate';

function _getVuePersistedDataMixin(config = {}) {
    return {
        data(){
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

                dataObject = hydrate(dataObject);
            }
            return dataObject;
        },
        created() {
            if (this.$options.persistedData) {
                let persistedData = this.$options.persistedData.call(this);
                for (const key of Object.keys(persistedData)) {
                    this.$watch(key, function(newValue) {
                        window.localStorage.setItem(key, newValue);
                    }, {deep: true});
                }
            }
        }
    }
}

export let vuePersistedDataMixin = _getVuePersistedDataMixin;