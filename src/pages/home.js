import React from 'react';
import Header from '../components/header';
import Opener from '../components/opener';
import Work_content from '../components/work_content';
import Blogs_content from '../components/blogs_content';
import Btn_primary from '../components/btn_primary';
import Service_content from '../components/services_content';


function Home() {

    return (
      
      <div className='homepage'>

        <Opener />
        <Header />

        {/* preload */}
        <div className='bg-cover bg-work w-full h-screen z-minus absolute top-0 left-0'></div>
        <div className='bg-cover bg-services w-full h-screen z-minus absolute top-0 left-0'></div>
        <div className='bg-cover bg-approach-home w-full h-screen z-minus absolute top-0 left-0'></div>
        <div className='bg-cover bg-contact-home w-full h-screen z-minus absolute top-0 left-0'></div>
        <div className='bg-cover bg-service-data w-full h-screen z-minus absolute top-0 left-0'></div>
        <div className='bg-cover bg-service-ui w-full h-screen z-minus absolute top-0 left-0'></div>
        

        {/* website content */}

          {/* landing page */}
          <section className='w-full h-screen bg-black'>
            <div className='wrapped z-15'></div>
            <video className='absolute w-full h-full object-cover left-0 top-0 z-10 ' autoPlay="autoplay" x-webkit-airplay="allow" muted loop id="myVideo">
                <source src="video/pixact-bg.mp4" type="video/mp4" />
            </video>
            <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
              <div className='lg:w-1/2 w-full lg:pl-40 px-5 flex flex-col text-white'>
                <p className='lg:text-sm text-xs mb-4 uppercase z-15'>Hi there, We’re Pixact</p>
                <h1 className='lg:text-6xl text-2xl font-semibold z-15'>We create modern experiences for tomorrow’s brands.</h1>
              </div>
            </div>
            <div className='absolute h-24 lg:left-64 left-20 bottom-0 see-our-work z-15'>
              <div className='h-full pl-3 border-l relative'>
                <p className='text-white uppercase lg:text-base text-xs'>See our services</p>
                <div className='absolute h-8 border-l top-0 left-0 see-work-scroll'></div>
              </div>
            </div>
            <div className='w-48 p-5 absolute bottom-0 right-0 z-15 flex justify-between items-center'>
                <a className='mr-2 text-white' href="https://twitter.com/thepixact?s=09" target="_blank"><i className="fab fa-twitter lg:text-lg text-base mr-1"></i></a> 
                <a className='mr-2 text-white' href="https://www.linkedin.com/company/pixact" target="_blank"><i className="fab fa-linkedin lg:text-lg text-base mr-1"></i></a>
                <a className='mr-2 text-white' href="https://web.facebook.com/thepixact" target="_blank"><i className="fab fa-facebook lg:text-lg text-base mr-1"></i></a>
                <a className='mr-2 text-white' href="https://www.instagram.com/thepixact/" target="_blank"><i className="fab fa-instagram lg:text-lg text-base mr-1"></i></a> 
                <a className='mr-2 text-white' href="https://dribbble.com/wearepixact" target="_blank"><i className="fab fa-dribbble lg:text-lg text-base mr-1"></i></a> 
            </div>
          </section>

          {/* Service section */}
          <Service_content type="home" />

          {/* Work section */}
          <Work_content type="home" />

          {/* Approach section */}
          <section className='w-full h-screen bg-cover bg-approach'>
            <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
              <div className='lg:w-1/2 w-full lg:pl-40 px-5 flex flex-col text-white'>
                <p data-aos='fade-right' className='lg:text-sm text-xs mb-4 uppercase'>Approach</p>
                <h1 data-aos='fade-right' className='lg:text-6xl text-3xl font-semibold'>How we do it?</h1>
                <p data-aos='fade-up' className='lg:text-2xl text-base mt-16'>Through a uniquely collaborative process that combines analytical and design thinking, creative sorcery, and an obsession with solving impossible problems.</p>
                <Btn_primary className='lg:mt-16 mt-10' url="/approach" name="Read More" />
              </div>
            </div>
          </section>

          {/* Current Project section */}
          <section className='w-full h-screen bg-black'>
            <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
              <div className='lg:w-2/3 w-full lg:pl-40 px-5 flex flex-col text-white'>
                <p data-aos='fade-right' className='lg:text-sm text-xs mb-4 uppercase'>what’s in the works?</p>
                <h1 data-aos='fade-right' className='lg:text-5xl text-xl font-semibold'>A dynamic react app for a multifunctional  <span className='text-red-600'>library</span>, transforming it's conventional outlook into a new <span className='text-red-600'>modern design</span>.</h1>
                <p data-aos='fade-up' className='text-sm mt-10 uppercase'>Ready to talk business? Shoot us an email at <a href="mailto:pixact.co@gmail.com" target="_blank" className='text-red-500'>pixact.co</a></p>
              </div>
            </div>
          </section>

          {/* Blogs section */}
          {/* <Blogs_content page="home" /> */}

          {/* Contact section */}
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
            <div className='home-content absolute top-0 left-0 lg:pl-24 pl-12 w-full h-full flex items-center contact-form-body hidden'>
              <div className='form-width lg:px-40 px-5 flex flex-col text-white z-10'>
                  <p data-aos='fade-right' className='text-sm mb-4 uppercase'>It will take a minute</p>
                  <h1 data-aos='fade-right' data-aos-delay='100' className='lg:text-6xl text-3xl font-semibold'>Let’s do this</h1>
                  {/* <p className='text-sm my-8 uppercase'>We’re excited to hear from you!</p> */}
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
              </div>
          </section>

      </div>

    );
  }
  
export default Home;
