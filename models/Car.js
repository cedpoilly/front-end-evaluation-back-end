import { model, Schema } from "mongoose"

const carSchema = new Schema({
  brand: { type: String, required: true, minLength: 4, maxLength: 15 },
  model: { type: String, required: true, minLength: 1, maxLength: 15 },
  year: { type: Number, required: true, min: 1950 },
  color: { type: String, required: true, minLength: 1, maxLength: 15 },
  mpg: { type: Number, required: true, min: 0 },
  isNew: { type: Boolean, default: true },
})

export default model("Car", carSchema)
