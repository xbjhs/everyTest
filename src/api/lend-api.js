import axios from 'axios'
export const fetchLendMarketValue = async () => {
    try {
      const result = await api.get('/lend/market/value')
      return result
    } catch (error) {
      throw error.data
    }
  }