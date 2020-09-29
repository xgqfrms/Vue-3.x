<template>
  <div class="ChildA2">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildA2',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .ChildA2{
    color: rgba(1, 0,0, 0.5);
  }
</style>