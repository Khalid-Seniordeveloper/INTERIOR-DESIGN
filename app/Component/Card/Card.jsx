import Image from 'next/image'
import React from 'react'

const Card = (props) => {
  return (
<div className='w-[28.5rem] h-[44.6rem] card-main-container hover '>

<div>
  <Image src={props.src}/>
</div>
<div className='detail-container w-[100%] p-[2rem]' >
  <h1 className='text-[2.4rem]'>{props.title}</h1>
  <h2 className='text-[1.6rem]'>{props.description}</h2>
   <div className='flex price-card items-center justify-between mt-5'>
   <h3 className='text-[2rem]'>{props.price}</h3>
   <h2 className='text-[1.6rem]'><del>{props.cutprice}</del></h2>
   </div>
</div>

</div>

  )
}

export default Card