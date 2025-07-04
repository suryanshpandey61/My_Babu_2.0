import React from 'react'
import ReactanlgeImg from '../../assests/Rectangle 27.png'
import Image from 'next/image'
function Footer() {
  return (
    <div className='w-full mb-[2%]'>
 
            <div className='w-[85%] mx-auto mt-[6%] flex justify-between'>
                    {/* left img div  */}
                    <div>
                        <Image
                        src={ReactanlgeImg}
                        alt='rectangle-image'
                        className='hidden'
                        />
                    </div>
                    <div className='flex lg:w-[50%] gap-x-9 w-full justify-between'> 
                            {/* 1 col  */}
                            <div className='flex flex-col'> 
                                <h1 className='leading-[28px] font-bold text-[16px]'>Quick Links</h1>
                                <a href="#" className='text-[16px] leading-[28px] font-normal'>Home</a>
                                <a href="" className='text-[16px] leading-[28px] font-normal'>About Us</a>
                                <a href="#services" className='text-[16px] leading-[28px] font-normal'>Services</a>
                                <a href="#work" className='text-[16px] leading-[28px] font-normal'>Works</a>
                                <a href="#contactus" className='text-[16px] leading-[28px] font-normal'>Contact Us</a>
                            </div>
                            {/* 2 col  */}
                            <div className='flex flex-col'>
                                    <h1 className='leading-[28px] font-bold text-[16px]'>Socials</h1>
                                    <a href="" className='text-[16px] leading-[28px] font-normal'>X</a>
                                    <a href="" className='text-[16px] leading-[28px] font-normal'>Linked In</a>
                                    <a href="" className='text-[16px] leading-[28px] font-normal'>Facebook</a>
                                    <a href="" className='text-[16px] leading-[28px] font-normal'>Instagram</a>
                            </div>
                            {/* 3 col  */}
                            <div className='flex flex-col'>
                                <h1 className='leading-[28px] font-bold text-[16px]'>Legal</h1>
                                <h2 className='text-[16px] leading-[28px] font-normal'>Privacy Policy</h2>
                                <h2 className='text-[16px] leading-[28px] font-normal'>Terms & Conditions</h2>
                            </div>
                    </div>
            </div>

    </div>
  )
}

export default Footer