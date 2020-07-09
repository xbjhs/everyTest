import React from 'react';
import moment from 'moment'
// 注入
import { inject, observer } from 'mobx-react'
import './index.scss';
import store from '../../store';
//  @observer将注入进来的store进行观察.里面的状态发生改变,这边也可以进行响应的改变
@inject('store') @observer
export default class Test extends React.Component {
    constructor(props) {
        console.log('props打印', props)
        super(props)
        this.state = {}
    }
    // 定义具体的方法
    addTodos = () => {
        store.addTodo('一条新任务')
    }
    delTodos = () => {
        store.delTodo()
    }
    resetTodos = () => {
        store.resetTodo()
    }
    // 定义
    render() {
        let { store } = this.props;
        return (
            <div className="test_head" >
                <h1 className='test'>测试mobx</h1>
                <div>{store.desc}</div>
                <div className='option'>
                    <button onClick={() => this.addTodos()}>添加任务</button>
                    <button onClick={() => this.delTodos()}>删除任务</button>
                    <button onClick={() => this.resetTodos()}>任务重置</button>
                </div>
                {
                    store.todos.map((ele, index, arr) => {
                        return (
                            <div key={index}>{ele}</div>
                        )
                    })
                }
            </div>

        )
    }

}

