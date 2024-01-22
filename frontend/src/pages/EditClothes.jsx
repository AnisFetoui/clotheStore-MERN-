import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from 'notistack';


const EditClothes = () => {
  const [productName, setProductName] = useState("");
  const [Brand, setBrand] = useState("");
  const [Category, setCategory] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/clothes/${id}`)
      .then((response) => {
        setProductName(response.data.productName);
        setBrand(response.data.Brand);
        setCategory(response.data.Category);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened.");
        console.log(error.response.data);
      });
  }, []);

  const handleEditClothe = () => {
    const data = {
      productName,
      Brand,
      Category,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/clothes/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Clothe Updated successfully', { variant: 'success' });
        navigate("/");
      })
      .catch((error) => {
          setLoading(false);
          enqueueSnackbar('Error', { variant: 'error' });
          console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Clothe</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Brand</label>
          <input
            type="text"
            value={Brand}
            onChange={(e) => setBrand(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Category</label>
          <input
            type="text"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditClothe}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditClothes;
