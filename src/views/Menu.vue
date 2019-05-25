<template>
    <div class="box">
        <h1>菜单-用户点餐界面</h1>

        <Row>
            <!-- 左侧菜单列表 -->
            <Col span="16">
                <table class="table">
                    <tr>
                        <th>编号</th>
                        <th>菜名</th>
                        <th>份量</th>
                        <th>价格</th>
                        <th>描述</th>
                        <th>加入购物车</th>
                    </tr>
                    <tr v-for="item in getMenuItems" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.size}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.description}}</td>
                        <td>
                            <Button @click="addToCart(item)" type="primary" size="small">+</Button>
                        </td>
                    </tr>
                </table>
            </Col>

            <!-- 右侧购物车列表 -->
            <Col span="8">
                <div v-if="carts.length > 0">
                    <table class="table2">
                        <tr>
                            <th>编号</th>
                            <th>菜名</th>
                            <th>份量</th>
                            <th>价格</th>
                            <th>数量</th>
                        </tr>
                        <tr v-for="item in carts" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.size}}</td>
                            <td>{{item.price}}</td>
                            <td>
                                <Button @click="minus(item)" type="primary" size="small">-</Button>
                                {{item.number}}
                                <Button @click="add(item)" type="primary" size="small">+</Button>
                            </td>
                        </tr>
                    </table>

                    <h3 class="total">总结：{{total + "RMB"}}</h3>
                    <Button type="success">提交订单</Button>
                </div>
                <div v-else>{{cartsText}}</div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data(){
            return {
                carts: [],  //购物车商品数组
                cartsText: '购物车没有任何商品'
            }
        },
        created(){
            axios.get('/menu.json').then(res=>{
                // 将请求到的数据，存储到state本地
                this.$store.commit('addMenuItems', res.data)
            })
        },
        computed: {
            // 获取菜单数据
            getMenuItems(){
                return this.$store.state.menuItems
            },
            // 计算购物车总价
            total(){
                let totalCost = 0;
                for(let key in this.carts){
                    let item = this.carts[key]
                    totalCost = item.number * item.price
                }
                return totalCost
            }
        },
        methods: {
            // 加入购物车
            addToCart(item){
                if(this.carts.length > 0){
                    // 添加到购物车前，先过滤是否有重复商品，有则叠加，没有则直接添加新商品
                    // 根据商品id判断是否重复，然后返回商品做后续处理
                    let result = this.carts.filter(itemFilter=> itemFilter.id === item.id)
                        
                    // 得到商品结果后，如果结果数组不为空，则有当前商品
                    if(result.length > 0){  
                        result[0].number++
                    }else{
                        this.carts.push(item)
                    }

                }else{
                    // 没有任何商品，则直接添加新商品到购物车
                    this.carts.push(item)
                }
                
            },
            add(item){
                item.number++
            },
            minus(item){
                item.number--
                // 购物车商品小于0，即从购物车中删除
                if(item.number <= 0){
                    this.removeCart(item)
                }
            },
            // 移除商品
            removeCart(item){
                // this.carts.splice(this.carts.indexOf(item), 1)
                this.carts = this.carts.filter(i=>i.id != item.id)
            }
        }
    }
</script>

<style scoped>
    h1{text-align: center; margin:20px 0;}
    .box{padding:20px 50px;}
    .table, .table tr, .table td, .table th{
        border-collapse: collapse; border: 1px solid #eee;
    }
    .table th, .table2 th{ height: 30px; }
    .table td{ min-width: 100px; height: 50px; text-align: center; padding:0 10px;}
    .table2 td{ width: 80px;text-align: center; }
    .number{ font-size:16px;padding:5px;line-height: 30px; }
    .total{ line-height: 50px; color:green; }
</style>