<template>
    <!-- setItemRef是一个方法 -->
    <div v-for="item in list" :key="item" :ref="setItemRef">{{ item }}</div>

    
</template>
<script setup>
import { reactive, onMounted,onBeforeUpdate } from 'vue'

//基础数组数据
const list = reactive([
    11, 22, 33, 44
])
//基础数据的ref储存为一个数组
const itemRefs = reactive([

])

const setItemRef = el => {
    console.log(el, 'el')
    if (el) {

        itemRefs.push(el)
    }
}

onMounted(() => {
    console.log(itemRefs,itemRefs[0],'itemRefs')
})
onBeforeUpdate(() => {
    itemRefs = []
})
</script>



<style scoped>
a {
    color: #42b983;
}
</style>
