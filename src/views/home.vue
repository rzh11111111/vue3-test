<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
   <button type="button" @click="countjia">count is: {{ count }}</button>
 <button type="button" v-for="(item,index) in page" :key="index" @click="topush()"> {{ item.name }}</button>
  <p>
    1111111111111
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script setup>
import { onBeforeMount, reactive,ref } from 'vue'
import {useRouter} from 'vue-router'
defineProps({
  msg: String
})

const page = reactive([
    {
        name:'赋值',
        push:'datatype'
    }
] )


const count = ref(0)
function countjia(){
  count.value++;
}
onBeforeMount(()=>{
  console.log('onBeforeMount')
})

const router = useRouter();
const topush = () => {
    router.push({path:'/datatype',query:{num:1}})
}

</script>



<style scoped>
a {
  color: #42b983;
}
</style>
