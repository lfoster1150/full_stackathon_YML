const { Schema } = require('mongoose')

const Task = new Schema(
  {
    task_title: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Task
