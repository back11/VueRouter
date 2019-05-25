<template>
    <div>
        <Card>
            <p slot="title">菜单列表</p>
            <ul>
                <li><span>菜名</span><span>价格</span><span>份量</span><span></span></li>
                <li v-for="item in getMenuItems" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.price}}</span>
                    <span>{{item.size}}</span>
                    <Button size="small" icon="ios-remove-circle" @click="delData(item)"></Button>
                </li>
            </ul>
        </Card>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        computed: {
            getMenuItems(){
                return this.$store.state.menuItems
            }
        },
        methods: {
            delData(item){
                axios.delete(`/menu/${item.key}.json`).then(res=>{
                    this.$store.commit('removeMenuItems', item)
                })
            }
        },
        created(){
            // 请求野狗云的商品数据，进行渲染
            axios.get('/menu.json').then(res=>{
                let menuArr = [];  //所以菜单
                for(let key in res.data){
                    // 存储key为id，后面删除要使用
                    res.data[key].key = key
                    menuArr.push(res.data[key])
                }

                // 将请求到的数据，存储到state本地
                this.$store.commit('addMenuItems', menuArr)
            })
        }
    }
</script>

<style scoped>
    li{
        list-style: none;
    }
    span{
        display: inline-block;
        width:25%;
        text-align: center;
    }
</style>