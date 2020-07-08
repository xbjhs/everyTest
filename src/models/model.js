import { actions } from 'mirrorx'
import axios from 'axios'
import NP from 'number-precision'
import * as API from '../api/lend-api.js'

// 定义模型
export default {
    name: 'model', // 这里写的名字将会成为状态仓库的名称
    initialState: { // 这里可以写初始化时状态机里的初始状态
    	free:{
            times: 10,
            switch_status: 0,
        }
	},
    // reducer：状态机处理函数
    reducers: {
    	// 这个updateState是默认的，它用来主动更新状态机里的各种状态
    	// state和data都是Object对象
    	// state是框架传入的，开发者调用的时候，data才是对应的第一个参数
    	// ...是ES6的对象扩展运算符，后面...data会自动覆盖...state的同名属性
        updateState: (state, data) => ({ ...state, ...data })
        // 后面还可以写其他的reducer，切记第一个参数一定是state
    },
    effects: {
    	// 动作处理函数：获取商品
    	// param是对象，getState是框架传入的函数对象，用来方便获取当前状态机的状态
    	// 开发者调用的时候，不用给getState形参赋值
        async GetGoods(param, getState) {
        	// Promise的同步操作运算，获取Axios返回的data
            let { data } = await axios.GetGoodsApi(param);
            // 调用当前状态机的updateState方法（也就是上面写的那个函数）
            // 由调用可见，只放了一个Object类型的参数
            actions.GoodsManager.updateState({ goods: data.data });
        }
    }
  }
