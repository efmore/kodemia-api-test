// import files -> adding Schema & model
const { Schema, model } = require('mongoose')

// creating koders Schema
const koderSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    pattern: /^[0-9a-zA-Z]{3, 20}$/
  },
  age: {
    type: Number,
    min: 15,
    max: 100
  },
  generation: {
    type: Number,
    min: 1,
    required: true
  }
})

// exporting files
module.exports = {
  schema: koderSchema,
  model: model('Koders', koderSchema)
}
