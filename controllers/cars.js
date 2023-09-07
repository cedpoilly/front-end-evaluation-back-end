// @ts-check

import dotenv from "dotenv"

import {
  getAllCars,
  getOneCarById,
  getFilteredCarList,
  createNewCar,
  updateCar,
  deleteCar,
} from "../services/cars.js"

dotenv.config()

export async function getAllTheCars(_, res) {
  try {
    const list = await getAllCars()
    res.status(200).json(list)
  } catch (error) {
    console.log("Failed to fetch list.")
  }
}

export async function getCarsById(req, res) {
  const { id } = req.params
  const item = await getOneCarById(id)
  res.status(200).json(item)
}

export async function getFilteredCars(req, res) {
  const { property, value } = req.params
  return await getFilteredCarList(property, value)
}

export async function createCar(req, res) {
  const item = req.body
  console.log(`createCar: item:`, item)
  try {
    const createdCar = await createNewCar(item)
    res.status(201).json(createdCar)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: error.message })
  }
}

export async function updateOneCar(req, res) {
  const { id } = req.params
  const item = req.body
  const updated = await updateCar(id, item)
  res.status(200).json(updated)
}

export async function deleteOneCar(req, res) {
  const { id } = req.params
  const response = await deleteCar(id)
  res.status(200).json(response)
}
