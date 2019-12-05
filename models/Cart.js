const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CartSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: 'User' },
  total: { type: Number, default: 0 },
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: { type: Number, default: 1},
    price: { type: Number, default: 0},
  }],
});

module.exports = Cart = mongoose.model("carts", CartSchema);
