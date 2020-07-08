// 定义接口请求的基本内容
import axios from 'axios';

export class Instance {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: 30000,
      withCredentials: false
    })
  }
  axios(method, url, config = {}) {
    return this.instance.request({
      method,
      url,
      ...config
    }).then(({data}) => {
      return Promise.resolve(data)
    }, error => {
      return Promise.reject(error.response ? error.response : error)
    })
  }
}

class API extends Instance {
  //发起get请求
  async get(url, config) {
    try {
      return await this.axios('GET', url, config)
    } catch (err) {
      throw err
    }
  }

  //发起post请求
  async post(url, data, config) {
    try {
      return await this.axios('POST', url, { data, ...config })
    } catch (err) {
      throw err
    }
  }

}

export default API
