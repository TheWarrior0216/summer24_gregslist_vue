export class House {
  constructor(data) {
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.price = data.price
    this.description = data.description
    this.year = data.year
    this.levels = data.levels
    this.imgUrl = data.imgUrl || ''
    this.id = data.id
    this.creatorId = data.creatorId
  }
}