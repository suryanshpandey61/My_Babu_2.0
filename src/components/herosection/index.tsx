
import Image from 'next/image'
import heroSectionUser from '../../assests/heroSectionUser.png'
import rentAgreementImg from '../../assests/rentAgreementImg.png'
import jobsAvailablebtn from '../../assests/jobsAvailablebtn.png'
import dottedLineImg from '../../assests/dottedLineImg.png'
import online from '../../assests/onlineApplicationImg.png'
import call from '../../assests/call.png'
import graph from '../../assests/graph.png'
import blur from '../../assests/blur.png'
function HeroSection() {
  return (
    <div 
    id='hero-section'
    className='md:w-full w-[80%]  mx-auto overflow-hidden '>
        <div className='md:w-[70%] w-full    justify-center  mt-[35px] md:mt-[5%] mx-auto  gap-[20px] text-center '>
              <h1 className='text-[36px] font-semibold justify-center text-center text-[#004016]'>
                Your Personal Assistant for Hassle-Free 
                Government Paperwork
              </h1>
              <p className='md:mt-[2%] mt-[4%] md:text-[14px] text-[16px] '>No more long queries , confusing forms , or endless frustration</p>
              <div className='mt-[4%]'>
                  <button className='bg-[#45BF6F] text-[14px] text-white px-2 py-2 hover:cursor-pointer rounded-md'>Get Started</button>
                  <button className='font-bold px-4'>How It Works</button>
              </div>
              <div className='mx-auto  mt-[6%] text-center flex lg:flex-row flex-col justify-center'>
                <Image
                src={jobsAvailablebtn}
                alt='Jobs Available btn'
                style={{width:'140px',height:'44px'}}
                className='mt-[5%] z-10 left-[18%] relative lg:flex hidden'
                />
                <Image
                src={dottedLineImg}
                alt='dooted-line-image'
                className=' hidden absolute lg:flex mt-[2.5%]'
                />
               <div className='flex flex-col  '>
               <Image 
                src={heroSectionUser} 
                alt="User Image"
                // style={{width:'410px',height:'410px'}}
                className='relative md:w-[410px] md:h-[410px] w-[300px] md:-mt-3 md:-right-[20%]'
                />
                 <Image 
                src={blur} 
                alt="Blur Image"
                className='lg:absolute hidden lg:flex  w-[50%]   md:mt-[25%]'
                />
               </div>
                <Image
                src={rentAgreementImg}
                alt='Rent Aggrement Image'
                // style={{height:'300px',width:'300px'}}
                className='lg:mt-[3%] lg:right-[12.5%] lg:w-[300px] lg:h-[300px] md:w-[400px]  md:h-[400px] md:ml-[9%] right-11 -mt-20  relative '
                />
              </div>
        </div>
        <div className='md:w-[85%] w-[90%]  justify-start md:flex-row gap-y-4 flex-col md:mt-0 lg:mt-[5%] -mt-4 mx-auto flex gap-x-[10px]'>
           <button className='flex bg-[#EFEFEF] lg:w-[15%] md:w-[25%] w-[60%]  text-[12px] text-[#004016] p-2 gap-x-[10px] rounded-xl items-center'><Image style={{height:'24px',width:'24px'}} src={online} alt='online-img'/>Online Application</button>
           <button className='flex bg-[#EFEFEF] lg:w-[12%] md:w-[22%] w-[50%] text-[12px] text-[#004016] p-2 gap-x-[10px] rounded-xl items-center'><Image style={{height:'24px',width:'24px'}} src={call} alt='online-img'/>24/7 Support</button>
           <button className='flex bg-[#EFEFEF] lg:w-[18%] md:w-[30%] w-[69%] text-[12px] text-[#004016] p-2 gap-x-[10px] rounded-xl items-center'><Image style={{height:'24px',width:'24px'}} src={graph} alt='online-img'/>Expedicted Processing</button>
        </div>
    </div>
  )
}

export default HeroSection