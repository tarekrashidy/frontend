import React from 'react'
import MyImage from'../assets/Image1.png'
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
      <div className="hero min-h-screen  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-400 via-gray-300 to-blue-500">
        
          <div className="hero-content gap-10 flex-col   rounded-md  sm:bg-transparent md:flex-row md:bg-white lg:bg-white	      p-14 drop-shadow-lg

">
              <img src={MyImage} className=" lg:w-90 max-w-sm rounded-lg shadow-2xl max-[480px]:w-60" />
                  <div>
                  <h1 className="text-6xl font-bold">Welcome</h1>
                  <p className="py-6">We’re glad you’re here! Sign up to start</p>
                  <Link to={'/register'}><button className="btn bg-gradient-to-tl from-sky-400 to-blue-500 border-0 w-full drop-shadow-lg">Get Started</button></Link>

                  
                  </div>
              </div>
       
      </div>
  )
}

export default WelcomePage
