import axios from 'axios'

export const getQuartos = () => {
  return axios.get('http://localhost:3000/quartos')
}

export const getQuartoById = (id) => {
  return axios.get(`http://localhost:3000/quartos/${id}`)
}

export const createQuarto = (data) => {
  return axios.post('http://localhost:3000/quartos', data)
}

export const updateQuarto = (id, data) => {
  return axios.put(`http://localhost:3000/quartos/${id}`, data)
}

export const deleteQuarto = (id) => {
  return axios.delete(`http://localhost:3000/quartos/${id}`)
}