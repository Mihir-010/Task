const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  text: { type: String, required: true },
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
});

module.exports = mongoose.model('Notification', notificationSchema);
