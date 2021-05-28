var mongoose=require("mongoose");
var schema=mongoose.Schema;

var personalSchema  = new schema({
    height: {
        type:Number,
        required:true
    },
    weight: {
        type:Number,
        required:true
    },
})
module.exports=mongoose.model('PersonalInfo',personalSchema)