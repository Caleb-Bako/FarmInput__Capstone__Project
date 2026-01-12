const mongoose = require("mongoose");

const groupMemberSchema = new mongoose.Schema(
  {
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },

    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    quantity: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("GroupMember", groupMemberSchema);
