<template>
  <div class="ParentA">
    <h1>{{ msg }}</h1>
    <ChildA1 msg="ChildA1"/>
    <ChildA2 msg="ChildA2"/>
  </div>
</template>

<script>
  import ChildA1 from './children/ChildA1.vue';
  import ChildA2 from './children/ChildA2.vue';
  export default {
    name: 'ParentA',
    props: {
      msg: String
    },
    components: {
      ChildA1,
      ChildA2,
    },
  }
</script>

<style scoped>
  .ParentA{
    color: red;
  }
</style>
