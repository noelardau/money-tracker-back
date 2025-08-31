var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


let wallet_router = require("./routes/wallet")
let expense_router = require("./routes/expense")
let income_router = require("./routes/income")

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api.wallets/', wallet_router);
app.use("/api.expenses/", expense_router)
app.use("/api.incomes/", income_router)


module.exports = app;
