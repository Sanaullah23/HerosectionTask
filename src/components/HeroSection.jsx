import React from 'react'
import IconTwo from './IconTwo'
import zohoImage from '../assets/images/zoho.png'

const HeroSection = () => {
  return (
    <>
        <section className='bg-gradient-to-t from-blue-300 to-blue-50 md:pt-[70px]md:pb-[0px] md:pl-[30px] md:pr-[30px] xl:pt-[70px] pb-[0px] px[30px]'>
            <div className='flex gap-4  items-center'>
                <img src={zohoImage} alt="" className='w-[100px]' />
                <h1 className='font-bold text-xl'>CRM</h1>
            </div>
             
                <IconTwo/>
              
            <div className='flex justify-between items-center md:pt-[40px] pb-[70px] py-[30px] '>
             
                <div className='text-[#0067ff] text-4xl'>
                    <h3 className='font-gochihand text-[42px]'>Build everlasting</h3>
                    <h1 class="text-8xl font-black ">CUST<span >O</span>MER <br /> RELATI<span >O</span>NSHIPS<p className='text-5xl'> with the world’s favorite CRM</p> </h1>
                    
                    <div className='mt-6 text-xl text-black'>
                        <p>Zoho CRM empowers a global network of over 250,000 businesses in 180</p>
                        <p>countries to convert more leads, engage with customers, and grow their revenue.</p>
                    </div>
                    
                </div>

                <div className=' flex flex-col gap-4 pb-1 items-center'>
                    <h5 className='font-medium text-xl' >Get started with your 15-day free <br /> trial</h5> 
                    <input type="text"  placeholder='First Name'  className='w-[20rem] py-2 px-5 rounded-full shadow-slate-400 shadow-xl border-gray-300 border-[1px]'/> 
                    <input type="email" placeholder='email' className='w-[20rem] py-2 px-5 rounded-full shadow-slate-400 shadow-xl  border-gray-300 border-[1px]'/> 
                    <input type="password" placeholder='password'className='w-[20rem] py-2 px-5 rounded-full shadow-slate-400 shadow-xl  border-gray-300 border-[1px]' /> 
                    <input type="number" placeholder='phone'className='w-[20rem] py-2 px-5 rounded-full shadow-slate-400 shadow-xl  border-gray-300 border-[1px]' /> 
                    <div className='text-[11px]'>
                            <p className='pb-[5px]'>It looks like you‘re in the NETHERLANDS based on your IP.</p>
                            <p className=' pb-[5px]'>Your data will be stored in the EU data center.</p>
                            <div className='flex  items-start py-2'>
                            <input type="checkbox"/><p className=' leading-3  font-semibold '>Yes, I would like to receive marketing communication <br /> regarding Zoho’s products, services, and events from <br /> Zoho and its regional partners.</p> <br />
                            </div>
                            <div className='flex  items-start py-2'>
                            <input type="checkbox"/><p className=' leading-3  font-semibold'>I agree to the <u>Terms of Service</u> and <u>Privacy Policy</u>.</p>
                            </div>
                           
                    </div>
                    <button className='px-[60px] text-white font-bold bg-[#f0483e] rounded-full w-[100%] h-[50px]'>GET STARTED</button>
                </div>
               
            </div>
             
        </section>
    </>
  )
}

export default HeroSection