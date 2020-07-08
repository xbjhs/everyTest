import React from 'react';
import { Button, Table } from 'antd'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'
import { fetchLendMarketList, fetchLendBurstList } from '../../api/lend-api'
import './index.scss';


const Brorrow = () => {
	// 定义列表数据
	const columns: any = React.useMemo(() => [
		{
			title: '币种',
			key: 'symbol',
			  render: (data: { logo: string | undefined; symbol: React.ReactNode; }) => {
				return (
					<div className="currency">
						<img src={data.logo} alt="" />&nbsp;&nbsp;
						<span>{data.symbol}</span>
					</div>
				)
			}
		},
		{
			title: '市场总额',
			key: 'deposit_total',
			dataIndex: 'deposit_total',
			render: (deposit_total: any) => `$${deposit_total}`
		},
		{
			title: '借贷总额',
			key: 'loan_total',
			dataIndex: 'loan_total',
			render: (loan_total: any) => `$${loan_total}`
		},
		{
			title: `存款年利率(APY)`,
			key: 'apy',
			dataIndex: 'apy',
			render: (apy: any) => `${((apy || 0) * 100).toFixed(2)}%`
		},
		{
			title: `贷款年利率(APR)`,
			key: 'apr',
			dataIndex: 'apr',
			align: 'right',
			render: (apr: any) => `${((apr || 0) * 100).toFixed(2)}%`
		},
	], [])
	// 列表数据
	const [data, setData] = React.useState([]);

	const getLendMarketValue = React.useCallback(
		async () => {
			try {
				const { data } = await fetchLendMarketList();
				console.log('datashuju', data)
				setData(data);
				console.log('111111datashuju', data)
			} catch (err) {
				console.log('err数据', err)
			}
		}, []);
	// 一进来就加载数据
	React.useEffect(() => {
		getLendMarketValue()
	}, [])



	React.useEffect(() => {
		fetchLendMarketList()
	}, [])

	const handleClick = (e: any) => {
		console.log('打印事件对象', e)
	}
	return (
		<>
			<div className="borrow_head">
				<div className="switch">
					<span className="active">市场</span>

					<Link className="vault" to="/valut">
						<span onClick={(e) => { handleClick(e) }}>金库</span>
					</Link>
				</div>
				<div className="describe">
					<div className='title'>去中心化借贷</div>
					<div className='desc'>PizzaLend 是一种去中心化的非托管货币市场协议，用户可以在其中充当存款人或贷款人。存款人向市场提供流动性以赚取被动收入，借款人能够以超额质押进行无限期贷款。</div>
					<div className='value'>当前市场总价值  <span className='usd'>$100,205,000</span>≈ ￥0.00</div>
					<li><CountUp start={0} end={1207800} />&emsp;Tor</li>
				</div>
			</div>
			<div className='contant'>
				<div className="liquidation">
					<div className='bd_text'>
						<div>清算拍卖&nbsp;&nbsp;&nbsp;&nbsp;</div>
						<div className='pro_savg'>历史平均利润率：
                            <span>8.02%</span>
						</div>
					</div>
					<div className='more'>更多订单 &gt;</div>
				</div>


				<div className='sub'>
					<div className="blowing">
						<div className="bl_text">
							<div>爆仓时间
                                <div className='specific'>2020/02/02 20:50:20</div>
							</div>
							<div>可拍下数量
                                <div className='specific'>30000.27294</div>
							</div>
							<div>仓位剩余
                                <div className='specific'>100.0214</div>
							</div>
						</div>
						<div className="bl_rob">
							<div>利润&nbsp;&nbsp;<span className='pro_value'>15.85%</span></div>
							<Button type="primary">立即抢拍</Button>
						</div>
					</div>
					<div className="blowing">
						<div className="bl_text">
							<div>爆仓时间
                            <div className='specific'>2020/02/02 20:50:20</div>
							</div>
							<div>可拍下数量
                            <div className='specific'>30000.27294</div>
							</div>
							<div>仓位剩余
                            <div className='specific'>100.0214</div>
							</div>
						</div>
						<div className="bl_rob">
							<div>利润</div>
							<Button type="primary">立即抢拍</Button>
						</div>
					</div>
				</div>
			</div>
			<Table dataSource={data} columns={columns} />;
		</>


	)
}
export default (Brorrow)