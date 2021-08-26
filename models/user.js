const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    tasks_lists: [{ type: Schema.Types.ObjectId, ref: 'task_lists' }]
  },
  { timestamps: true }
)

module.exports = User
