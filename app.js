var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")


let wallet_router = require("./routes/wallet")
let expense_router = require("./routes/expense")
let income_router = require("./routes/income")
let user_router = require("./routes/user")

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api.wallets/', wallet_router);
app.use("/api.expenses/", expense_router)
app.use("/api.incomes/", income_router)
app.use("/api.users/", user_router)


module.exports = app;
