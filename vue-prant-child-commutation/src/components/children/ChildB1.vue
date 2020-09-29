<template>
  <div class="ChildB1">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildB1',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .ChildB1{
    color: rgba(0, 1, 0, 0.5);
  }
</style>