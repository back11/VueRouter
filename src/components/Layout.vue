<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed',zIndex:999, width: '100%'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-nav">
                        <MenuItem name="1" :to="{name: 'home'}">
                            <Icon type="ios-navigate"></Icon>
                            主页
                        </MenuItem>
                        <MenuItem name="2" :to="{name: 'menu'}">
                            <Icon type="ios-keypad"></Icon>
                            菜单
                        </MenuItem>
                        <MenuItem name="3" :to="{name: 'admin'}">
                            <Icon type="ios-analytics"></Icon>
                            管理
                        </MenuItem>
                        <MenuItem name="4" :to="{name: 'about'}">
                            <Icon type="ios-paper"></Icon>
                            关于我们
                        </MenuItem>
                    </div>
                    <div class="layout-logo">
                        <MenuItem name="5" v-show="!isLogin" :to="{name: 'login'}">
                            登录
                        </MenuItem>
                        <MenuItem name="6" v-show="!isLogin" :to="{name: 'register'}">
                            注册
                        </MenuItem>
                        <MenuItem name="7" v-show="isLogin">{{currentUser}}</MenuItem>
                        <MenuItem name="8" v-show="isLogin" :to="{name:'login'}">
                            [退出]
                        </MenuItem>
                        
                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                <router-view></router-view>
                <br>

                <Row style="padding:20px">
                    <!-- 复用router-view -->
                    <Col span="8"><router-view name="cookBook"></router-view></Col>
                    <Col span="8"><router-view name="delivery"></router-view></Col>
                    <Col span="8"><router-view name="history"></router-view></Col>
                </Row>
                
                <Row style="padding:20px">
                    <!-- 复用router-view -->
                    <Col span="8"><router-view name="cookBook"></router-view></Col>
                    <Col span="8"><router-view name="delivery"></router-view></Col>
                    <Col span="8"><router-view name="history"></router-view></Col>
                </Row>
                
            </Content>
            <Footer class="layout-footer-center">2011-2019 &copy; 爱前端在线点餐系统</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        computed: {
            isLogin(){
                return this.$store.state.isLogin
            },
            currentUser(){
                return this.$store.state.currentUser
            }
        }
    }
</script>
<style scoped>
    .ivu-menu-item-active{
        background:orange;
    }
    .layout{
        position: relative;
        overflow: hidden;
    }
    .layout-logo{
        float: right;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>