// 编辑mobx的模版
import { observable, action, computed } from 'mobx'
import moment from 'moment'

// 定义变量
class AppStore {
    @observable time = '2019'
    @observable todos = []
    @computed get desc() {
        return `${this.time}还有 ${this.todos.length}条任务待完成`
    }
    // action是改变数据的动作
    // 增加tdo
    @action addTodo(todo) {
        this.todos.push(todo)
    }
    // 删除
    @action delTodo() {
        this.todos.pop()
    }
    // 重置
    @action resetTodo() {
        this.todos = []
    }

    // 实时 获取当前时间
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

const store = new AppStore()
// 定义倒计时获取实时时间
setInterval(() => {
    store.getNow()
}, 1000)

export default store