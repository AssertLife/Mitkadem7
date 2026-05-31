const express = require('express')
var app = express()

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const articles = require('./routes/articles');
app.use('/articles', articles);

app.set('view engine', 'ejs');

app.listen(8080)
