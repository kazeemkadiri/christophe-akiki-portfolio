const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
