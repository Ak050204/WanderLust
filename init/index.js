const mongoose = require('mongoose');
const initdata = require('./data');
const Listing = require('../models/listing.js'); // Adjust the path as necessary
const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log(err);
  });

  async function main() {
    await mongoose.connect(MONGO_URL);
  }
  const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("Database initialized with sample data");
  }

  initDB();
