// @ts-check
import { Router } from "express"

import {
  getAllTheItems,
  getItemsById,
  getFilteredItems,
  createItem,
  updateOneItem,
  deleteOneItem,
} from "../controllers/index.js"

import {
  getAllTheCars,
  getCarsById,
  getFilteredCars,
  createCar,
  updateOneCar,
  deleteOneCar,
} from "../controllers/cars.js"

const router = Router()
export default router

router.get("/cars/", getAllTheCars)

router.get("/cars/:id", getCarsById)

router.get("/cars/:job/:value", getFilteredCars)

router.post("/cars/", createCar)

router.put("/cars/:id", updateOneCar)

router.delete("/cars/:id", deleteOneCar)

router.get("/", getAllTheItems)

router.get("/:id", getItemsById)

router.get("/:job/:value", getFilteredItems)

router.post("/", createItem)

router.put("/:id", updateOneItem)

router.delete("/:id", deleteOneItem)
