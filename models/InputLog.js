const mongoose = require("mongoose");

const inputLogSchema = new mongoose.Schema(
  {
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    inputCategory: {
      type: String,
      enum: ["seeds", "fertilizer", "pesticides", "equipment"],
    },

    quantity: Number,
    unit: String,
    unitPrice: Number,

    totalCost: Number,

    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },

    purchaseDate: Date,

    location: {
      state: String,
      lga: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InputLog", inputLogSchema);
