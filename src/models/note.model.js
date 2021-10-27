const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required,
    },
    description: {
      type: String,
      required,
    },
    date: {
      type: Date,
      required,
    },
    user: {
      type: String,
      required,
    },
    priority: {
      type: String,
      required,
    },
  },
  { timestamps: true }
);
module.exports = model('note', noteSchema);
