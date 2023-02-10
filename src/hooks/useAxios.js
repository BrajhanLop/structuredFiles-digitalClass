import axios from 'axios'
import {useEffect, useState} from 'react'

const useAxios = (url, method = 'GET', body = null) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      let res
      switch (method) {
        case 'GET':
          res = await axios.get(url)
          break
        case 'POST':
          res = await axios.post(url, body)
          break
        case 'PUT':
          res = await axios.put(url, body)
          break
        case 'DELETE':
          res = await axios.delete(url)
          break
        default:
          throw new Error(`Unsupported method: ${method}`)
      }
      setResponse(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {fetchData, response, error, loading}
}
export default useAxios
