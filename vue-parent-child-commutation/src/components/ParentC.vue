<template>
  <div class="ParentC">
    <h1>{{ msg }}</h1>
    <ChildC1 msg="ChildC1"/>
    <ChildC2 msg="ChildC2"/>
  </div>
</template>

<script>
  import ChildC1 from './children/ChildC1.vue';
  import ChildC2 from './children/ChildC2.vue';
  export default {
    name: 'ParentC',
    props: {
      msg: String
    },
    components: {
      ChildC1,
      ChildC2,
    },
  }
</script>

<style scoped>
  .ParentC{
    color: blue;
  }
</style>
