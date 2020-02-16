// const AdminBro = require('admin-bro')
// const AdminBroExpress = require('admin-bro-expressjs')
// 

// AdminBro.registerAdapter(require('admin-bro-mongoose'))
// const adminBro = new AdminBro({
//     databases: [mongoose],
//     rootPath: '/admin',
//   })
  
//   const ADMIN = {
//     email: process.env.ADMIN_EMAIL || 'admin@example.com',
//     password: process.env.ADMIN_PASSWORD || 'lovejs',
//   }
  
//   const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
//     cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
//     cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
//     authenticate: async (email, password) => {
//       if (email === ADMIN.email && password === ADMIN.password) {
//         return ADMIN
//       }
//       return null
//     }
// })
// // module.exports = router


// const AdminBro = require('admin-bro')
// const AdminBroExpress = require('admin-bro-expressjs')
// const AdminBroMongoose = require('admin-bro-mongoose')

// // const mongoose = require('mongoose')
// const mongoose = require("../config/mongoose.config")
// AdminBro.registerAdapter(AdminBroMongoose)

// const adminBro = new AdminBro({
//   databases: [require('../config/mongoose.config')],
//   rootPath: '/admin',
// })

// const ADMIN = {
//   email:  "test@gmail.com",
//   password:  "lovejs",
// }

// const router = AdminBroExpress.buildRouter(adminBro)

// module.exports = router
