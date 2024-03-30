// const mongoose = require('mongoose');
// const mongoURI = "mongodb://0.0.0.0:27017/ayush"


// const connect = async()=>{
//     const con = await mongoose.connect(mongoURI);
//     if(con){
//         console.log("Connected successfully")
//     }
// }



// module.exports = connect;

// video method 

const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/yourNotes"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,
        console.log("heyy connected"))
}
module.exports = connectToMongo;