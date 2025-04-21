import axios from './axiosConfig'

// Función GET
export const getData = async (endpoint, config = {}) => {
  try {
    const response = await axios.get(endpoint, config)
    return response.data
  } catch (error) {
    throw error
  }
}

// Función POST
export const postData = async (endpoint, data, config = {}) => {
  try {
    const response = await axios.post(endpoint, data, config)
    return response.data
  } catch (error) {
    throw error
  }
}
