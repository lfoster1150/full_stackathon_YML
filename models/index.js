const { model } = require('mongoose')
const UserSchema = require('./user')
const TaskListSchema = require('./taskList')
const TaskSchema = require('./task')

const User = model('users', UserSchema)
const TaskList = model('task_lists', TaskListSchema)
const Task = model('tasks', TaskSchema)

module.exports = {
  User,
  TaskList,
  Task
}
