const path=require('path')
const express = require('express')
const dotenv = require('dotenv')
const connDb = require('./config/db')
const morgan = require('morgan')
const cors=require('cors')

dotenv.config({ path: './config/config.env' })

const transactions = require('./routes/transactions')

connDb()


const PORT=process.env.PORT
const app = express()

app.use(cors())

app.use(express.json())

if (process.env.MODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use('/api/v1/transactions', transactions)

if (process.env.NODE_MOD === 'production') {
  app.use(express.static('client/build'))

  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} with ${process.env.NODE_MOD} mode `)
})