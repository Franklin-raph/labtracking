const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const { dbConnectinMethod } = require('./config/db')

const app = express();

// middlewares
app.use(morgan('dev'))
app.use(express.json());

app.use('/lab', require('./routes/labroutes'))

app.get('/', (req, res) => {
    res.send("Hello world")
})

const port = process.env.PORT || 5050

app.listen(port, ()=>{
    dbConnectinMethod()
    console.log(`Server is running on port ${port}`)
})