var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var { Order } = require("./mongooseModels/model.orders");
var { FinalOrder } = require("./mongooseModels/model.finalorders");
const corsOptions = {
  //these are the headres allowed
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Authorization",
    "x-auth-token", //this header is sent by react if user is logged in
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  //origin: "http://ec2-18-224-94-239.us-east-2.compute.amazonaws.com",
  // origin: "http://ec2-3-135-218-85.us-east-2.compute.amazonaws.com",
  origin: "http://localhost:3000",
  // origin: "https://www.trakouts.com",
  preflightContinue: false,
};

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var storageRouter = require("./routes/storage");
var finalOrderRouter = require("./routes/finalorder");
var faqRouter = require("./routes/faq");
//
//const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
//
var app = express();
app.use(cors(corsOptions));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/faq", faqRouter);
app.use("/order", finalOrderRouter);
app.use("/storage", storageRouter);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect("mongodb://localhost:27017/" + "trakouts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
    console.log("ERROR. In catch block of mongoose connection.");
  });
module.exports = app;
