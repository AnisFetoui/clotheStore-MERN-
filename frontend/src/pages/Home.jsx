import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from 'react-icons/md';
import ClothesTable from '../components/home/ClothesTable';
import ClothesCard from '../components/home/ClothesCard';

const Home = () => {
  const [clothes, setClothes] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/clothes")
      .then((response) => {
        setClothes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
       <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Clothes List</h1>
        <Link to={'/clothes/create'}>
          <MdOutlineAddBox className="text-sky-800 text-4x1" />
        </Link> 
      </div>
      {loading ? (
        <Spinner />
      ) : showType ==='table' ? (
        <ClothesTable clothes={clothes}/>
      ) : (<ClothesCard clothes={clothes}/>)}
    </div>
  );
};

export default Home;
