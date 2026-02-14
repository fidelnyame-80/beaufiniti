import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<>
<div className="bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-wide text-rose-400">
            Beaufiniti
          </h1>

          <nav className="flex gap-8 text-sm text-gray-400">
            <NavLink to={'/'} className={({isActive})=> ` ${isActive ? "text-rose-400": "hover:text-white transition"}` }>Home</NavLink>
            <NavLink to={'/Blogs'} className={({isActive})=> `${isActive ? "text-rose-400": "hover:text-white transition"}`}>Blogs</NavLink>
            <NavLink to={'/About'} className={({isActive})=> `${isActive ? "text-rose-400": "hover:text-white transition"}`}>About</NavLink>
            <NavLink to={'/FAQ'} className={({isActive})=> `${isActive ? "text-rose-400": "hover:text-white transition"}`}>FAQ</NavLink>
          </nav>
        </div>
      </div>
</>
)
}

export default Navbar