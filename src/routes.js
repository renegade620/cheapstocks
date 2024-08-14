import React from 'react'
import About from './Components/About';
import Gamingpage from './pages/Gamingpage';
import ErrorPage from './ErrorPage';
import Home from './Components/Home';
import { Cart } from './Components/Cart';
import Library from './pages/Library';
import FoodStuffpage from './pages/FoodStuffPage';

import Kitchen from './pages/Kitchen';




  const routes = [
   

    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      }, 
    {
      path: "/Gaming",
      element: <Gamingpage />,
      errorElement: <ErrorPage /> 
    }, 
    {
      path:"/cart",
      element:<Cart/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/kitchen",
      element:<Kitchen/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/Library",
      element:<Library/>,
      errorElement:<ErrorPage/>
    },
    {
      path: "/FoodStuffpage",
      element: <FoodStuffpage />,
      errorElement: <ErrorPage /> 
    },
    {
      path: "/About",
      element: <About />,
      errorElement: <ErrorPage /> 
    },
  ];
export default routes;

  



