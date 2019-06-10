<template>
  <div class="container" id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import SourceSelection from './components/SourceSelection'
import Newslist from './components/Newslist'

export default {
  name: 'App',
  components: {
    // HelloWorld
    SourceSelection,
    Newslist
  },
  data() {
    return {
      source: ""
    }
  },
  methods: {
    sourceChanged: function(source) {
      this.source = source;
    }
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  padding-top: 20px;
}
</style>
