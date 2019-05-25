<template>
    <div class="box">
        <h1 class="formBox">管理页面-添加菜谱</h1>
        
        <Row>
            <Col span="16">
                <!-- 添加菜单组件 -->
                <addFood></addFood>
            </Col>
            <Col span="8">
                <!-- 展示已经添加的菜单列表 -->
                <FoodList></FoodList>
            </Col>
        </Row>
    </div>
</template>

<script>
    import addFood from "../components/addFood.vue"
    import FoodList from "../components/FoodList.vue"
    export default {
        components:{
            addFood,
            FoodList
        }   
    }
</script>

<style scoped>
    .box{
        padding:30px 50px;
    }
    .formBox{text-align: center;}
</style>