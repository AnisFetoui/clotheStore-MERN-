import express from "express";
import { Clothe } from "../models/clothemodel.js";
import mongoose from "mongoose";

const router = express.Router()

router.get('/',async (request,response)=>{
    try{
        const clothes = await Clothe.find({})
        return response.status(200).send({
            count : clothes.length,
            data: clothes
        })
    }catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
})

router.get('/:id',async (request,response)=>{
    try{
        const {id} = request.params;


        const clothe = await Clothe.findById(id)
        return response.status(200).send(
          clothe
        )
    }catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
})
router.put('/:id',async (request,response)=>{
    try{
        if(
            !request.body.productName ||
            !request.body.Brand ||
            !request.body.Category ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message : 'Send all required fields'
            })
        }
        const { id } = request.params;
        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidObjectId) {
            return response.status(400).send({ message: 'Invalid ObjectId format' });
        }


        const clothe = await Clothe.findByIdAndUpdate(id, request.body)
        if(clothe === null || clothe === undefined){
            response.status(404).send({message : "clothe not found"})
        }
        return response.status(200).send({message : "clothe update with success"})
    }catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
})

router.delete('/:id',async (request,response)=>{
    try{
       
        const { id } = request.params;
        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidObjectId) {
            return response.status(400).send({ message: 'Invalid ObjectId format' });
        }


        const clothe = await Clothe.findByIdAndDelete(id)
        if(clothe === null || clothe === undefined){
           return response.status(404).send({message : "clothe not found"})
        }
        return response.status(200).send({message : "clothe delete with success"})
    }catch(error){
        console.log(error.message);
        return response.status(500).send({message : error.message})
    }
})

router.post('/', async (request,response)=>{
    try{
        if(
            !request.body.productName ||
            !request.body.Brand ||
            !request.body.Category ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message : 'Send all required fields'
            })
        }
        const newClothe = {
            productName : request.body.productName,
            Brand : request.body.Brand,
            Category : request.body.Category,
            publishYear : request.body.publishYear
        }
        const clothe = await Clothe.create(newClothe);
        return response.status(201).send(clothe);

    }catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message})
    }
})

export default router;
