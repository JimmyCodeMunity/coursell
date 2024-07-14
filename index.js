const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require('./routes/UserRoute');
const courseRoute = require('./routes/CourseRoute');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "./.env",
  });
}
const port = 8000;
// const port = process.env.PORT;
const dbconnection = process.env.mongoURL;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});

// Connect to MongoDB
mongoose
  .connect(dbconnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use(cors());
app.use(bodyParser.json());


//prepare routes
app.use('/api/v1/users',userRoute);
app.use('/api/v1/courses',courseRoute);
