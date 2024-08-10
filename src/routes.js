import React from 'react'
import Gamingpage from './Components/Gamingpage';
import ErrorPage from './ErrorPage';
import Home from './Components/Home';

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
    
  ];

export default routes