const express = require('express');
const app = express ();
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors());
// We have to tell AdminBro that we will manage mongoose resources with it
// const AdminBro = require('admin-bro')
// const AdminBroExpress = require('admin-bro-expressjs')
// const AdminBroMongoose = require('admin-bro-mongoose')

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
//connect to mongodb
require('./config/mongoose.config')


//routes
require('./routes/scroll.route')(app)
require('./routes/auth.route')(app)
require('./routes/user.route')(app)


app.listen(8000, () => {
    console.log("Listening at Port 8000")
});