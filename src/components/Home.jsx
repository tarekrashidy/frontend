import React from 'react'
import homeImage from '../assets/Image3.png'

const Home = () => {
  return (
      <div className="hero min-h-screen  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-400 via-gray-300 to-blue-500">

          <div className="hero-content gap-10 flex-col md:flex-row bg-white rounded-md  p-14 drop-shadow-lg

">
              <img src={homeImage} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                  <h1 className="text-4xl font-bold">Successfully logged in</h1>
                  <p className="py-6 underline ">User@gmail.com</p>


              </div>
          </div>

      </div>
  )
}

export default Home