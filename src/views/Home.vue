<template>
    <div id="home">
        <div class="bg">
            <h1>关于光临本餐厅！</h1>
            <h2>这里的东西又贵又不好吃！</h2>
            <Button type="success" size="large" long icon="md-cart" @click="goToMenu">
                开始点餐
            </Button>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            goToMenu(){
                // 跳转到上一次浏览的页面
                // this.$router.go(-1)

                // 跳转指定的地址
                // this.$router.replace('/menu')

                // 跳转
                // this.$router.push('/menu')
                // this.$router.push({path: '/menu'})
                this.$router.push({name: 'menu'})

            }
        }
    }
</script>

<style scoped>
  #home{ background: url('/img/bg.jpg'); height:85vh; padding: 10% 20%;}
  .bg{ background:#2db7f5; border-radius:10px; padding: 20px 0; }
  h1,h2{ text-align:center;margin:5% 0;color:#fff; }
</style>