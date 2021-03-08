<template>
  <div class="parent">
    <!-- <ChildAliasTest :msg="name" /> -->
    <ChildAlias :msg="name" />
    <Child :msg="name" />
    <button @click="updateName">change localStorage name</button>
  </div>
</template>

<script>
// ✅ export default
import Child from './Child.vue'

// ✅ export default
import { default as ChildAlias} from './Child.vue'

// ❌ export default
// import * as ChildAlias from './Child.vue'

// ❌ export
// import * as ChildTest from './ChildTest.vue'
// const {
//   render: ChildAliasTest,
// } = ChildTest;

// ❌ export
// import ChildTest as ChildAliasTest from './ChildTest.vue'
// import { ChildTest as ChildAliasTest} from './ChildTest.vue'

// const getLocalName = () => {
//   return window.localStorage.getItem('name');
// }

/* eslint-disable no-unused-vars */

// ... your code here with unused vars...

/* eslint-enable no-unused-vars */

export default {
  name: 'Parent',
  components: {
    Child,
    // ChildAlias.default,
    ChildAlias,
    // ChildAliasTest,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      id: 1,
      name: 'eric',
    };
  },
  computed: {},
  // beforeCreate() {
  //   window.localStorage.removeItem('name');
  // },
  mounted() {
    window.localStorage.setItem('name', this.name);
  },
  unmounted() {
    window.localStorage.removeItem('name');
  },
  // destroyed() {
  //   window.localStorage.removeItem('name');
  // },
  methods: {
    updateName() {
      window.localStorage.setItem('name', 'xgqfrms' + Date.now());
      this.name = 'xgqfrms' + Date.now();
      window.localStorage.setItem('name', this.name);
    },
  },
}
</script>

<style scoped>
</style>
