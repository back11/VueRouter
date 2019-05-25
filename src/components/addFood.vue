<template>
    <div>
        <h3>添加新的菜品</h3>
        <p>菜名：<Input v-model="newFood.name"/></p>
        <p>描述：<Input v-model="newFood.description" type="textarea"/></p>
        <p>份量：<Input v-model="newFood.size"/></p>
        <p>价格：<Input v-model="newFood.price"/></p>
        <p>数量：<Input v-model="newFood.number"/></p>
        <Button @click="addMenuItem" type="primary">添加</Button>
    </div>
</template>
<script>
import axios from "axios";
export default{
    data(){
        return{
            newFood:{}
        }
    },
    methods:{
        addMenuItem(){
            // 将对象解构，新增id属性
            let newFood = { ...this.newFood, id: new Date()-0 };

            // 将数据存储到野狗云中，然后再存储到Vuex中
            axios.post('/menu.json', newFood).then(res=>{
                this.$Message.success('成功添加商品');
                // 存储到本地
                this.$store.commit('setMenuItems', newFood)
            })
        }
    }
}
</script>
<style scoped>

  p{line-height: 70px;}
  p span{display: inline-block;width:50px;}
  .ivu-input-wrapper{width:200px!important;}
</style>