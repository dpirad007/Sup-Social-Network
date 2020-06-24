const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/Summer-Project-api',{ //prod->process.env.MONGODB_URL
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

