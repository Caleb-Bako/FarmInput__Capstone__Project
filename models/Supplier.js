const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    name: String,
    contactPhone: String,

    location: {
      state: String,
      lga: String,
    },

    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
