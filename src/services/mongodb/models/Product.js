import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  listPrice: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  compatibleWith: [
    {
      type: String
    }
  ],
  category: {
    type: mongoose.Types.ObjectId,
    ref: "category"
  },
  imageUrl: {
    type: String
  },
  stock: {
    type: Number,
    required: true
  },
  review: [
    {
      type: mongoose.Types.ObjectId,
      ref: "reviews"
    }
  ]
})

const Product = mongoose.model('Product', ProductSchema)

export default Product

