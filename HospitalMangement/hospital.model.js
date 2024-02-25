import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
 name:{
  type :String,
  required :true
 },
 addressLane1:{
   type : String,
   required :true
 },
 addressLane2 :{
  type : String,

},
Pincode :{
  type :String,
  required :true
},
Specialization :[
  {
    type :String,
  }
 
  
]
},{timestamps :true})


export const Hospital = mongoose.model("Hospital",hospitalSchema)
