const { Router } = require('express')
const controllers = require('../controllers/ExampleController')
const AppRouter = Router()

//AppRouter.get('/', (req, res) => res.send('This is root!'))

AppRouter.post('/task', controllers.createTask)
AppRouter.get('/task/:id', controllers.getTaskById)

AppRouter.post('/users/:userName/taskLists', controllers.createTaskList)
AppRouter.get('/users/:userName/taskLists', controllers.getTaskListByUserName)
AppRouter.get('/users/:userName/taskLists/:id', controllers.getTaskListById)

AppRouter.post('/users', controllers.createUser)
AppRouter.get('/users/:userName', controllers.userByName)

module.exports = AppRouter
