import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Rixsume
        </Link>

        {/* Nav Links */}
        <ul className="flex gap-8 items-center flex-1 ml-12">
          <li><a href="#job-tracker" className="text-gray-700 hover:text-indigo-600 transition">Job Tracker</a></li>
          <li><a href="#ai-resume-builder" className="text-gray-700 hover:text-indigo-600 transition">AI Resume Builder</a></li>
          <li><a href="#ai-review" className="text-gray-700 hover:text-indigo-600 transition">AI Resume Review</a></li>

          {/* Dropdown: All Features */}
          <li 
            className="relative"
            onMouseEnter={() => setOpenDropdown('features')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition flex items-center gap-1">
              All Features
              <span className="text-xs">▼</span>
            </a>
            {openDropdown === 'features' && (
              <ul className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-2 min-w-48 mt-2">
                <li><a href="#feature1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Feature 1</a></li>
                <li><a href="#feature2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Feature 2</a></li>
              </ul>
            )}
          </li>

          <li><a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition">Pricing</a></li>

          {/* Dropdown: For Organizations */}
          <li 
            className="relative"
            onMouseEnter={() => setOpenDropdown('organizations')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <a href="#organizations" className="text-gray-700 hover:text-indigo-600 transition flex items-center gap-1">
              For Organizations
              <span className="text-xs">▼</span>
            </a>
            {openDropdown === 'organizations' && (
              <ul className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-2 min-w-48 mt-2">
                <li><a href="#org1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Option 1</a></li>
                <li><a href="#org2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Option 2</a></li>
              </ul>
            )}
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          <Link to="/sign-in" className="text-gray-700 hover:text-indigo-600 transition text-sm">Log in</Link>
          <Link to="/sign-up" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition text-sm font-medium">
            Sign up for free
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar