// @ts-check

import CarModel from "../models/Car.js"

export async function createNewCar(person) {
  const created = await CarModel.create(person)
  return created.toJSON()
}

export async function getAllCars() {
  return await CarModel.find().lean()
}

export async function getOneCarById(id) {
  return await CarModel.findById(id).lean()
}

export async function getFilteredCarList(property, value) {
  return await CarModel.findOne({ [property]: value }).lean()
}

export async function updateCar(id, updates) {
  return await CarModel.findByIdAndUpdate(id, updates, { new: true }).lean()
}

export async function deleteCar(id) {
  return await CarModel.deleteOne({ _id: id }).lean()
}
