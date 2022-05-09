<template>
  <template v-if="true">
    <h2>for-loop with key ✅ 重新渲染是仅更新一个 DOM 元素(1)</h2>
    <div>
      <span v-for="(item, i) in items" :key="item.k">
        {{item.v}}
      </span>
    </div>
    <hr>
    <h2>for-loop without key ❌ 重新渲染更新多个 DOM 元素 (1 ~ n)</h2>
    <div>
      <span v-for="(item, i) in items">
        {{item.v}}
      </span>
    </div>
    <button @click="updateItems">update items(diff patch)</button>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const log = console.log;

const arr = [
  {v: 'a', k: 1},
  {v: 'b', k: 2},
  {v: 'c', k: 3},
  {v: 'd', k: 4},
  {v: 'e', k: 5},
  {v: 'f', k: 6},
];

const temp = [
  {v: 'G', k: 7},
  {v: 'a', k: 1},
  {v: 'b', k: 2},
  {v: 'c', k: 3},
  {v: 'd', k: 4},
  {v: 'e', k: 5},
  {v: 'f', k: 6},
];


let items = ref(arr);
const updateItems = () => {
  items.value = temp;
  log('items =', items);
  log('items.value =', items.value);
};

// let items = ref(['a', 'b', 'c', 'd', 'e', 'f']);
// const updateItems = () => {
//   items.value = ['G', 'a', 'b', 'c', 'd', 'e', 'f'];
// };

</script>

<style scoped lang="scss">
span {
  width: 50px;
  display: inline-block;
}
</style>
