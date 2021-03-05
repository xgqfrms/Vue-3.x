<template>
  <div class="child">
    <h1>{{msg}}</h1>
    <div>localName = {{localName}}</div>
    <div>funcLocalName = {{funcLocalName}}</div>
    <div>mannulName = {{mannulName()}}</div>
    <!-- <button @click="updateName">change localStorage name</button> -->
  </div>
</template>

<script>
const getLocalName = () => {
  return window.localStorage.getItem('name');
}

export default {
  name: 'Child',
  props: {
    // msg: String,
    msg: {
      type: String,
      default: '',
      // required: true,
    },
  },
  data() {
    return {
      //
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
    //
  },
  methods: {
    // updateName() {
    //   window.localStorage.setItem('name', 'xgqfrms' + Date.now());
    //   this.name = 'xgqfrms' + Date.now();
    //   window.localStorage.setItem('name', this.name);
    // },
    mannulName() {
      console.log('mannulName =', window.localStorage.getItem('name'));
      return window.localStorage.getItem('name');
    },
  },
}
</script>

<style scoped>
</style>
