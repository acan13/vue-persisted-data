
# Vue Persisted Data

A Vue mixin that allows you to easily add persistence to vue reactive data properties. Simply add a persistedData field to your component and treat the properties the same way you would normal data properties. Vue Persisted Data handles everything.

*Note: This project is in pre-release beta. Basic functionality works but features may be missing or broken*

Common use cases are:

* User settings that you want to persist between sessions.
* TBD

## Table of Contents

* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [Examples](#examples)

## Demo

COMING SOON!

## Installation

Download via npm:
```shell
$ npm install vue-persisted-data --save
```

Include via cdn:
```html
COMING SOON
```

## Usage

Module:

```javascript
<template>
    <div>
        <div>
            Hello, {{ name }}!
        </div>
        <div>
            Change Name: 
            <input type="text" v-model="editName">
            <button @click="changeName">Change Name</button>
        </div>
    </div>
</template>

<script>
// the name property will automatically populate with the default value if none has already been set,
// or the persisted value if one has already been set

import vuePersistedData from 'vue-persisted-data'
export default {
    mixins: [vuePersistedData()],
    data() {
        return {
            editName: '',
        };
    },
    persistedData() {
        return {
            name: "New User", // 'New User' is the default value
        };
    },
    methods: {
        changeName() {
            this.name = this.editName; // reactivity and persistence is handled automatically
        },
    },
};
</script>
```


## API

COMING SOON
TODO:
Feature: set persisted key
Feature: set custom hydrate function
Feature: set persist method
Linting
Testing

#### Options reference

COMING SOON

## Examples:

COMING SOON


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Allan Cannon
