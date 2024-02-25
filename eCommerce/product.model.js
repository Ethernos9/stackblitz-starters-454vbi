import mongoose from "mongoose"
import { User } from "../eCommerce/user.model"

const productSchema = new mongoose.Schema({

 description :{
   type :String,
   required :true,
 },
 name :{
   type :String,
   required: true 
 },
 productImage :{
   type :String,
   required :true
 },
 price :{
   type :Number,
   default :0

 },
 stock :{
  type :Number,
  defalut :0
 },
 category :{
   type : mongoose.Schema.Types.ObjectId,
   ref:"Category"
 },
 owner :{
    type : mongoose.Schema.Types.ObjectId,
    ref:"User"
 }
  

},{timestamps :true}) 

export const Product = mongoose.model("Product",productSchema)