import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentUser: null,  //当前登录的用户
		isLogin: false,      //当前登录状态
		//菜单的假数据
		menuItems: [] 
	},
	mutations: {
		// 设置用户的账号显示在页面中
		setUser(state, payload){
			state.currentUser = payload
		},
		setLogin(state, payload){
			state.isLogin = payload
		},
		addMenuItems(state, payload){
			state.menuItems = payload
		},
		setMenuItems(state, payload) {
			state.menuItems.push(payload)
		},
		removeMenuItems(state, payload){
			state.menuItems = state.menuItems.filter(item=>item.id != payload.id)
		}
	},
	actions: {
		setUser({ commit }, payload) {
			// 设置用户的登陆状态是退出还是登陆
			if(payload){
				commit('setUser', payload )
				commit('setLogin', true )
			}else{
				commit('setUser', null)
				commit('setLogin', false)
			}
		}
	}
})
