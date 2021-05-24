const router = require("express").Router();
let Exercise = require("../models/exercise.model");

//Retreving all Exercises from the DB
router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Adding a new Exersise to the DB
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise Added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Returns a single exeercise from db by using the unique id
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Delete's a exersise from the DB by using the unique id
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercises) => res.json("Exersise Deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Allows the user to edit a exersise by using the unique id
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id).then((exercise) => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise
      .save()
      .then(() => res.json("Exercise Updated"))
      .catch((err) => res.status(400).json("Error:" + err));
  });
});

module.exports = router;
