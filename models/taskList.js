const { Schema } = require('mongoose')

const TaskList = new Schema(
  {
    list_name: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'tasks' }]
  },
  { timestamps: true }
)

module.exports = TaskList
