import PersonModel from "../models/Person.js"

export async function createNewPerson(person) {
  const created = await PersonModel.create(person)
  return created.toJSON()
}

export async function getAllPeople() {
  return await PersonModel.find().lean()
}

export async function getOnePersonById(id) {
  return await PersonModel.findById(id).lean()
}

export async function getFilteredPersonList(property, value) {
  return await PersonModel.findOne({ [property]: value }).lean()
}

export async function updateOnePerson(id, updates) {
  return await PersonModel.findByIdAndUpdate(id, updates, { new: true }).lean()
}

export async function deleteOnePerson(id) {
  return await PersonModel.deleteOne({ _id: id }).lean()
}
