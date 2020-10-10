const express = require("express");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//const cors = require ('cors');

const morgan = require('morgan');
const path = require('path');
const { stringify } = require("querystring");

const app = express();
port = process.env.PORT || 8080;

const routes = require('./routes/api');

//ffellows - pompey

//const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = 'mongodb+srv://me:123@cluster0.le1kv.mongodb.net/users?retryWrites=true&w=majority';

//where to connect to
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

//make REQUESTS available to POST...request.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//app.use(cors()); -- using proxy instead
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(port, console.log("Backend server live on " + port));

//app.get("/", (req, res) => {
//res.send({ message: "We did it!" });
//}); 