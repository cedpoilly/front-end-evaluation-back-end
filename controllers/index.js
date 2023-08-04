import dotenv from "dotenv"

import {
  getAllPeople,
  getOnePersonById,
  getFilteredPersonList,
  createNewPerson,
  updateOnePerson,
  deleteOnePerson,
} from "../services/index.js"

dotenv.config()

export async function getAllTheItems(_, res) {
  const list = await getAllPeople()
  console.log("list", list)
  const delay = process.env.DELAY_ON_FETCH_ALL ?? 0
  setTimeout(() => res.status(200).json(list), delay)
}

export async function getItemsById(req, res) {
  const { id } = req.params
  const item = await getOnePersonById(id)
  res.status(200).json(item)
}

export async function getFilteredItems(req, res) {
  const { property, value } = req.params
  return await getFilteredPersonList(property, value)
}

export async function createItem(req, res) {
  const item = req.body
  try {
    const createdItem = await createNewPerson(item)
    res.status(201).json(createdItem)
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: error.message })
  }
}

export async function updateOneItem(req, res) {
  const { id } = req.params
  const item = req.body
  const updated = await updateOnePerson(id, item)
  res.status(200).json(updated)
}

export async function deleteOneItem(req, res) {
  const { id } = req.params
  const response = await deleteOnePerson(id)
  res.status(200).json(response)
}
