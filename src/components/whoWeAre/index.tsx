import React from 'react'
import whoWeAreImg from '../../assests/whoWeAreImg.png'
import Image from 'next/image'
function WhoWeAre() {
  return (
    <div className='lg:w-[85%] w-[90%] mx-auto lg:mt-[5%] mt-[9%]'>

          <div>
            <h1 className='md:text-[36px] text-[24px] flex md:justify-start justify-center font-semibold'>Who We Are ?</h1>
          </div>
          <div className='flex md:flex-row flex-col md:mt-0 mt-6 items-center gap-x-5'>
            <Image
            src={whoWeAreImg}
            alt='Who We are Image'
            className='lg:h-[480px] lg:w-[480px] md:h-[320px] w-[250px] '
            // style={{height:'480px',width:'400px'}}
            />
            <p className='text-[20px] md:mt-0 mt-5 text-center md:text-start'>
              At my babu , we believe that dealing with the government paperwork should not be a hassle
              .Founded with vision of simplifying bureaucracy for every Indian Citizen,our plateform 
              bridges the gap between you and experts who specialize in government processes. Our trusted
              network of kagzi shayak(paperwork assistant) are here to guide you every step of the way.
            </p>
          </div>

    </div>
  )
}

export default WhoWeAre