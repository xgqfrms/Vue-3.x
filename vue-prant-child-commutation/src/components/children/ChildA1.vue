<template>
  <div class="ChildA1">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildA1',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .ChildA1{
    color: rgba(1, 0,0, 0.5);
  }
</style>