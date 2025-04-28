import axiosInstance from './axiosConfig'

// Función GET
export const getData = async (endpoint, config = {}) => {
  const response = await axiosInstance.get(endpoint, config)
  return response.data
}

// Función POST
export const postData = async (endpoint, data, config = {}) => {
  const response = await axiosInstance.post(endpoint, data, config)
  return response.data
}
