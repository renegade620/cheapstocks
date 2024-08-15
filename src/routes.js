import React from 'react'
import About from './Components/About';
import Gamingpage from './pages/Gamingpage';
import ErrorPage from './ErrorPage';
import Home from './Components/Home';
import { Cart } from './Components/Cart';
import Library from './pages/Library';
import FoodStuffPage from './pages/FoodStuffPage';
import About from './Components/About';

import Kitchen from './pages/Kitchen';
import { Toiletries } from './pages/Toiletries';




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
      path: "/FoodStuffPage",
      element: <FoodStuffPage />,
      errorElement: <ErrorPage /> 
    },
    {
      path: "/About",
      element: <About/>,
      errorElement: <ErrorPage /> 
    },
    {
      path: "/Toiletries",
      element: <Toiletries />,
      errorElement: <ErrorPage /> 
    }
  ];
export default routes;

  