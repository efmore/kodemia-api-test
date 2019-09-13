// import  files
const mongoose = require('mongoose')

// process
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

// connect to the server
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

// exporting files
module.exports = () => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
