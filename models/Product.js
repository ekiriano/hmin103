const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image :{
    type: String,
    required:true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  exerpt:{
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  category_id: { type: Schema.Types.ObjectId, ref: 'Category'},
  quantity: {
    type: Number,
    default: null
  }
});

module.exports = Product = mongoose.model("products", ProductSchema);
