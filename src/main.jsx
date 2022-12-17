import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import Register from './components/Register ';
import ProtectedRout from './components/ProtectedRout';
import AxiosClient from './components/AxiosClient';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";


let token=localStorage.getItem('token')
if (token) {
  AxiosClient(token)
}









const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRout>
        <Home />
    </ProtectedRout>
    
  },
  {
    path: "/register",
    element: token ? <Navigate to="/"/>: <Register />

    
  },
  {
    path: "/welcomePage",
    element: <WelcomePage/>

    
  },










]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
