const mongoose = require("mongoose"); // Schema that tells the DB what the data for each User should look like

const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      trim: true,
      unique: true,
      timestamps: true,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
