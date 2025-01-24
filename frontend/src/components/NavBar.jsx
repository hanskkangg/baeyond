import React, { useContext, useState } from 'react'; // Import useState
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      {/* Logo */}
      <Link to='/' ><img src={assets.hans_logo2} className='w-36' alt='Website Logo' /></Link>

      {/* Navigation Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((text, index) => (
             <NavLink
             key={index}
             to={text === 'HOME' ? '/' : `/${text.toLowerCase()}`}
             className='flex flex-col items-center gap-1'
           >
            <p>{text}</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        ))}
      </ul>

      {/* Icons Section */}
      <div className='flex items-center gap-6'>

    {/* Search Icon */}
<img 
  onClick={() => { 
    console.log("Search Icon Clicked");
    setShowSearch(true); 
  }} 
  src={assets.search_icon} 
  className='w-5 cursor-pointer' 
  alt='Search' 
/>

        {/* Profile Dropdown */}
        <div className='group relative'>
          <Link to = '/login'><img className='w-5 cursor-pointer' src={assets.profile_icon} alt='Profile' /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>LogOut</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='Cart' />
          {/* Cart Item Count */}
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt='Menu'
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          {/* Close Sidebar Button */}
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Close Sidebar" />
            <p>Back</p>
          </div>
            <NavLink onClick = {()=> setVisible(false)}className = 'py-2 pl-6 border'to='/'>HOME</NavLink>
            <NavLink onClick = {()=> setVisible(false)}className = 'py-2 pl-6 border'to='/collection'>COLLECTION</NavLink>
            <NavLink onClick = {()=> setVisible(false)}className = 'py-2 pl-6 border'to='/about'>ABOUT</NavLink>
            <NavLink onClick = {()=> setVisible(false)}className = 'py-2 pl-6 border'to='/contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  );
};

export default NavBar;
