<template>
  <!-- <>react fragment</> -->
  <!-- <template>vue fragment</template> -->
  <template v-if="true">
    <div>{{store.msg}}</div>
  </template>
  <template v-if="true">
    <div>{{store.getMsg}}</div>
    <!-- <pre>{{jsonString}}</pre> -->
    <pre>❓ {{store.msg}}</pre>
    <span v-pre>{{ this will not be compiled }}❓ {{store.msg}}</span>
    <button @click="updateMsg">Pinia 🍍</button>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import { appStore } from "@/store/index";
// import { appStore } from "../store/index";
// import { useAppStore } from "../store/index";
import { useAppStore } from "@/store/index";
// 实例化 store
// const store = appStore();
const store = useAppStore();
const log = console.log;
log(`store =`, store);

let jsonString = ref('');
const url = `https://cdn.xgqfrms.xyz/json/cat.json`;
// async await
store.fetchData(url).then(json => {
  // console.log('fetchData =', json);
  jsonString.value = JSON.stringify(json, null, 4);
  // console.log('jsonString =', jsonString);
  console.log('jsonString.value =', jsonString.value);
});

// const promise = store.fetchData(url);
// promise.then(json => {
//   console.log('fetchData =', json);
// });

const updateMsg = () => {
  store.$patch({
    msg: "Hello Pinia 🍍!",
  });
  // store.updateMsg('Pinia 🍍');
}
</script>

<style scoped lang="scss">
.className {
  color: #000;
  background: #fff;
}
</style>
