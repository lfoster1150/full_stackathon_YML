const { Router } = require('express')
const ExampleController = require('../controllers/ExampleController')
const ExampleRouter = Router()

ExampleRouter.get('/get', ExampleController.GetExample)
ExampleRouter.get('/post', ExampleController.PostExample)
ExampleRouter.get('/put', ExampleController.UpdateExample)
ExampleRouter.get('/delete', ExampleController.DeleteExample)

module.exports = ExampleRouter
