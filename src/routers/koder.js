const express = require('express')

const router = express.Router()
const Koder = require('../usecases/koder')

router.post('/', async (req, res) => {
  const {
    name,
    age,
    generation
  } = req.body

  const newKoder = await Koder.create({
    name,
    age,
    generation
  })

  res.json({
    succes: true,
    message: 'post created',
    data: {
      post: newKoder
    }
  })
})

router.get('/', async (req, res) => {
  const allKoders = await Koder.findAll()

  res.json({
    succes: true,
    message: 'all koders',
    data: {
      koders: allKoders
    }
  })
})

router.delete('/:index', async (req, res) => {
  const { id } = req.params

  const deleteKoder = await Koder.deleteById(id)

  res.json({
    message: `Koder with id  ${id} was deleted`,
    data: {
      post: deleteKoder
    }
  })
})

router.patch('/:id', async (request, response) => {
  const { id } = request.params
  const {
    name,
    age,
    generation
  } = request.body

  const patchedKoder = await Koder.updateById(id, {
    name,
    age,
    generation
  })

  response.json({
    success: true,
    message: `Koder with id ${id} updated with changes:`,
    data: {
      post: patchedKoder
    }
  })
})

module.exports = router
