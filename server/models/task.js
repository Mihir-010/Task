
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  stage: { type: String, enum: ['todo', 'in-progress', 'completed'], default: 'todo' },
  date: { type: Date, required: true },
  priority: { type: String, enum: ['high', 'medium', 'low'], required: true },
  assets: [String],
  activities: [
    {
      type: { type: String },
      activity: { type: String },
      by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
