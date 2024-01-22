import React,{useState,useEffect} from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


const CreateClothes = () => {
  const [productName, setProductName] = useState('');
  const [Brand, setBrand] = useState('');
  const [Category, setCategory] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  const handleSaveClothe = () =>{
  const data = {
    productName,
    Brand,
    Category,
    publishYear
  }
  setLoading(true);
  axios
          .post('http://localhost:5555/clothes',data)
          .then(() => { 
            setLoading(false);
            enqueueSnackbar('Clothe Created successfully', { variant: 'success' });
            navigate('/')
          })
          .catch((error) => {
            setLoading(false);
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
          });
      }
  return (
    <div className='p-4'>
    <BackButton />
    <h1 className='text-3xl my-4'>Create Clothe</h1>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>Product Name</label>
      <input
            type='text'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
      </div>
      <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>Brand</label>
      <input
            type='text'
            value={Brand}
            onChange={(e) => setBrand(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
      </div>

      <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>Category</label>
      <input
            type='text'
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
      </div>

      <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
      <input
            type='text'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
      </div>

      <button className='p-2 bg-sky-300 m-8' onClick={handleSaveClothe}>
          Save
        </button>
      </div>
      </div>
  )
}

export default CreateClothes