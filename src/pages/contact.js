import React from 'react';
import Header from '../components/header';
import Btn_primary from '../components/btn_primary';


function Contact() {

    return (
      
      <div>
        
        <Header />

        <div className='lg:pl-24 pl-12 w-full h-screen flex items-center bg-black'>
            <div className='w-full lg:px-40 px-5 flex flex-col text-white z-10'>
                <p data-aos='fade-right' className='text-sm mb-4 uppercase'>It will take a minute</p>
                <h1 data-aos='fade-right' data-aos-delay='100' className='lg:text-6xl text-3xl font-semibold'>Let’s do this</h1>
                {/* <p className='text-sm my-8 uppercase'>We’re excited to hear from you!</p> */}
                <form data-aos='fade-up' data-aos-delay='150' className='w-full mt-10' action="">
                  <input className='w-full px-4 py-3 border bg-transparent' placeholder="Subject" type="text" />
                  <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                    <input className='w-full px-4 py-3 border bg-transparent' placeholder="First Name" type="text" />
                    <input className='w-full px-4 py-3 border bg-transparent' placeholder="Last Name" type="text" />
                  </div>
                  <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                    <input className='w-full px-4 py-3 border bg-transparent' placeholder="Email" type="text" />
                    <input className='w-full px-4 py-3 border bg-transparent' placeholder="Phone" type="text" />
                  </div>
                  <textarea className='w-full px-4 py-3 border bg-transparent mt-4' placeholder="Message" name="" id="" rows="5"></textarea>  
                </form>
                <div data-aos='fade-up' data-aos-delay='200' className='w-full flex'>
                    <Btn_primary data-aos='fade-up' className='lg:mt-16 mt-10' name="Submit" />
                </div>
              </div>
            </div>
      
      </div>

    );
  }
  
export default Contact;
