<template>
  <div class="child">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
  import log from "../utils/log";
  export default {
    name: "ChildComponent",
    components: {},
    props: {},
    data() {
      log(`child init`, 2);
      return {
        title: "child-lifecycle-order",
      };
    },
    methods: {
      //
    },
    beforeCreate() {
      log(`child beforeCreate`, 1)
    },
    created() {
      log(`child created`, 3)
    },
    beforeMount() {
      log(`child beforeMount`, 4)
    },
    mounted() {
      log(`child mounted`, 5)
    },
    beforeUpdate() {
      log(`child beforeUpdate`, 6)
    },
    updated() {
      log(`child updated`, 7)
    },
    beforeDestroy() {
      log(`\nchild beforeDestroy`, 8)
    },
    destroyed() {
      log(`child destroyed`, 9)
    },
    // catch error
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
</style>



