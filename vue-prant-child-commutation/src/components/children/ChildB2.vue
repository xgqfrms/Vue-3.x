<template>
  <div class="ChildB2">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ChildB2',
  props: {
    msg: String
  }
}
</script>
<style scoped>
  .ChildB2{
    color: rgba(0, 1, 0, 0.5);
  }
</style>