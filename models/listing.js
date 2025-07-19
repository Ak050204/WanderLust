const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
   
    image: {
        filename: {
            type: String,
            default: "defaultImage",
        },
        url: {
            type: String,
            default:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    },
     price: {
        type: Number,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    }
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;


// const MONGO_URI = "mongodb://127.0.0.1:27017//wanderlust";

// main().then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.log(err);
// });

// async function main() {
//     await mongoose.connect(MONGO_URI);
// }