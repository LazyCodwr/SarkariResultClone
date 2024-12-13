import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Job from '../Pages/Job';


const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>
  },
  {
    path: '/job',
    element : <Job/>
  }
]);



export default router