const { Schema } = require('mongoose')

const User = new Schema(
  {
    userName: { type: String, required: true, unique: true, sparse: true },
    tasks_lists: [{ type: Schema.Types.ObjectId, ref: 'task_lists' }]
  },
  { timestamps: true }
)

module.exports = User
