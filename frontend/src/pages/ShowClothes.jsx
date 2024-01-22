import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
const ShowClothes = () => {
    const [clothe, setClothe] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} =useParams()
    useEffect(() => {
        setLoading(true);
        axios
          .get(`http://localhost:5555/clothes/${id}`)
          .then((response) => {
            setClothe(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, [id]);

  return (
    <div className="p-4">
        <BackButton/>
        <h1 className="text-3xl my-4">Show Book</h1>
    
     {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{clothe._id}</span>
            </div>
            <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Product Name</span>
            <span>{clothe.productName}</span>
            </div>
            <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Brand</span>
            <span>{clothe.Brand}</span>
            </div>
            <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Category</span>
            <span>{clothe.Category}</span>
            </div>
            <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">publishYear</span>
            <span>{clothe.publishYear}</span>
            </div>
            <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(clothe.createdAt).toString()}</span>
            </div>
            <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(clothe.updatedAt).toString()}</span>
            </div>
        </div>

      )}
</div>
  )
}

export default ShowClothes