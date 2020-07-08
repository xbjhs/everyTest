import React from 'react';
import { Tabs } from 'antd';
import './index.scss';
// 引入存款贷款页面
import Deposit from '../Deposit'
import Loan from '../Loan'
// 创建组件
const Valut = () => {
    // 导航栏的切换使用
    const { TabPane } = Tabs;
    function callback(key:any) {}
    const Demo = () => (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="存款" key="1">
                <Deposit />
          </TabPane>
            <TabPane tab="贷款" key="2">
            <Loan />
          </TabPane>
        </Tabs>
    );
    return (
        <>
         <Demo />
        </>
   )


}
export default (Valut)