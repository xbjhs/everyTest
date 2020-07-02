import React, { Component } from 'react';
import axios from 'axios'
import './index.scss';


const brorrow = () => {
    const fetchData = async () => {
        try {
            const result = await axios.get(
                'https://api.pizzadex.io/v1/lend/market/value',
            );
            console.log('ttt', result);
        }
        catch (err) {
            console.log('err信息', err)
        }
    }
    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="borrow_head">
                <div className="switch">
                    <span className="active">市场</span>
                    <span>金库</span>
                </div>
                <div className="describe">
                    <div className='title'>去中心化借贷</div>
                    <div className='desc'>PizzaLend 是一种去中心化的非托管货币市场协议，用户可以在其中充当存款人或贷款人。存款人向市场提供流动性以赚取被动收入，借款人能够以超额质押进行无限期贷款。</div>
                    <div className='value'>当前市场总价值  <span className='usd'>$100,205,000</span>≈ ￥0.00</div>
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
                            <div>利润</div>
                            <div>立即抢拍</div>
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
                            <div>立即抢拍</div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
export default (brorrow)