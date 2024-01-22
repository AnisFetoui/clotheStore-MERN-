import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import CreateClothes from './pages/CreateClothes';
import DeleteClothes from './pages/DeleteClothes';
import EditClothes from './pages/EditClothes';
import ShowClothes from './pages/ShowClothes';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/clothes/create' element={<CreateClothes/>} />
      <Route path='/clothes/details/:id' element={<ShowClothes/>} />
      <Route path='/clothes/edit/:id' element={<EditClothes/>} />
      <Route path='/clothes/delete/:id' element={<DeleteClothes/>} />
    </Routes>
  )
}

export default App
