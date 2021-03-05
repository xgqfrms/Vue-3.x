<template>
  <div class="parent">
    <div>localName = {{localName}}</div>
    <div>funcLocalName = {{funcLocalName}}</div>
    <div>mannulName = {{mannulName()}}</div>
    <button @click="updateName">change localStorage name</button>
  </div>
</template>

<script>

const getLocalName = () => {
  return window.localStorage.getItem('name');
}

/* eslint-disable no-unused-vars */

// ... your code here with unused vars...

/* eslint-enable no-unused-vars */

export default {
  name: 'Parent',
  props: {
    msg: String,
  },
  data() {
    return {
      id: 1,
      name: 'eric',
    };
  },
  computed: {
    funcLocalName() {
      console.log('getLocalName =', getLocalName());
      return getLocalName();
    },
    localName() {
      console.log('localName =', window.localStorage.getItem('name'));
      return window.localStorage.getItem('name');
    },
  },
  mounted() {
    window.localStorage.setItem('name', 'eric');
    // setTimeout(() => {
    //   window.localStorage.setItem('name', 'xgqfrms');
    // }, 3000);
    // window.localStorage.setItem('name', this.name);
    // setTimeout(() => {
    //   this.name = 'xgqfrms';
    //   window.localStorage.setItem('name', this.name);
    // }, 3000);
  },
  methods: {
    updateName() {
      window.localStorage.setItem('name', 'xgqfrms' + Date.now());
      // this.name = 'xgqfrms' + Date.now();
      // window.localStorage.setItem('name', this.name);
    },
    mannulName() {
      console.log('mannulName =', window.localStorage.getItem('name'));
      return window.localStorage.getItem('name');
    },
  },
}
</script>

<style scoped>
</style>
