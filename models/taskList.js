const { Schema } = require('mongoose')

const Tasklist = new Schema(
  {
    list_name: { type: String, required: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'tasks' }]
  },
  { timestamps: true }
)

module.exports = Tasklist
