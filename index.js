const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Set up express
const app = express();
app.use(express.json());
app.use(cors());

//Connecting to MongoDB
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

//Creating API endpoint routes
app.use("/users", require("./routes/userRouter"));

const exercisesRouter = require("./routes/exercises");
const profilesRouter = require("./routes/profiles");

app.use("/exercises", exercisesRouter);
app.use("/profiles", profilesRouter);

//Serve static assests if in production
if (process.env.NODE_ENV === "production") {
  //Set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
