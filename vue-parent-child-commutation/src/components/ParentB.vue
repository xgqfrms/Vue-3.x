<template>
  <div class="ParentB">
    <h1>{{ msg }}</h1>
    <ChildB1 msg="ChildB1"/>
    <ChildB2 msg="ChildB2"/>
  </div>
</template>

<script>
  import ChildB1 from './children/ChildB1.vue';
  import ChildB2 from './children/ChildB2.vue';
  export default {
    name: 'ParentB',
    props: {
      msg: String
    },
    components: {
      ChildB1,
      ChildB2,
    },
  }
</script>

<style scoped>
  .ParentB{
    color: green;
  }
</style>
