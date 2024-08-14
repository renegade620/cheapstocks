import React from 'react';
import { BrowserRouter as Routes,Route} from 'react-router-dom';
import Gamingpage from './src/pages/Gamingpage'
import ErrorPage from './ErrorPage';
import Home from './src/Components/Home'
import Cart from './src/Components/Cart'
import Library from './src/pages/Library';
import FoodStuffpage from './src/pages/FoodStuffPage';

import Kitchen from './pages/Kitchen';

import './App.css';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} errorElement={<ErrorPage/>} />
     <Route path='/Gaming' element={<Gamingpage/>} errorElement={<ErrorPage/>} />
     <Route path='/cart' element={<Cart/>} errorElement={<ErrorPage/>} />
     <Route path='/kitchen' element={<Kitchen/>} errorElement={<ErrorPage/>} />
     <Route path='/Library' element={<Library/>} errorElement={<ErrorPage/>} />
     <Route path='/FoodStuffPage' element={<FoodStuffpage/>} errorElement={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;