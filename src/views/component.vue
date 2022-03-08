<template>
<!-- 直接使用组件 -->
<comred  msg="abcd"  @byVal="byVal"></comred>

<p style="margint-top:10px;"></p>

<!-- 动态组件切换 -->
<component :is="typeCom[pageParams.type]"></component>
<button @click="changetype"> 改变颜色（改变组件） </button>

<!-- 点击加载异步组件 -->
     <button @click="show = true"> 弹出登录</button>
  <login-popup v-if="show" />
    <button @click="show2 = true"> 弹出带参数的登录 </button>
  <async-modal-with-options v-if="show2"></async-modal-with-options>
</template>
<script setup>
import { ref,reactive, defineAsyncComponent } from 'vue'
// import LoginPopup from '../defineAsyncCom.vue'
// 使用 Vue3 的 DefileAsyncComponent功能可让我们懒加载组件，说白了就是创建一个只有在需要时才会加载的异步组件。


//父子组件传值
const byVal = (val) => {
  console.log(val);// 输出子组件的值
}

//动态组件切换
import comred from '../components/comred.vue'
import comblue from '../components/comblue.vue'

const pageParams = reactive({
  type:1
})
const typeCom = {
  1:comred,
  2:comblue
}
function changetype(){
  pageParams.type===1?pageParams.type = 2:pageParams.type = 1
}




// 不带选项的异步组件
const show = ref(false)
const LoginPopup = defineAsyncComponent(() => import('../components/defineAsyncCom.vue'))

// 带选项的异步组件
const show2 = ref(false)
const asyncModalWithOptions = defineAsyncComponent({
  loader: () => import('../components/defineAsyncCom.vue'),
  delay: 200,
  timeout: 3000,
})








</script>



<style scoped>

</style>
