const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    crops: [String],

    sizeCategory: {
      type: String,
      enum: ["small", "medium", "large"],
    },

    location: {
      state: String,
      lga: String,
      village: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Farm", farmSchema);
