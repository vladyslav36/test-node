const Transaction=require('../models/transaction')

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find()
    
    return res.status(200).json({
      count: transactions.length,
      data: transactions,
      success:true
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error:'Server error'
    })
  }
}

exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body
    const transaction = await Transaction.create(req.body)
    return res.status(201).json({
      success: true,
      data:transaction
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message)
      return res.status(400).json({
        success: false,
        error:messages
      })
    } else {
      res.status(500).json({
        success: false,
        error: "Server error",
      })
    }
  }
  
  
}

exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(404).json({
        success: false,
        error: 'Not found transaction'
      })
    }
    await transaction.remove()
    return res.status(200).json({
      success: true,
      data: {}
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server error"
    })
  
  }
}
