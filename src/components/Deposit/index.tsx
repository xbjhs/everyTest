import React from 'react';
import './index.scss';
import { Table, Switch, message } from 'antd'
import { Link } from 'react-router-dom'
import { connect } from 'mirrorx'
//引入数据

import { fetchDepositHistory, fetchDepositMarket, fetchDepositUserList } from '../../api/lend-api'

const Deposit = (props: any) => {
	// 定义用户名
	const account = 'pizzatestac2';
	// 定义table的数据源
	const [depositData, setDepositData] = React.useState([]);

	const columns = [
		{
			title: '币种',
			key: 'symbol',
			render: (depositData: { logo: string | undefined; symbol: React.ReactNode; }) => {
				return (
					<div className="currency">
						<img src={depositData.logo} alt="" />&nbsp;&nbsp;
						<span>{depositData.symbol}</span>
					</div>
				)
			}
		},
		{
			title: '存款总额',
			key: 'deposit_total',
			render: (depositData: { deposit_total: React.ReactNode; deposit_total_usd: any; }) => {
				return (
					<>
						<div className="amount">{depositData.deposit_total}</div>
						<div className="usd">≈ {(depositData.deposit_total_usd).toFixed(10)} USD</div>
					</>

				)
			}
		},
		{
			title: '存款年利率(APY)',
			dataIndex: 'pledge_switch',
			key: 'pledge_switch',
			render: (apy:any) => {
				return <span className="green">{(apy * 100).toFixed(2)}%</span>
			  }
		},
		{
			title: '用做抵押物',
			key: 'pledge_switch',
			// render: ({ deposit_total_usd, symbol, sym, pledge_switch, is_pledge }) => {
				render: (depositData: { is_pledge: any; deposit_total_usd: any; pledge_switch: any; }) => {
			  return depositData.is_pledge && depositData.deposit_total_usd 
			  ? 
			  <Switch checkedChildren='开' unCheckedChildren='关' defaultChecked={!!depositData.pledge_switch} 
			//   onChange={e => onChange(e, symbol, sym)} 
			  /> 
			  : '-'
			}
		  },
		  // 操作
		  {
			title: '操作',
			width: '260px',
			// render: ({ symbol, deposit_total }) => {
				render:(depositData: { symbol: any; deposit_total: any; }) =>{
			  return (
			  <div>
				{
				  account ?
					<Link to={`/lend/bank/control?type=deposit&control=in&symbol=${depositData.symbol}`} className="Btn primary">存款</Link> :
					<span className="Btn primary disabled">存款</span>
				}
				{
					depositData.deposit_total ? 
					<Link to={`/lend/bank/control?type=deposit&control=out&symbol=${depositData.symbol}`} className="Btn">取出</Link> :
				  <span className="Btn disabled">取出</span>
				}
			  </div>)
			}
		  }
	];

	// 定义一个方法,当发生情况的时候会再次去请求数据
	const getDepositUserList = React.useCallback(
		async (account: string) => {
			const { data:{data} } = await fetchDepositUserList({ account });
			setDepositData(data);
		}, []
	);
	React.useEffect(() => {
		if (account) {
			getDepositUserList(account)
		}
	}, [account]);

console.log('set之后的数据', depositData)
	return (<>
		<div className="deposit">
			<div className="head">
				<div className="sum">存款总额
				<div className="number">
						<span style={{ color: '#202040', fontSize: "30px" }}>8,789,876</span>.0009801477 USD
				</div>
					<div>≈ 700,025,254.1477 EOS</div>
				</div>
				<div className='composition'>
					<span style={{ display: 'inline-block', textAlign: 'left', width: "100%" }}>
						<span>存款组成</span>
						<div style={{ height: "30px", borderRadius: "30px", background: 'red' }}></div>
					</span>
				</div>
			</div>
			{/* 表格数据 */}
			<Table rowKey="symbol" columns={columns} dataSource={depositData || []}/>
		</div>
	</>)
}

export default (Deposit)