import React from 'react'
import SubmitImage from '../../assests/Frame 26.png'
import ExpertImage from '../../assests/Frame 27.png'
import AssitantImage from '../../assests/Frame 28.png'
import ProgressImage from '../../assests/Frame 29.png'
import OneImg from '../../assests/OneImg.png'
import TwoImg from '../../assests/TwoImg.png'
import ThreeImg from '../../assests/ThreeImg.png'
import FourImg from '../../assests/FourImg.png'
import Image from 'next/image'
function Work() {
  return (
    <div id='work' className='lg:w-[85%]   w-[90%] md:mt-[6%] mt-[8%]   mx-auto lg:mt-[3%]'>
        {/* heading div  */}
        <div>
            <h1 className='md:text-[36px] text-[24px] flex md:justify-start justify-center font-medium'>How Mybabu works?</h1>
        </div>
        {/* grid-4 div  */}
        <div className='lg:grid-cols-4 w-full   gap-y-10 md:grid-cols-2 grid-cols-1 grid mt-[2%] gap-x-[1%]'>
            {/* Submit your request card  */}
            <div className=' '>
                <Image
                src={SubmitImage}
                alt='submit-your-request-image'
                className='lg:w-full md:w-[95%] mx-auto'
                />
                <h1 className='flex items-center mt-[4%] md:ml-0 ml-11 gap-x-3 text-[18px] font-medium'> <Image src={OneImg} alt='1' /> Submit your Request:</h1>
              
              <p className='text-[14px] md:w-full w-[60%]  md:ml-0 ml-[25%] md:mt-0 mt-3 font-normal lg:pl-[16%] md:pt-2'>Fill out simple online form describing your needs.Our Intutive Interface ensures  that you provide all the neccessary details right away.</p>
             
              </div>
            {/* Expert Matching card  */}
            <div className=''>
                <Image
                src={ExpertImage}
                alt='submit-your-request-image'
                className='lg:w-full md:w-[95%] mx-auto'
                />
                <h1 className='flex items-center mt-[4%] ml-11 md:ml-0 gap-x-3 text-[18px] font-medium'> <Image src={TwoImg} alt='2' /> Expert Matching:</h1>
                <p className='text-[14px] md:w-full md:ml-0 w-[60%] lg:pl-[16%] md:pt-2 ml-[25%]'>Our system automatically connects you with a vetted Kagzi Sahayak who specializes in your required department.</p>
            </div>
            {/* Recive Assistant card  */}
            <div className=''>
                <Image
                src={AssitantImage}
                alt='submit-your-request-image'
                className='lg:w-full md:w-[95%] mx-auto'
                />
                <h1 className='flex ml-11 md:ml-0  items-center mt-[4%] gap-x-3 text-[18px] font-medium'> <Image src={ThreeImg} alt='3' />Recieve Assistant:</h1>
                <p className='text-[14px]  md:w-full w-[60%] ml-[25%] md:ml-0 lg:pl-[16%] md:pt-2'>Work with the assigned expert who will guide you through every step of your paper-work process-from document verification to submission. </p>
            </div>
            {/* Track Progress Card  */}
            <div className=''>
                <Image
                src={ProgressImage}
                alt='submit-your-request-image'
                className='lg:w-full md:w-[95%] mx-auto'
                />
                <h1 className='flex items-center mt-[4%] gap-x-3 ml-11 md:ml-0  text-[18px] font-medium'> <Image src={FourImg} alt='4' />Track Your Progress:</h1>
                <p className='text-[14px] md:w-full w-[60%] lg:pl-[16%] md:pt-2 ml-[25%] md:ml-0'>Stay updated with the real time tracking on your application status untill completion.</p>
            </div>
        </div>


    </div>
  )
}

export default Work