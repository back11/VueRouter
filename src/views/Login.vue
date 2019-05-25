<template>
    <div class="formBox">
        <img src="/img/icon.png">
        <form @submit.prevent="onSubmit">
            <p>
                邮箱：<Input type="email" v-model="email" />
            </p>
            <p>
                密码：<Input type="password" v-model="password" />
            </p>
            <Button type="success" html-type="submit">登录</Button>
        </form>
    </div>
</template>
<script>
    import axios from "axios"
    export default{
        data(){
            return {
                email:'',
                password:''
            }
        },
        methods:{
            onSubmit(){
                if(this.email == '' || this.password == ''){
                    this.$Message.error('账号密码不能为空！');
                    return;
                }

                // 不为空则进行请求数据库，查询数据库中的账号密码，进行验证账号密码是否一致
                axios.get('/users.json').then(res=>{
                    const users = []
                    for(let key in res.data){
                        users.push(res.data[key])
                    }

                    // 得到所有账号密码，进行过滤筛选，如填写的账号密码和数据库的一致则返回结果数组
                    let result = users.filter(item=>{
                        return item.email == this.email && item.password == this.password
                    })
                    
                    // 得到result结果数组后，判断长度是否大于0，大于说明当前账号存储
                    if(result.length > 0){
                        // 改变state中的currentUser和isLogin的状态为登陆状态
                        this.$store.dispatch('setUser', result[0].email)
                        // 登陆成功跳转到首页
                        this.$router.push({name: 'home'})
                    } else {
                        this.$Message.error('账号或密码错误！');
                    }

                })
            }
        }
    }
</script>
<style scoped>
    .formBox{text-align: center;}
    p{line-height: 60px;}
    p span{display: inline-block;width:60px;text-align: right;}
    .ivu-input-wrapper{width: 350px;}
</style>