const { Router } = require('express')
const controllers = require('../controllers/ExampleController')
const AppRouter = Router()

// AppRouter.use('/examples', ExampleRouter)

module.exports = AppRouter

// const { Router } = require('express')
// const controllers = require('../controllers')
// const AppRouter = Router()

// router.get('/', (req, res) => res.send('This is root!'))

// router.get('/plants', controllers.getAllPlants)

// router.post('/plants', controllers.createPlant)

// router.get('/plants/:id', controllers.getPlantById)

// router.put('/plants/:id', controllers.updatePlant)

// router.delete('/plants/:id', controllers.deletePlant)

// module.exports = AppRouter
