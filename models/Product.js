const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  pid: { type: String, index: true, unique: true },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category_id: { type: Schema.Types.ObjectId, ref: 'Category'},
  quantity: {
    type: Number,
    default: null
  },
  tailles: [{
    taille: {
      type: String
    }
  }],
  images: [{
    path: {
      type: String
    }
  }],
});

module.exports = Product = mongoose.model("products", ProductSchema);
