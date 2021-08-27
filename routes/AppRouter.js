const { Router } = require('express')
const controllers = require('../controllers/ExampleController')
const AppRouter = Router()

AppRouter.get('/', (req, res) => res.send('This is root!'))

AppRouter.post('/task', controllers.createTask)
AppRouter.get('/task/:id', controllers.getTaskById)

AppRouter.get('/tasklist', controllers.createTaskList)
AppRouter.get('/tasklist/:id', controllers.getTaskListById)

AppRouter.post('/users/', controllers.createUser)
AppRouter.get('/users/:userName', controllers.userByName)

module.exports = AppRouter
