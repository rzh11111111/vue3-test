<template>
     <button @click="show = true"> Login </button>
  <login-popup v-if="show" />
    
</template>
<script setup>
import { ref, defineAsyncComponent } from 'vue'
// import LoginPopup from '../defineAsyncCom.vue'
// 使用 Vue3 的 DefileAsyncComponent功能可让我们懒加载组件，说白了就是创建一个只有在需要时才会加载的异步组件。

// 不带选项的异步组件
const LoginPopup = defineAsyncComponent(() => import('../components/defineAsyncCom.vue'))

// 带选项的异步组件
const asyncModalWithOptions = defineAsyncComponent({
  loader: () => import('../components/defineAsyncCom.vue'),
  delay: 200,
  timeout: 3000,
})

const show = ref(false)






</script>



<style scoped>
.popup {
    position: fixed;
    width: 100%;
    top: ; 
    left: ;
    height: 100%;
    background-color: rgba(, , , 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
   min-width: 200px;
   width: 30%;
   background: #fff;
   height: 200px;
   padding: 10px;
   border-radius: 5px;
}
input[type="text"], input[type="password"] {
    border: ;
    outline: ;
    border-bottom: 1px solid #eee;
    width: 80%;
    margin:  auto;
    font-size: 0.5em;
}
button {
   border: ;
   margin-top: 50px;
   background-color:#8e44ad;
   color: #fff;
   padding: 5px 10px;
   font-size: 0.5em;
}

</style>
