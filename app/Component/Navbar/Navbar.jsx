'use client'
import Image from 'next/image';
import logo from '../../assets/logo.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full h-36 main-container justify-center items-center flex gap-64'>

      <div className='flex items-center'>
        <Image src={logo} className='w-60' alt='Logo'/>
      </div>


      <div className={`nav-link ${menuOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className='list-none text-[1.7rem] flex items-center gap-[5.8rem]'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href={'/Shop'}>Shop</Link></li>
          <li><Link href={'/Blog'}>Blog</Link></li>
          <li><Link href={'/Contact'}>Contact</Link></li>
        </ul>
      </div>

 
      <div>
        <ul className='flex items-center gap-[4rem] logo-div'>
          <li><Link href="/login"><Image src={icon1} className='w-[2rem]' /></Link></li>
          <li><Image src={icon2} className='w-[2rem]' /></li>
          <li><Image src={icon3} className='w-[2rem]' /></li>
          <li><Link href="/Cart"><Image src={icon4} className='w-[2rem]' /></Link></li>
        </ul>
      </div>

   
      <div className='sm:hidden flex items-center' onClick={toggleMenu}>
        <FaBars className='text-4xl cursor-pointer' />
      </div>


      {menuOpen && (
        <div className={`absolute top-40 right-0 bg-gray-800 w-[100%] max-w-[400px] h-auto p-4 z-10 transform transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
 
          <div className='flex justify-end'>
            <FaTimes className='text-white text-3xl cursor-pointer' onClick={toggleMenu} />
          </div>
          <ul className='text-white text-[1.7rem] mt-4'>
            <li className='mb-4'><Link href='/'>Home</Link></li>
            <li className='mb-4'><Link href={'/Shop'}>Shop</Link></li>
            <li className='mb-4'><Link href={'/Blog'}>Blog</Link></li>
            <li className='mb-4'><Link href={'/Contact'}>Contact</Link></li>
            <li className='mb-4'><Link href={'/Cart'}>Cart</Link></li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
