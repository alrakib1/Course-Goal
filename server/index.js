const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Course Goal Server!");
});

app.listen(port, () => {
  console.log(`course goal server running on : http://localhost:${port}`);
});




const goalSchema = new mongoose.Schema({
    goal: {
        type: String,
        required: [true, "Goal is required"],
        trim: true
    },
    summary:{
        type: String,
        required: [true, "summary is required"],
        trim: true
    }
})


const GoalMode = mongoose.model("Goals",goalSchema);


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.url);
        console.log('Mongodb is connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
