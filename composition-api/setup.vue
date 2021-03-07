<template>
  <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div>
</template>

<script>
  import { h, toRef, ref, reactive, } from 'vue'
  // import { ref, reactive } from 'vue'
  // import { toRef } from 'vue'

  export default {
    props: {
      collectionName: String
    },
    setup(props, context) {
      const title = toRef(props, 'title')
      // Attributes (Non-reactive object)
      console.log(context.attrs)

      // Slots (Non-reactive object)
      console.log(context.slots)

      // Emit Events (Method)
      console.log(context.emit)
      const readersNumber = ref(0)
      const book = reactive({ title: 'Vue 3 Guide' })

      // expose to template
      // return {
      //   readersNumber,
      //   book
      // }
      // Please note that we need to explicitly expose ref value here
      return () => h('div', [readersNumber.value, book.title])
    }
  }
</script>
