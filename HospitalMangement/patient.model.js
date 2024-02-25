import mongoose from "mongoose"


const patientSchema = new mongoose({
   name :{
     type :String,
     required :true

   },
   diagonesdWith:{
     type :String,
     required :true,
   },
   age :{
    type :Number,
    required :true

  },
  BloodGroup :{
    type :String,
    required :true

  },
  Address :{
    type :String,
    required :true

  },
  Gender :{
    type :String,
    enum :["M","F","O"]
  },
  AdmittedIn:{
    type :mongoose.Schema.Types.ObjectId,
    ref :"Hospital"

  }


},{timestamps: true})

export const Patient = mongoose.model("Patient",patientSchema)