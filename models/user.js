const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,
       
    },

    email:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:(value)=>{
                const result=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return result.test(value);
            },
            message:"Please enter a valid email address",
        }
    },
    // state:{
    //     type:String,
    //     //default:"",
    //     required:false,
    //     //trim:true,
    //     },
    // city:{
    //     type:String,
    //     required:false,
    //     //default:"",
    //     //trim:true,
    //     },
    // locality:{
    //             type:String,
    //             required:false,
    //             //default:"",
    //             //trim:true,

            //},
           
    password:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                //check if password if atleast 8 characters long,
                return value.length>=8;

            },
            message: "Password be must be atleast 8 characters long",
        }
        

    },
});

const User =mongoose.model("User",userSchema);

module.exports=User; 