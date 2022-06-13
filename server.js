const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

const mysql = require('mysql') // node-mysql module
const myConnection = require('express-myconnection') // express-myconnection module
const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'library'
};

const routes = require('./routes');

// Middlewares
app.use(myConnection(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// Routes
// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => {
    res.send('Hola mundo')
})

app.use('/api', routes)

// Server running
app.listen(port, () => console.log(`Example app listening on port ${port}!`))