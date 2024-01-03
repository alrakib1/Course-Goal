const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  exposedHeaders: "*",
};



app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("Course Goal Server!");
});

app.listen(port, async () => {
  console.log(`course goal server running on : http://localhost:${port}`);
  await connectDB();
});


app.post("/all", async (req, res) => {
  try {
    const newGoal = new Goals({
      title: req.body.enteredGoal,
      description: req.body.enteredSummary,
    });

    // console.log(newGoal)

    const newGoalData = await newGoal.save();

    res.status(201).send({
      message: "goal has been added",
      success: true,
      result: newGoalData,
    });
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

app.delete("/all/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const goal = await Goals.deleteOne({ _id: id });
    if (goal) {
      res
        .status(200)
        .send({ message: "deleted the goal", success: true, result: goal });
    }
  } catch (error) {}
});
