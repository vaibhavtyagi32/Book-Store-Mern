const express = require('express');
const cors = require('cors');
const connect = require('./connection');
const book = require('./routes/books')
const app = express();
connect();
app.use(cors())
app.use(book)
app.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('server is running on 3000')
    }
})