<template>
    <div class="formBox">
        <img src="/img/icon.png">
        <form @submit.prevent="onSubmit">
            <p>
                <span>邮箱：</span> <Input type="email" v-model="email" />
            </p>
            <p>
                <span>密码：</span><Input type="password" v-model="password" />
            </p>
            <p>
                <span>确认密码：</span> <Input type="password" v-model="confirmPassword" />
            </p>
            <Button type="success" html-type="submit">注册</Button>
        </form>
    </div>
</template>
<script>
    import axios from "axios"
    export default{
        data(){
            return {
                email:'',
                password:'',
                confirmPassword: ''
            }
        },
        methods:{
            onSubmit(){
                if(this.email == '' || this.password == '' || this.confirmPassword == ''){
                    this.$Message.error('账号密码不能为空！');
                    return;
                }
                
                // 判断两次填写的密码是否一致
                if(this.password == this.confirmPassword){
                    const formData = {
                        email: this.email,
                        password: this.password,
                        confirmPassword: this.confirmPassword
                    }

                    // 两次密码一致，则注册（将账号密码存储到野狗云数据库）
                    axios.post('/users.json', formData).then(res=>{
                        this.$Message.success('注册成功，即将跳转到登录页面');
                        setTimeout(() => {
                            this.$router.push({name: 'login'})
                        }, 500);
                    })

                }else{
                    this.$Message.error('两次密码不一致');
                }
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