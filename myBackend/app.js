var express = require("express");
// var path = require("path");
const logger = require("morgan");
const cors = require("cors");
const bcrypt = require("bcrypt")

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var todoRouter = require("./routes/todo");
var authRouter = require("./routes/auth");
var tokenCheck = require("./middleware/tokenCheck")


const mongoClient = require("mongodb").MongoClient;
const client = new mongoClient(
    "mongodb+srv://bipin:1234@cluster0.p1i7n.mongodb.net?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
);
let connection;

var app = express();

// view engine setup
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

//database connection
app.use("/", (req, res, next) => {  //TODO: I want to understand this function
    if (!connection) {
        // connect to database
        client.connect(function (err) {
            connection = client.db("AuthProject");
            req.db = connection;
            next();
        });
    } else {
        //
        req.db = connection;
        next();
    }
});

// app.use(express.urlencoded({ extended: false })); // TODO: What is this actually used for?? when data we sent are url encoded. Not generally done these days.

// app.use(express.static(path.join(__dirname, 'public')));// TODO: In what cases we might use public folder in express?? If we want to load some static content from the backend. May be the frontend static app from the server.

/*routes*/
app.use(tokenCheck);//middleware

app.use("/", indexRouter);

app.use("/auth", authRouter);
// app.use("/users", usersRouter);
app.use("/todo", todoRouter);

// error handler
app.use(function (err, req, res, next) {
  res.status(500).json({ err: "serverside Error" });
});

module.exports = app;
app.listen(3000);
