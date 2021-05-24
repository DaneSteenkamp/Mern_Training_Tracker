const router = require("express").Router();
let Profile = require("../models/profile.model");

//Retreving all Profiles from the DB
router.route("/").get((req, res) => {
  Profile.find()
    .then((profiles) => res.json(profiles))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Adding a new User to the DB
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newProfile = new Profile({ username });

  newProfile
    .save()
    .then(() => res.json("Profile Added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
