const mongoose = require("mongoose");

const priceRecordSchema = new mongoose.Schema(
  {
    inputName: String,

    category: String,

    price: Number,

    location: {
      state: String,
      lga: String,
    },

    supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PriceRecord", priceRecordSchema);
