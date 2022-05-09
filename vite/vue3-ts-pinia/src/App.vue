<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <Test /> -->
  <Diff />
</template>

<script setup lang="ts">
import Diff from './components/Diff.vue';
import Test from './components/Test.vue';
// 'Test' is declared but its value is never read.Vetur(6133)

const abc = 123;
// abc' is declared but its value is never read.Vetur(6133)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
