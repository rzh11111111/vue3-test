<template>

 <button type="button" v-for="(item,index) in page" :key="index" @click="topush(item.push)"> {{ item.name }}</button>
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
        push:'/datatype'
    },
    {
        name:'生命周期',
        push:'/life'
    },
    {
        name:'组件ref',
        push:'/ref'
    },
] )



onBeforeMount(()=>{
  console.log('onBeforeMount')
})

const router = useRouter();
const topush = (val) => {
  console.log(val)
    router.push({path:val,query:{num:1}})
}

</script>



<style scoped>
a {
  color: #42b983;
}
</style>
