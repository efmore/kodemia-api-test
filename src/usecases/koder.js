const { model: Koder } = require('../models/koder')

function create ({ name, age, generation }) {
  const newKoder = new Koder({
    name,
    age,
    generation
  })
  return newKoder.save()
}

function findAll () {
  const allKoders = Koder.find()
  return allKoders
}

async function deleteById (id) {
  const koderToDelete = await Koder.findById(id)
  const deletedKoder = await Koder.deleteOne(koderToDelete)
  return deletedKoder
}

async function patchById (id, { name, age, generation }) {
  const koderId = await Koder.findById(id)
  const updatedKoder = await Koder.updateOne(koderId, {
    name,
    age,
    generation
  })
  return updatedKoder
}
// exporting files
module.exports = {
  create,
  findAll,
  deleteById,
  patchById
}
