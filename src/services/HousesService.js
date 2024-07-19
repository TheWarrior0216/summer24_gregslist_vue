import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getHouses() {
    const response = await api.get('api/houses')
    const newHomes = response.data.map(Pojo => new House(Pojo))
    AppState.houses = newHomes
  }
  async createHouse(houseData) {
    const response = await api.post('/api/houses', houseData)
    const newHome = new House(response.data)
    AppState.houses.unshift(newHome)
  }
  async editHouse(houseData, houseId) {
    const response = await api.put(`api/houses/${houseId}`, houseData)
    const housePosition = AppState.houses.findIndex((house) => houseId == house.id)
    const newHome = new House(response.data)
    AppState.houses.splice(housePosition, 1, newHome)
  }
}
export const housesService = new HousesService()