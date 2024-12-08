import Image from 'next/image'

import logo from '../../assets/logo.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import { FaBars } from "react-icons/fa";


import React from 'react'

const Navbar = () => {
  return (

    
    
     <div className='w-[100%] h-36 main-container justify-center items-center flex gap-[20rem]'>
    <div className='flex items-center'>
      <Image src={logo} className='w-60'/>
    </div>

    <div className='nav-link'>

<ul className='list-none text-[1.7rem]  flex items-center gap-[5.8rem]'>
  <li>HOME</li>
  <li>SHOP</li>
  <li>BLOG</li>
  <li>CONTACT</li>
</ul>

    </div>


<div>

  <ul className='flex items-center gap-[4rem] logo-div'>
    <li><Image src={icon1} className='w-[2rem]'/ ></li>
    <li><Image src={icon2}  className='w-[2rem]'/></li>
    <li><Image src={icon3}  className='w-[2rem]'/></li>
    <li><Image src={icon4}  className='w-[2rem]'/></li>

  </ul>
</div>

<div className='icon-div'><FaBars className='text-4xl'/></div>

    </div>
    
    

  )
}

export default Navbar