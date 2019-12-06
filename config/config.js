const express = require('express')
const faker = require('faker')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs');
app.use(expressLayouts);           
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/public'))

module.exports = app;