const mongoose = require("mongoose")
const tigerSchema = mongoose.Schema({

color:{
    type: String,
    minLength: 3,
    maxLength: 100
},

place : {
    type:String,
},

weight: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("tiger",tigerSchema)
