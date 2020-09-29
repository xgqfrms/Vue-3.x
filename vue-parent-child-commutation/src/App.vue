<template>
  <div id="app">
    <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ParentA msg="ParentA"/>
    <ParentB msg="ParentB"/>
    <ParentC msg="ParentC"/>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue';
  import ParentA from './components/ParentA.vue';
  import ParentB from './components/ParentB.vue';
  import ParentC from './components/ParentC.vue';
  export default {
    name: 'App',
    components: {
      // HelloWorld,
      ParentA,
      ParentB,
      ParentC,
    },
    data() {
      return {
        // 
      };
    },
    methods: {
      // 
    },
  }
</script>

<style>
  /* 
    https://developer.mozilla.org/en-US/docs/Web/CSS/@import
  */
  @import url("./style/app.css");
</style>
