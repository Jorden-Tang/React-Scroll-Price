const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/ML_helper_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("Connected ML_helper database! Success!"))
    .catch(err => console.log("data base error", err))