const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
    image_link:{
        type:String,
        trim:true
    },
    name:{
      type:String,
      trim:true
    },
    college_name:{
        type:String,
        trim:true
    },
    description:{
        type:String,
        trim:true
    }
})

const eventsSchema = new mongoose.Schema({
    image_link:{
        type:String,
        trim:true
    },
    title:{
      type:String,
      trim:true
    },
    speaker:{
        type:String,
        trim:true
    },
    organization:{
        type:String,
        trim:true
    },
    date:{
        type:String,
        trim:true
    },
    time:{
        type:String,
        trim:true
    },
  event_link:{
    type:String,
    trim:true
},
   
description:{
        type:String,
        trim:true
    }
})


const courseSchema = new mongoose.Schema({
    course_link:{
        type:String,
        trim:true
    },
    course_name:{
        type:String,
        trim:true
    },
    instructor_name:{
        type:String,
        trim:true
    },
    instructor_details:{
        type:String,
        trim:true
    },
    rating:{
        type:Number
    },
    fee:{
        type:Number
    },
    total_students:{
        type:Number
    }
})

const appSchema = new mongoose.Schema({
    id:{
        type:String
    },
    events:[
        eventsSchema
    ],
    testimonials:[
        testimonialSchema
    ],
    cources:[
        courseSchema
    ]
})

const appModel = mongoose.model("App",appSchema);

module.exports = appModel;