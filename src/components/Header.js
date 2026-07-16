import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  
    
  
  
  return (
    <div className="bg-gray-800 p-8">
      <nav className="flex justify-center items-between space-x-0px ">
        {/* <div className="flex flex-wrap justify-items-start mx-auto max-w-screen-2xl"> 
          <Link to="/" className="flex items-start">
            <img src="My image.jpg" className="mr-3 h-12" alt="Logo" />
          </Link> 
        </div> */}

        <ul className="flex space-x-20 text-white font-bold">
          <li className="text-lg">
            <Link
             to="/Home"
              className=" hover:text-orange-700"  >
              Home
            </Link>
          </li>

          <li className="text-lg">
            <Link
              to="/Skills"
              className="hover:text-rose-400" >
              Skills
            </Link>
          </li>

          <li className="relative text-lg">
            <Link
               to='/Work'
              className="hover:text-rose-400 focus:outline-none" >
              Work
            </Link>
          </li>

           <li className="text-lg">
            <Link
              to="/About"
              className="hover:text-rose-400" >
              About
            </Link>
          </li>

          <li className="text-lg">
            <Link
               to="/Contact"
              className="hover:text-rose-400"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {/* <button 
      onClick={handleClick}
      className="bg-orange-500 text-white px-4 py-2 rounded-3xl hover:bg-orange-700 absolute right-8 top-8">
        
      </button> */}
    </div>
  );
};

export default Navbar;
