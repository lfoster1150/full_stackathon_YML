// Reqiure Models Here
const { User, TaskList, Task } = require('../models/index')

const createTask = async (req, res) => {
  try {
    const task = await new Task(req.body)
    await task.save()
    return res.status(201).json({
      task
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findById(id)
    if (task) {
      return res.status(200).json({ task })
    }
    return res.status(404).send('Task with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createTaskList = async (req, res) => {
  try {
    const attachedUser = await User.find({ userName: req.params.userName })
    const newTaskList = await TaskList.create(req.body)
    console.log(attachedUser.tasksLists)
    // attachedUser.tasksLists.push(newTaskList)
    // attachedUser.save()
    //.push(newTaskList)

    // const newUser = await User.create(req.body)
    // await newUser.save()

    return res.status(201).json({
      newTaskList
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getTaskListById = async (req, res) => {
  try {
    const { id } = req.params
    const taskList = await TaskList.findById(id)
    if (taskList) {
      return res.status(200).json({ taskList })
    }
    return res
      .status(404)
      .send('Task list with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTaskListByUserName = async (req, res) => {
  try {
    const { userName } = req.params
    const taskLists = await User.find({ userName: userName })
    if (taskList) {
      return res.status(200).json({ taskList })
    }
    return res
      .status(404)
      .send('Task list with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const userByName = async (req, res) => {
  try {
    const { userName } = req.params
    const userByName = await User.find({ userName: userName })
    if (userByName) {
      return res.status(200).json({ userName })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// post request
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    await newUser.save()
    if (newUser) {
      return res.status(200).json({ newUser })
    }
    return res.status(404).send('User with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getUserByNameId = async (req, res) => {
  try {
    const { id } = req.params
    const getUserByNameId = await User.findById(id)
    if (getUserByNameId) {
      return res.status(200).json({ getUserByNameId })
    }
    return res
      .status(404)
      .send('Task list with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createTask,
  createTaskList,
  getTaskById,
  getTaskListById,
  userByName,
  createUser,
  getUserByNameId,
  getTaskListByUserName
}
