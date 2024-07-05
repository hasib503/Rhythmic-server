const mongoose = require('mongoose');

const databaseURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mtm85fa.mongodb.net/Rhythmic`; 
mongoose.connect(databaseURL, {})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});