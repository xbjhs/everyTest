// 编辑mobx的模版
import { observable } from 'mobx'

// 定义变量
class AppStore {
    @observable time = ''
    @observable todos = []
}

const store = new AppStore()
export default store