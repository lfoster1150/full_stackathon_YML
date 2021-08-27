const { Schema } = require('mongoose')

const User = new Schema(
  {
    userName: { type: String, required: true, unique: true, sparse: true },
    tasksLists: [{ type: Schema.Types.ObjectId, ref: 'tasksLists' }]
  },
  { timestamps: true }
)

module.exports = User
