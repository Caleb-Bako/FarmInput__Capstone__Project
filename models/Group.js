const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    inputType: String,
    cropType: String,

    targetQuantityPerMember: Number,

    deliveryTimeframe: String,

    status: {
      type: String,
      enum: ["open", "locked", "completed"],
      default: "open",
    },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Group", groupSchema);
