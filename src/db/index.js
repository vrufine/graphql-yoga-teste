const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/devdb',
  { useNewUrlParser: true, useFindAndModify: false }
).then(success => {
  console.log(`MongoDB connected!`)
}).catch(error => {
  console.error(`Error connecting to MongoDB: ${error.message}`)
})
