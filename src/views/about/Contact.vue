<template>
    <div style="padding: 20px">
        <Card >
            <p slot="title">联系我们</p>
            <p>123456@qq.com</p>

            <!-- 三级路由跳转 -->
            <router-link class="contact" :to="{name:'phone'}">电话</router-link>
            <router-link class="contact" :to="{name:'person'}">联系人</router-link>
            <!-- 三级路由的内容 -->
            <router-view></router-view>
        </Card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .contact{
        font-size:18px;
        margin-right:10px;
        line-height: 50px;
    }
</style>