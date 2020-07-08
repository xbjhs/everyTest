import axios from 'axios';
import { BASE_URL } from '../../envconfig'
console.log('BASE_URL地址',BASE_URL)

/**
 * 参数详情
 * @params method {string} 请求类型
 * @params url {string} 请求地址 例：/login
 * @params BASE_URL {string} api地址
 * @params timeout {number} 请求超时时间 默认 30000
 * @params options {object} 请求配置和数据携带
 * @params headers {string} 请求头信息
 * @params Credentials {boolean} 是否携带本地cookies信息，默认开启
 * @return {Promise} //返回Promise对象
 */

export default class Server {
  axios(method, url, options) {

    const headers = {}

    return new Promise((resolve, reject) => {
      if (typeof options !== 'object') options = {};
      let _options = {
        method,
        url,
        baseURL: BASE_URL,
        timeout: 30000,
        params: null,
        data: null,
        headers,
        Credentials: true,
        ...options
      }

      axios.request(_options).then(res => {
        resolve({ list: res.data })
      }, error => {
        if (error.response) {
          reject(error.response.data)
        } else {
          reject(error)
        }
      })

    })
  }
}

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   console.log(config);
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   console.log(error);
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   console.log(response);
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   console.log(error.response);
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });