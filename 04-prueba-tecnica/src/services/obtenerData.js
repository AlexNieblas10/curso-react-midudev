import { API } from './constants'

export const obtenerData = async () => {
  const response = await fetch(API)
  const data = await response.json()
  const { fact } = data
  return fact
}
