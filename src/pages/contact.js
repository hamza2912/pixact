import React from 'react';
import Header from '../components/header';
import Btn_primary from '../components/btn_primary';


function Contact() {

    return (
      
      <div>
        
        <Header />

        <section id="contactus" className='w-full h-screen bg-contact bg-cover relative'>
            <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center contact-old'>
              <div className='lg:w-1/2 w-full lg:pl-40 px-5 flex flex-col text-white'>
                <p data-aos='fade-right' className='lg:text-sm text-xs mb-4 uppercase'>Let’s make it happen</p>
                <h1 data-aos='fade-right' className='lg:text-6xl text-2xl font-semibold'>Don’t hesitate to get in touch</h1>
                <Btn_primary url="https://wa.me/+923052073889" className='lg:mt-16 mt-10' name="Get in touch" />
              </div>
              <div className='absolute h-24 lg:left-64 left-20 bottom-0 send-us'>
                <div className='h-full pl-3 border-l relative'>
                  <p className='lg:text-sm text-xs text-white uppercase'>Send us a Message</p>
                  <div className='absolute h-8 border-l top-0 left-0 see-work-scroll'></div>
                </div>
              </div>
            </div>
            <div className='w-0 h-full absolute top-0 left-0 bg-black bg-cover contact-form bottom-0 z-0 opacity-0'></div>
          </section>

        {/* <div className='lg:pl-24 pl-12 w-full h-screen flex items-center bg-black'>
            <div className='form-width lg:px-40 px-5 flex flex-col text-white z-10'>
                <p data-aos='fade-right' className='text-sm mb-4 uppercase'>It will take a minute</p>
                <h1 data-aos='fade-right' data-aos-delay='100' className='lg:text-6xl text-3xl font-semibold'>Let’s do this</h1>
                <p className='text-sm my-8 uppercase'>We’re excited to hear from you!</p>
                <form data-aos='fade-up' data-aos-delay='150' className='w-full lg:mt-10 mt-5' action="">
                  <input className='w-full px-4 lg:py-3 py-2 border bg-transparent' placeholder="Subject" type="text" />
                  <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                    <input className='w-full px-4 lg:py-3 py-2 border bg-transparent' placeholder="First Name" type="text" />
                    <input className='w-full px-4 lg:py-3 py-2 border bg-transparent' placeholder="Last Name" type="text" />
                  </div>
                  <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                    <input className='w-full px-4 lg:py-3 py-2 border bg-transparent' placeholder="Email" type="text" />
                    <input className='w-full px-4 lg:py-3 py-2 border bg-transparent' placeholder="Phone" type="text" />
                  </div>
                  <textarea className='w-full px-4 lg:py-3 py-2 border bg-transparent mt-4' placeholder="Message" name="" id="" rows="5"></textarea>
                  <div data-aos='fade-left' data-aos-delay='200' className='w-full flex'>
                    <Btn_primary data-aos='fade-up' className='lg:mt-16 mt-5' name="Submit" />
                  </div>  
                </form>
              </div>
            </div> */}
      
      </div>

    );
  }
  
export default Contact;
