import { model, Schema } from "mongoose"

const personSchema = new Schema({
  firstName: { type: String, required: true, minLength: 2, maxLength: 10 },

  lastName: { type: String, required: true, minLength: 2, maxLength: 10 },

  age: { type: Number, required: true, min: 0 },

  job: { type: String, required: true, minLength: 5, maxLength: 10 },
})

export default model("Person", personSchema)
