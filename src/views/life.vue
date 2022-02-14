<template>
    生命周期
    <br />
    <button type="button" @click="count++">count is: {{ count }}</button>
</template>
<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered, ref } from 'vue'




onBeforeMount(() => {
    console.log('beforeMount')
})
onMounted(() => {
    console.log('mounted')
})
onBeforeUpdate(() => {
    console.log('beforeUpdate')
})
onUpdated(() => {
    console.log('updated')
})
onBeforeUnmount(() => {
    console.log('beforeUnmount')
})
onUnmounted(() => {
    console.log('unmounted')
})
// 新增两个生命周期函数
//每次渲染后重新收集响应式依赖
onRenderTracked(({ key, target, type }) => {
    // 跟踪虚拟DOM重新渲染时调用,钩子接收debugger event作为参数,此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。
    // type:set/get操作
    // key:追踪的键
    // target:重新渲染后的键
    console.log("onRenderTracked");
});
//每次触发页面重新渲染时自动执行
onRenderTriggered(({ key, target, type }) => {
    //当虚拟DOM重新渲染被触发时调用,和renderTracked类似,接收debugger event作为参数,
    // 此事件告诉你是什么操作触发了重新渲染,以及该操作的目标对象和键
    console.log("onRenderTriggered");
});

const count = ref(0)
</script>



<style scoped>
a {
    color: #42b983;
}
</style>
