
<template>
    <div class="popup">
        <div class="content">
            <div class="btn" @click="$emit('byVal', 1)">点击给父组件传值</div>
            <div>{{ msg }}</div>
        </div>
    </div>
</template>

<script setup>


defineEmits(['byVal']); // 使用defineEmits和defineProps不需要导入
defineProps({
    msg: String
})
</script>

<style scoped>
.popup {
    width: 150px;
    height: 150px;
    background: rgba(999, 0, 0, 0.3);
}
.btn{
    font-size: 12px;
    color: black;
    opacity: 1;
    
}
.content {
    /* min-width: 200px;
   width: 30%;
   background: #fff;
   height: 200px;
   padding: 10px;
   border-radius: 5px; */
}
</style>
