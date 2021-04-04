const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const transactions=require('./routes/transactions')

const PORT=process.env.PORT
const app = express()


app.use('/api/v1/transactions', transactions)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} with ${process.env.NODE_MOD} mode `)
})