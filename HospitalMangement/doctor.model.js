import mongoose from "mongoose"


const workingSchema= new mongoose.Schema({
  WorksIn:{
    type :mongoose.Schema.Types.ObjectId,
    ref :"Hospital"
  },
  WorkingHours :{
    type :Number,
    required :true,
  }
})

const doctorSchema = new mongoose.Schema({
  name :{
    type :String,
    required :true
  },
  salary :{
    type :String,
    required :true
  },
  Qualifications :{
    type :String,
    required :true
  },
  ExperienceYrs:{
    type :String,
    required :true
  },
  WorksIn:{
     type :[workingSchema]
  }

},{timestamps :true})


export const Doctor = mongoose.model("Doctor",doctorSchema)
