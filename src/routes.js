import React from 'react'
import Gamingpage from './pages/Gamingpage';
import ErrorPage from './ErrorPage';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Library from './pages/Library';

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
      path:"cart",
      element:<Cart/>,
      errorElement:<ErrorPage/>
    },
    {
      path:"/Library",
      element:<Library/>,
      errorElement:<ErrorPage/>
    }
    
  ];

export default routes