<template>
  <div class="ChildC2">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildC2',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .ChildC2{
    color: rgba(0, 0, 255, 0.5);
  }
</style>
