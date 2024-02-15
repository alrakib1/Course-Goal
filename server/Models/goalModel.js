const { default: mongoose } = require("mongoose");

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "description is required"],
    trim: true,
  },
});

const Goals = mongoose.model("Goals", goalSchema);

module.exports = Goals;
