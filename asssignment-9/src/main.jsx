import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Home from './component/Home/Home';

const router=createBrowserRouter([
  {
  path:'/',
  element:<App></App>
  },
  {
    path:'/statistics',
    element:<Statistics></Statistics>
  },
  {
    path:'/home ',
    element:<Home></Home>
  },
  {
    path:'/applied jobs',
    element:<AppliedJobs></AppliedJobs>
  },
  {
    path:'/blog',
    element:<Blog></Blog>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
