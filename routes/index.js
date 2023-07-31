import { Router } from "express"

import {
  getAllTheItems,
  getItemsById,
  getFilteredItems,
  createItem,
  updateOneItem,
  deleteOneItem,
} from "../controllers/index.js"

const router = Router()
export default router

router.get("/", getAllTheItems)

router.get("/:id", getItemsById)

router.get("/:property/:value", getFilteredItems)

router.post("/", createItem)

router.put("/:id", updateOneItem)

router.delete("/:id", deleteOneItem)
