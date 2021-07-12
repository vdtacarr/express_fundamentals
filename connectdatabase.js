const mongoose = require('mongoose');

const mongouri = "mongodb+srv://vedatacar:12asd34ert@vedatacar.biput.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(mongouri, { useNewUrlParser: true }).then(
    () => {
        console.log("Connection Successful");
   }
).catch((err)=>
console.log(err));
