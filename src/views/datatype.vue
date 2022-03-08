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
import { reactive,ref ,toRef ,toRefs } from 'vue'
//ref 和 reactive两种创建data方式
//ref 创建基础数据类型，reactive对象或者数组






const nums = reactive([
    11,22,33,44
] )
function change(){
        console.log("change...");
        nums.push(1)
        // let newArr = [1,2,3]
 }


const count = ref(0)
function countjia(){
  count.value++;
}
// ref和toRef的区别
// (1). ref本质是拷贝，修改响应式数据不会影响原始数据；toRef的本质是引用关系，修改响应式数据会影响原始数据
// (2). ref数据发生改变，界面会自动更新；toRef当数据发生改变是，界面不会自动更新
// (3). toRef传参与ref不同；toRef接收两个参数，第一个参数是哪个对象，第二个参数是对象的哪个属性

// 所以如果想让响应式数据和以前的数据关联起来，并且想在更新响应式数据的时候不更新UI，那么就使用toRef

// 有的时候，我们希望将对象的多个属性都变成响应式数据，并且要求响应式数据和原始数据关联，并且更新响应式数据的时候不更新界面，就可以使用toRefs，用于批量设置多个数据为响应式数据。(toRef一次仅能设置一个数据)
// toRefs接收一个对象作为参数，它会遍历对象身上的所有属性，然后挨个调用toRef执行
let obj = {name:'123456',id:1}
let newObj = toRef(obj,'name')
let newObj2 = toRefs(obj)
</script>



<style scoped>
a {
  color: #42b983;
}
</style>
