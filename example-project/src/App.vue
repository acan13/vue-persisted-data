<template>
  <div id="app">
    <div>Hello, {{ name }}!</div>
    <h3>Change Name</h3>
    <input v-model="name" type="text">
    <input v-model="test.first" type="text">
    <input v-model="test.last" type="text">
    {{ test.first }} {{ test.last }}
  </div>
</template>

<script>
import vuePersistedData from './../../src/mixin';

export default {
  name: 'app',
  components: {

  },
  mixins: [vuePersistedData()],
  persistedData() {
    return {
      name: "User",
      test: {
        first: "Allan",
        last: "Cannon",
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
