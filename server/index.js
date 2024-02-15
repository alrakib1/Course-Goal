const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const Goals = require("./Models/goalModel");
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

connectDB();

app.post("/all", async (req, res) => {
  try {
    const newGoal = new Goals({
      title: req.body.enteredGoal,
      description: req.body.enteredSummary,
    });

    const newGoalData = await newGoal.save();

    return res.status(201).send({
      message: "goal has been added",
      success: true,
      result: newGoalData,
    });
  } catch (error) {
    console.error("Error adding goal:", error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get("/all", async (req, res) => {
  try {
    const goals = await Goals.find();
    return res.status(200).send({
      message: "found all goals",
      success: true,
      result: goals,
    });
  } catch (error) {
    console.error("Error fetching goals:", error.message);
    res.status(500).send({ message: error.message });
  }
});

app.delete("/all/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const goal = await Goals.findOneAndDelete({ _id: id });
    if (goal) {
      return res.status(200).send({
        message: "deleted the goal",
        success: true,
        result: goal,
      });
    } else {
      return res.status(404).send({
        message: "goal not found",
        success: false,
      });
    }
  } catch (error) {
    console.error("Error deleting goal:", error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Course Goal Server!");
});

app.listen(port, () => {
  console.log(`course goal server running on : http://localhost:${port}`);
});
