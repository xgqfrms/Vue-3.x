<template>
  <div class="ChildC1">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildC1',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .ChildC1{
    color: rgba(0, 0, 255, 0.5);
  }
</style>
