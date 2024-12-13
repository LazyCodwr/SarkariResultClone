import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero w-full h-screen text-[#2C3E50] bg-[#ECF0F1] flex items-center justify-center flex-col pt-32">
        <h1 className="text-5xl font-bold mb-4">Welcome to No. 1 Education Portal Sarkari Result 2024</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Latest jobs, admit cards, and result updates all in one place.</h2>
        <div className='flex items-center justify-center gap-4'>
        <Link to="/job"><button className='bg-[#E74C3C] text-white hover:bg-[#2C3E50] transition-colors duration-300 py-3 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl'>
            Explore Jobs
        </button></Link>
        <button className='bg-[#E74C3C] text-white hover:bg-[#2C3E50] transition-colors duration-300 py-3 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl'>
            Check Results
        </button>
        </div>
    </div>
  )
}

export default Hero