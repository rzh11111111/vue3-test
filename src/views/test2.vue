<script setup>
import { onBeforeMount, reactive,ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
function countjia(){
  count.value++;
}
onBeforeMount(()=>{
  console.log('onBeforeMount')
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
   <button type="button" @click="countjia">count is: {{ count }}</button>
  <p>
    222222222222
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
