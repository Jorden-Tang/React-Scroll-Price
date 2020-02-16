const express = require('express');
const app = express ();
const cors = require('cors');
const bodyParser = require('body-parser')
const formidableMiddleware = require('express-formidable');
// const adminRoute = require('./routes/admin.route')
app.use(formidableMiddleware());
// We have to tell AdminBro that we will manage mongoose resources with it
// const AdminBro = require('admin-bro')
// const AdminBroExpress = require('admin-bro-expressjs')
// const AdminBroMongoose = require('admin-bro-mongoose')


//routes
require('./routes/scroll.route')(app)
const mongoose = require('./config/mongoose.config')

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// const User = require("./models/User.model")
// AdminBro.registerAdapter(AdminBroMongoose)

// const adminBro = new AdminBro({
//   databases: [mongoose],
//   rootPath: '/admin',
// })

// const ADMIN = {
//     email: 'admin@example.com',
//     password:  'lovejs',
// }

// const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
//     cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
//     cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
//     authenticate: (email, password) => {
//       if (email === ADMIN.email && password === ADMIN.password) {
//         return ADMIN;
//       }
//       return false;
//     }
// })

// const router = AdminBroExpress.buildRouter(adminBro);
// app.use(adminBro.options.rootPath, router)
// require('./config/mongoose.config');


app.listen(8000, () => {
    console.log("Listening at Port 8000")
});