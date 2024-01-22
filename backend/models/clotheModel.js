import mongoose from "mongoose";

const clotheSchema = mongoose.Schema(
    {
        productName:{
            type: String,
            required: true
        },
        Brand:{
            type: String,
            required: true  
        },
        Category :{
            type: String,
            required: true  
        },
        publishYear :{
            type: Number,
            required: true  
        }
    },{
        timestamps: true,
    }
)
export const Clothe = mongoose.model('Clothe',clotheSchema)   