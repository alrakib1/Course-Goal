const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const goalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: [true, "Goal is required"],
    trim: true,
  },
  summary: {
    type: String,
    required: [true, "summary is required"],
    trim: true,
  },
});

const Goals = mongoose.model("Goals", goalSchema);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.url);
    console.log("Mongodb is connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(port, async () => {
  console.log(`course goal server running on : http://localhost:${port}`);
  await connectDB();
});

app.get("/", (req, res) => {
  res.send("Course Goal Server!");
});

app.post("/all", async (req, res) => {
  try {
    const newGoal = new Goals({
      goal: req.body.goal,
      summary: req.body.summary,
    });

    const newGoalData = await newGoal.save();

    res
      .status(201)
      .send({ message: "goal has been added", success: true, result: newGoalData });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/all", async (req, res) => {
    try {
      const goals = await Goals.find();
      if (goals) {
        res
          .status(200)
          .send({ message: "found all goals", success: true, result: goals });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  
