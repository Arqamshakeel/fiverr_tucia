var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

//var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
//
//const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
//
var app = express();
app.use(cors());
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

//app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
const mongoURI = "mongodb://localhost/mongouploads";

mongoose
  .connect("mongodb://localhost/mongouploads2", {
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

// const conn = mongoose.createConnection(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const conn = mongoose.connection;

let gfs;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

//create storge engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
  console.log("hello");
  console.log(req.file);
});
app.get("/data", (req, res) => {
  console.log("hello g");
  return res.send("hello");
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

module.exports = app;
