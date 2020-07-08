// API 里面已经引入来axios,在这里就不许要再次引入来  import axios from 'axios'
import API from './API'
import{ DEX_BASE_URL } from '../envconfig'

const api = new API(DEX_BASE_URL)

// 市场数据
// 爆仓
export const fetchLendBurstList = async (params) => {
  try {
    const res = await api.get('/lend/market/burst/list', { params })
    return res
  }catch(err){
    throw err.data
  }
}

// 爆仓率最高的订单
export const fetchLendBurstTop = async (params) =>{
  try{
    const res = await api.get('/lend/market/burst/top',{ params })
    return res
  }catch(err){
    throw err.data
  }
}

// 市场列表
export const fetchLendMarketList = async (params) =>{
  try{
    const res = await api.get('/lend/market/list',{ params })
    return res
  }catch(err){
    throw err.data
  }
}

//市场存款总价值
export const fetchLendMarketValue = async () => {
  try {
    const result = await api.get('/lend/market/value');
    console.log('市场存款总价值',result)
    return result
  } catch (error) {
    throw error.data
  }
}

// 存款数据
// 用户的存款数据
export const fetchDepositHistory = async (params) => {
  try {
    const result = await api.get('/lend/deposit/history/list', { params })
    console.log('用户的存款数据',result)
    return result
  } catch (error) {
    throw error.data
  }
}

// 获取存款的市场数据
export const fetchDepositMarket= async(params) =>{
  try{
    const result = await api.get('/lend/deposit/market',{params})
    console.log('api文件里面的市场存款数据',result)
    return result
  }catch(err){
    throw err
  }
}
//用户存款代币列表
export const fetchDepositUserList = async (params) => {
  try {
    const result = await api.get('/lend/deposit/user/list', { params })
    return result
  } catch (error) {
    throw error.data
  }
}

// 获取用户的贷款列表
export const fetchLoadUserList = async (params) =>{
  try{
    const result = await api.get('/lend/loan/user/list',{params})
    return result
  }catch(err){
    throw err
  }
}
