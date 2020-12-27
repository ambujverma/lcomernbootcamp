import mongoose from 'mongoose';

const categorySchema  = new mongoose.Schema({
    name: {
    type:String,
    trim:true,
    required:true,
    maxlenght:32,
    unique:true
    },

},{timestamps:true} //for storing the time when ever any thing  created in schema.//
);

module.exports = mongoose.module("Category",categorySchema);