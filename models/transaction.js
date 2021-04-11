const mongoose=require('mongoose')

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required:[true,'Add text']
  },
  amount: {
    type: Number,
    required:[true, 'Added negative or positive number']
  },
  createdAt: {
    type: Date,
    default:Date.now,
  }
})

module.exports=mongoose.model('transaction',transactionSchema)