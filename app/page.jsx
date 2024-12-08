import React from 'react'
import Banner from './Component/Banner/Banner'
import Image from 'next/image'
import imagep21 from './assets/imagep21.png'
import imagep22 from './assets/image22.png'
import imagep23 from './assets/imagw23.png'
import cardimage1 from './assets/cardimg1.png'
import Card from './Component/Card/Card'
import banner2p1 from './assets/banner2p1.png'
import banner2p2 from './assets/banner2p2.png'
import banner2p3 from './assets/banner2p3.png'
import banner2p4 from './assets/banner2p4.png'

import collage1 from './assets/collage1.png'
import collage2 from './assets/collage2.png'
import collage3 from './assets/collage3.png'
import collage4 from './assets/collage4.png'
import collage5 from './assets/collage5.png'
import collage6 from './assets/collage6.png'
import collage7 from './assets/collage7.png'
import collage8 from './assets/collage8.png'
import collage9 from './assets/collage9.png'


const page = () => (
  <>
    <Banner />

    <h1 className='text-center range text-[2.5rem] mt-20'>Browse The Range</h1>
    <p className='text-center para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, consectetur.</p>





    <div className='flex justify-center gap-12 mt-16  main-page-two-container'>
      <div className='flex flex-col items-center justify-center flex-wrap part-2-image'><Image src={imagep21} className='img2' />
        <h1>DINING</h1>
      </div>
      <div className='flex flex-col items-center justify-center part-2-image'><Image src={imagep22} className="img2" />
        <h1>LIVING</h1>
      </div>  <div className='flex flex-col items-center justify-center part-2-image'><Image src={imagep23} className="img2" />
        <h1>BEDROOM</h1>
      </div>
    </div>

    <h1 className='products'>Our Products</h1>
    <div className='main-all-card-container flex  justify-center gap-11 mt-16'>

      <Card src={cardimage1} title="Grifo" description="High Lamp" price="2,000.000" cutprice="4,000.0000" />
      <Card src={cardimage1} title="Grifo" description="High Lamp" price="2,000.000" cutprice="4,000.0000" />
      <Card src={cardimage1} title="Grifo" description="High Lamp" price="2,000.000" cutprice="4,000.0000" />
      <Card src={cardimage1} title="Grifo" description="High Lamp" price="2,000.000" cutprice="4,000.0000" />
    </div>
    <div className='main-all-card-container flex  justify-center gap-11 mt-12'>
      <Card src={cardimage1} title="Grifo" description="High Lamp" price="2,000.000" cutprice="4,000.0000" />
      <Card src={cardimage1} title="Grifo" description="High Lamp" price="2,000.000" cutprice="4,000.0000" />
      <Card src={cardimage1} title="Grifo" description="High Lamp" price="2,000.000" cutprice="4,000.0000" />
      <Card src={cardimage1} title="Grifo" description="High Lamp" price="2,000.000" cutprice="4,000.0000" />

    </div>



    <div className='flex justify-center items-center mt-12'>
      <button className='more'>SHOW MORE</button></div>


    <div className='w-[100%] h-[40rem] bg-[#FCF8F3] flex mt-32 banner-two-main-container'>

      <div className='w-[35%] h-[100%] banner-two-one bg-white  flex flex-col justify-center pl-24 pr-16 gap-12'>
        <div className='banner-two-part'>
          <h1>50+ beautiful rooms Inspiration</h1>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        </div>
        <div>
          <button className='explore'>Explore More</button>
        </div>
      </div>
      <div className='w-[65%] h-[100%] bg-[#FCF8F3] banner-two-two  flex gap-[2.5rem]'>
        <Image src={banner2p1} className='w-[25rem] ' />
        <Image src={banner2p2} className='w-[24rem] h-[36rem] ghyb2' />
        <Image src={banner2p3} className='w-[22rem] h-[32rem] ghyb' />
        <Image src={banner2p4} className='h-[28rem] ghyb' />
      </div>
    </div>


<h1 className='college'>Share your setup with <br /> <span> #FuniroFurniture</span></h1>

    {/* collage part started  */}

    <div className='w-[100%] h-[55rem] flex collage-main-container'>

      {/* pehla div */}
      <div className='w-[40%] h-[100%] '>
        {/* uski uppper wali div */}
        <div className='w-[100%] h-[50%]  flex gap-[5%]'>
  {/* iske andar upper wali div  */}
  <Image src={collage1} className='h-[100%] one'/>
  <div className='flex justify-start items-end w-[80%]'>  <Image src={collage3} className='h-[90%] w-[95%] three' /></div>
     </div>

     <div className='w-[100%] h-[50%] flex gap-[3%]'>

<Image src={collage2} className='w-[30%] h-[90%] mt-4 two'/>
<Image src={collage4} className='w-[63%] h-[70%] mt-4 four'/>

     </div>
      </div>


      <div className='w-[20%] h-[100%] flex justify-center items-center'>
        <Image src={collage5} className='five'/>
      </div>



      <div className='w-[40%] h-[100%]'>

{/* pehli div */}
<div className='w-[100%] h-[50%]  flex gap-[8%] justify-end'>
  <Image src={collage6} className='w-[50%] h-[85%] mt-11'/>
  <Image src={collage8} className='w-[35%] h-[95%]'/>

</div>
<div className='w-[100%] h-[50]  flex gap-[5%]'>

<Image src={collage7} className='h-[70%] w-[35%] ml-8'/>
<Image src={collage9} className='h-[55%] w-[50%]' />


</div>

      </div>

    </div>



{/* footer  */}

<div  className='w-[100%] h-[40rem] flex justify-center items-center gap-[12rem] footer-main-container'>


<div className='flex flex-col gap-[6rem] h-[100%] justify-start mt-[20rem]'>
  <ul>
    <li className='foot-logo'>Funiro</li>
    <li className='paraa'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptatum?</li>

  </ul>
</div>

<div className=' h-[100%] justify-center mt-[20rem]'>
  <ul className='flex flex-col gap-[6rem]'>
    <li className='paraa'>Links</li>
    <li className='lists'>HOME</li>
    <li className='lists'>SHOP</li>
    <li className='lists'>ABOUT</li>
    <li className='lists'>CONTACT</li>
    
 </ul>
</div>



<div className=' h-[100%] justify-center mt-[20rem]'>
  <ul className='flex flex-col gap-[6rem]'>
    <li className='paraa'>Links</li>
    <li className='lists'>Payment Options</li>
    <li className='lists'>Returns</li>
    <li className='lists'>Privacy Policies</li>

    
 </ul>
</div>


<div className=' h-[100%] justify-center mt-[20rem]'> 
  <ul className='flex flex-col gap-[4rem]'>
    <li className='paraa'>News Letters</li>
    <li><input type="text" placeholder='Enter Your Email Address' className='field' /></li>
    
 </ul>
</div>



</div>




  </>
)

export default page