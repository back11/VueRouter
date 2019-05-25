<template>
  <div>
    <h1>关于我们首页</h1>
    
    <Row>
        <Col span="6">
            <!-- 二级路由菜单 -->
            <Menu active-name="1">
                <MenuItem name="1" :to="{name:'delivery'}">
                    <Icon type="md-document" />
                    送餐信息
                </MenuItem>
                <MenuItem name="2" :to="{name:'history'}">
                    <Icon type="md-chatbubbles" />
                    历史订单
                </MenuItem>
                <MenuItem name="3" :to="{name:'cookBook'}">
                    <Icon type="md-chatbubbles" />
                    点餐菜谱
                </MenuItem>
                <MenuItem name="4" :to="{name:'contact'}">
                    <Icon type="md-chatbubbles" />
                    联系我们
                </MenuItem>
            </Menu>
        </Col>
        <Col span="16">
            <!-- 二级路由的内容 -->
            <router-view></router-view>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>