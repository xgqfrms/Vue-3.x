<template>
  <div class="parent">
    <h2>{{ title }}</h2>
    <button @click="toggleShow">ToggleShow</button>
    <ChildComponent v-if="show"/>
  </div>
</template>

<script>
  import log from "../utils/log";
  import ChildComponent from "./child";
  export default {
    name: "ParentComponent",
    components: {
      ChildComponent,
    },
    props: {
      msg: String,
    },
    data() {
      log(`parent init`, 2);
      return {
        title: "parent-lifecycle-order",
        show: true,
      };
    },
    methods: {
      toggleShow() {
        const { show } = this;
        this.show = !show;
      },
    },
    beforeCreate() {
      log(`parent beforeCreate`, 1);
    },
    created() {
      log(`parent created`, 3)
    },
    beforeMount() {
      log(`parent beforeMount`, 4)
    },
    mounted() {
      log(`parent mounted`, 5)
    },
    beforeUpdate() {
      log(`parent beforeUpdate`, 6)
    },
    updated() {
      log(`parent updated`, 7)
    },
    beforeDestroy() {
      log(`\nparent beforeDestroy`, 8)
    },
    destroyed() {
      log(`parent destroyed`, 9)
    },
    // catch error
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    margin: 30px 0 0;
  }
</style>



