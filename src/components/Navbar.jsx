import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-28 fixed top-0 left-0 bg-[#2C3E50] text-white flex items-center justify-between px-12 z-[99999]'>
        <div className="logo">
            <NavLink to="/"><img className='w-20' src="https://www.sarkariresult.com/images/logo-new.png" alt="" /></NavLink>
            </div>
        <div className="links">
            <ul className='flex items-center justify-center gap-6'>
                <NavLink to="/"><li className='hover:text-[#E74C3C] transition-colors'>Home</li></NavLink>
                <NavLink to="/jobs"><li className='hover:text-[#E74C3C] transition-colors'>Jobs</li></NavLink>
                <NavLink to="/result"><li className='hover:text-[#E74C3C] transition-colors'>Results</li></NavLink>
            </ul>
        </div>
        <div className="search flex items-center justify-center gap-4 bg-primary p-2 rounded-lg">
            <input type="text" placeholder="Search" className="p-2 rounded-lg bg-inherit border-2 border-[#BDC3C7] text-white outline-none" />
            <button className="bg-primary bg-blue-700 hover:bg-blue-600 font-bold py-2 px-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    </nav>
  )
}

export default Navbar