<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
   <button type="button" @click="countjia">count is: {{ count }}</button>
  <p  v-for="(item,index) in nums" :key="index">
    {{item}}
    
  </p>
  <button type="button" @click="change">加一个1</button>
</template>
<script setup>
import { reactive,ref } from 'vue'
//ref 和 reactive两种创建data方式
//ref 创建基础数据类型，reactive对象或者数组


const count = ref(0)
function countjia(){
  count.value++;
}



const nums = reactive([
    11,22,33,44
] )
function change(){
        console.log("change...");
        nums.push(1)
        // let newArr = [1,2,3]
 }


</script>



<style scoped>
a {
  color: #42b983;
}
</style>
