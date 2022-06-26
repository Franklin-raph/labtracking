const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const { dbConnectinMethod } = require('./config/db')

const app = express();

// middlewares and static files
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json());
app.use('/lab', require('./routes/labroutes'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})



app.get('/registerLab', (req, res) => {
    res.render('labs/registerLab', { title : 'Register'})
})

app.use((req, res) =>{
    res.status(404).render('404', {title: '404'})
})

const port = process.env.PORT || 5050

app.listen(port, ()=>{
    dbConnectinMethod()
    console.log(`Server is running on port ${port}`)
})