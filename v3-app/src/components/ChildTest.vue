<template>
  <div class="child">
    <h1>{{msg}}</h1>
    <div>❌ name = {{name}}</div>
    <div>❌ localName = {{localName}}</div>
    <div>❌ funcLocalName = {{funcLocalName}}</div>
    <div>✅ mannulName = {{mannulName()}}</div>
    <!-- <div v-if="domReady">❌ window.localStorage.getItem('name') = {{window?.localStorage?.getItem('name')}}</div> -->
    <!-- Child.vue?b541:6 Uncaught (in promise) TypeError: Cannot read property 'localStorage' of undefined -->
    <!-- <div>❌ window.localStorage.getItem('name') = {{window?.localStorage?.getItem('name')}}</div> -->
  </div>
</template>

<script>
const getLocalName = () => {
  return window.localStorage.getItem('name');
}

export const ChildTest = {
  name: 'ChildTest',
  props: {
    // msg: String,
    msg: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      domReady: false,
      name: window.localStorage.getItem('name'),
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
    this.domReady = true;
  },
  unmounted() {
    this.domReady = false;
  },
  methods: {
    mannulName() {
      console.log('mannulName =', window.localStorage.getItem('name'));
      return window.localStorage.getItem('name');
    },
  },
};


</script>

<style scoped>
</style>
