import React from 'react'
import shopbanner from '../assets/shopbanner.png'
import filterimage from '../assets/filter.png'
import Image from 'next/image'
import shop1 from '../assets/shop1.png'
import shop2 from '../assets/shop2.png'
import line from '../assets/line.png'
import Card from '../Component/Card/Card'
import cardimage6 from '../assets/cardimage6.png'
import cardimage7 from '../assets/cardimage7.png'
import cardimage9 from '../assets/cardimage9.png'
import cardimage2 from '../assets/cardimage2.png'
import trophy from '../assets/trophy.png'
import guarantee from '../assets/guarantee.png'
import contact from '../assets/contact.png'

import hand from '../assets/hand.png'





const Shop = () => {
  return (
    <>
    <div 
      className="relative w-full h-64 bg-cover bg-center" 
      style={{ backgroundImage: `url(${shopbanner.src})` }}
    >
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black titleshop text-4xl font-bold">
        Shop 
      </h1>
</div>

<div className='w-[100%] h-[6rem] bg-[#F9F1E7] flex main-shop-container'>
<div className='shop-one-container flex w-[50%]  h-[100%] justify-start items-center pl-40 gap-12 '>
<Image src={filterimage} className='w-[2rem] h-[50%]'/> 
<h1>Filter</h1>
<Image src={shop1} className='w-[2rem] h-[30%]'/>
<Image src={shop2} className='w-[2rem] h-[30%]'/>
<Image src={line} className="line"/>
<h2 className='showw'>Showing 1-16 of 32</h2>
</div>

<div className='w-[50%] h-[100%] shop-two-container flex justify-center items-center gap-10'>
  <h1>Show</h1>
 <div className='btn flex justify-center items-center'>  <button>16</button></div>
  <h1>Short BY</h1>
  <div className='btn flex justify-center items-center'>  <button>Default</button></div>
</div>


</div>

{/* cards  */}
<div className='main-all-card-container flex  justify-center gap-11 mt-16 nechy'>

<Card id="1" src={cardimage6} title="Grifo" description="High Lamp" price="44,000.000" cutprice="48,000.0000" />
  <Card id="2" src={cardimage7} title="Syltherine" description="Stylish Camp" price="5,000.000" cutprice="7,000.0000" />
  <Card id="3" src={cardimage9} title="Leviosa" description="Lorem Ipsum" price="10,000.000" cutprice="12,000.0000" />
  <Card id="4" src={cardimage2} title="Lolita" description="Luxury Big Sofa" price="20,000.000" cutprice="23,000.0000" />

</div>
<div className='main-all-card-container flex  justify-center gap-11 mt-12'>
  <Card id="5" src={cardimage6} title="Grifo" description="High Lamp" price="44,000.000" cutprice="48,000.0000" />
  <Card id="6" src={cardimage7} title="Muggo" description="Small Mug" price="200,000.000" cutprice="300,000.0000" />
  <Card id="7" src={cardimage9} title="Pinky" description="Cute bed set" price="50,000.000" cutprice="44,000.0000" />
  <Card id="8" src={cardimage2} title="Potty" description="Flower pot" price="20,000.000" cutprice="40,000.0000" />

</div>


<div className='main-all-card-container flex  justify-center gap-11 mt-16'>

<Card id="1" src={cardimage6} title="Grifo" description="High Lamp" price="44,000.000" cutprice="48,000.0000" />
  <Card id="2" src={cardimage7} title="Syltherine" description="Stylish Camp" price="5,000.000" cutprice="7,000.0000" />
  <Card id="3" src={cardimage9} title="Leviosa" description="Lorem Ipsum" price="10,000.000" cutprice="12,000.0000" />
  <Card id="4" src={cardimage2} title="Lolita" description="Luxury Big Sofa" price="20,000.000" cutprice="23,000.0000" />

</div>
<div className='main-all-card-container flex  justify-center gap-11 mt-12'>
  <Card id="5" src={cardimage6} title="Grifo" description="High Lamp" price="44,000.000" cutprice="48,000.0000" />
  <Card id="6" src={cardimage7} title="Muggo" description="Small Mug" price="200,000.000" cutprice="300,000.0000" />
  <Card id="7" src={cardimage9} title="Pinky" description="Cute bed set" price="50,000.000" cutprice="44,000.0000" />
  <Card id="8" src={cardimage2} title="Potty" description="Flower pot" price="20,000.000" cutprice="40,000.0000" />

</div>

<div className='flex justify-center mt-20 gap-14'>
  <div className='w-[5rem] h-[5rem] bg-[#B88E2F] rounded-[1rem] flex justify-center items-center transition-[.5s] hover'>
    <h1 className='text-white text-4xl'>1</h1>
  </div>
  <div className='w-[5rem] h-[5rem] bg-[#F9F1E7] rounded-[1rem] flex justify-center items-center transition-[.5s] hover'>
  <h1 className=' text-4xl text-black'>2</h1>
  </div>
  <div className='w-[5rem] h-[5rem] bg-[#F9F1E7] rounded-[1rem] flex justify-center items-center transition-[.5s] hover'>
    <h1 className=' text-4xl text-black'>3</h1>
  </div>
  <div className='w-[8rem] h-[5rem] bg-[#F9F1E7] rounded-[1rem] flex justify-center items-center transition-[.5s] hover'>
    <h1 className=' text-4xl text-black next'>Next</h1>
  </div>
</div>

<div className='w-[100%] h-[26rem] bg-[#FAF3EA] flex promote-container justify-center items-center gap-24 mt-16'>

<div className='flex gap-[0.9rem]'>
  <Image src={trophy}/>
<div className='shop-description'>
<h1>High Quaity</h1>
<p>Crafted From Top Material</p>
</div>
</div>

<div className='flex gap-[0.9rem]'>
  <Image src={guarantee}/>
<div className='shop-description'>
<h1>Warranty Protection</h1>
<p>Over 2 Years</p>
</div>
</div>


<div className='flex gap-[0.9rem]'>
  <Image src={hand}/>
<div className='shop-description'>
<h1>Free Shipping</h1>
<p>Order Over 150$</p>
</div>
</div>


<div className='flex gap-[0.9rem]'>
  <Image src={contact}/>
<div className='shop-description'>
<h1>24 / 7 Support</h1>
<p>Dedicated Support</p>
</div>
</div>



</div>


</>
  )
}

export default Shop