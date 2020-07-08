import React from 'react';
import {fetchLoadUserList} from '../../api/lend-api'
import { Table, Switch, message } from 'antd'
import {Link} from 'react-router-dom'
import './index.scss';

const Loan = () => {
    const account = 'pizzatestac2';
    const columns = [
		{
			title: '币种',
			key: 'symbol',
			render: (loadList: { logo: string | undefined; symbol: React.ReactNode; }) => {
				return (
					<div className="currency">
						<img src={loadList.logo} alt="" />&nbsp;&nbsp;
						<span>{loadList.symbol}</span>
					</div>
				)
			}
		},
		{
			title: '可贷总额',
			key: 'load_total',
			render: (loadList: { deposit_total: React.ReactNode; deposit_total_usd: any; }) => {
				return (
					<>
						<div className="amount">{loadList.deposit_total}</div>
						<div className="usd">≈ {(loadList.deposit_total_usd).toFixed(10)} USD</div>
					</>

				)
			}
        },
        {
			title: '贷款总额',
			key: 'can_loan_total',
            render: (loadList: { deposit_total: React.ReactNode; deposit_total_usd: any; }) => {
				return (
					<>
						<div className="amount">{loadList.deposit_total}</div>
						<div className="usd">≈ {(loadList.deposit_total_usd).toFixed(10)} USD</div>
					</>

				)
			}
        },
		{
			title: '贷款年利率(APY)',
			dataIndex: 'apr',
			key: 'apr',
			render: (apr:any) => {
				return <span className="green">{(apr * 100).toFixed(2)}%</span>
			  }
		},
		  // 操作
		  {
			title: '操作',
			width: '260px',
			// render: ({ symbol, deposit_total }) => {
				render:(loadList: { symbol: any; deposit_total: any; }) =>{
			  return (
			  <div>
				{
				  account ?
					<Link to={`/lend/bank/control?type=deposit&control=in&symbol=${loadList.symbol}`} className="Btn primary">存款</Link> :
					<span className="Btn primary disabled">存款</span>
				}
				{
					loadList.deposit_total ? 
					<Link to={`/lend/bank/control?type=deposit&control=out&symbol=${loadList.symbol}`} className="Btn">取出</Link> :
				  <span className="Btn disabled">取出</span>
				}
			  </div>)
			}
		  }
	];

    // 数据存储容器
    const [loadList,setLoadList ] = React.useState([]);
    // 定义方法结束请求参数以及各种方法
    const getLoadUserList =React.useCallback (
        async( account ) =>{
        const {data:{data}} = await fetchLoadUserList({account})
        },[]
    )
    React.useEffect(
        () => {
            getLoadUserList(account)
            console.log('打印用户数据',fetchLoadUserList())
         }, [])


    return (<>
        <h1>贷款页面</h1>
        <Table rowKey="symbol" columns={columns} dataSource={loadList || []}/>
    </>)
}

export default (Loan)