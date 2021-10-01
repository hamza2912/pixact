import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/header';
import Opener from '../components/opener';
import Work_content from '../components/work_content';
import Btn_primary from '../components/btn_primary';


function Home() {

    // let history = useHistory();

    // function backToHome() {
    //   history.push("");
    // }

    return (
      
      <div className='homepage'>

        {/* <Opener /> */}
        <Header />

        {/* website content */}
        {/* preload */}
        <div className='bg-cover bg-work w-full h-screen z-minus absolute top-0 left-0'></div>
        <div className='bg-cover bg-service w-full h-screen z-minus absolute top-0 left-0'></div>
        <div className='bg-cover bg-approach-home w-full h-screen z-minus absolute top-0 left-0'></div>
        <div className='bg-cover bg-contact-home w-full h-screen z-minus absolute top-0 left-0'></div>
        {/* <div className='bg-cover bg-service-ui w-full h-screen z-minus absolute top-0 left-0'></div> */}
        {/* <div className='bg-cover bg-service-data w-full h-screen z-minus absolute top-0 left-0'></div> */}
        <section className='w-full h-screen bg-black'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='lg:w-1/2 w-full lg:pl-40 px-5 flex flex-col text-white'>
              <p className='text-sm mb-4 uppercase'>Hi there, We’re Pixact</p>
              <h1 className='lg:text-6xl text-4xl font-semibold'>We create modern experiences for tomorrow’s brands.</h1>
            </div>
          </div>
          <div className='absolute h-24 lg:left-64 left-20 bottom-0 see-our-work'>
            <div className='h-full pl-3 border-l relative'>
              <p className='text-white uppercase'>See our Work</p>
              <div className='absolute h-8 border-l top-0 left-0 see-work-scroll'></div>
            </div>
          </div>
          
        </section>
        <Work_content type="home" />
        <section id="servicePage" className='w-full lg:h-screen h-auto py-2 bg-black hidden'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='w-full lg:px-40 px-5 flex flex-col text-white'>
              <h1 data-aos='fade-right' className='lg:text-6xl text-2xl font-semibold'>Opening Window To The<span className='text-red-600'> Digital World</span></h1>
              <p data-aos='fade-right' className='lg:text-sm text-xs lg:mt-10 mt-5'>We are so much more than an innovative and dynamic IT company – we are an extension to your team and your trusted partners regardless of industry or business size. Being a dedicated IT partner, we support you and your business on the road towards real innovation and success.</p>
              {/* <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-2 lg:mt-12 mt-6'>
                <div className='w-full border border-white lg:pt-12 pt-6 px-2 pb-2 flex flex-col bg-service-ui bg-cover'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>UI UX Design</h2>
                  <p className='text-xs'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
                </div>
                <div  className='w-full border border-white lg:pt-12 pt-6 px-2 pb-2 flex flex-col bg-service-dev bg-cover'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>Full Stack Developemnt</h2>
                  <p className='text-xs'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
                </div>
                <div  className='w-full border border-white lg:pt-12 pt-6 px-2 pb-2 flex flex-col bg-service-data bg-cover'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>Data Science</h2>
                  <p className='text-xs'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
                </div>
                <div  className='w-full border border-white lg:pt-12 pt-6 px-2 pb-2 flex flex-col bg-service-digi bg-cover'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>Digital Marketing</h2>
                  <p className='text-xs'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-cover bg-approach'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='lg:w-1/2 w-full lg:pl-40 px-5 flex flex-col text-white'>
              <p data-aos='fade-right' className='text-sm mb-4 uppercase'>Approach</p>
              <h1 data-aos='fade-right' className='lg:text-6xl text-3xl font-semibold'>How we do it?</h1>
              <p data-aos='fade-up' className='lg:text-2xl text-xl mt-16'>Through a uniquely collaborative process that combines analytical thinking, creative sorcery, and an obsession with solving impossible problems.</p>
              <Btn_primary className='mt-16' url="/" name="Read More" />
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-black'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='lg:w-2/3 w-full lg:pl-40 px-5 flex flex-col text-white'>
              <p data-aos='fade-right' className='text-sm mb-4 uppercase'>what’s in the works?</p>
              <h1 data-aos='fade-right' className='lg:text-6xl text-3xl font-semibold'>An AR experience that shapes <span className='text-red-600'>expectations</span> for tomorrow’s commuter. A data <span className='text-red-600'>visualization</span> of culture.</h1>
              <p data-aos='fade-up' className='text-sm mt-10 uppercase'>Ready to talk business? Shoot us an email</p>
            </div>
          </div>
        </section>
        <section id="contactus" className='w-full h-screen bg-contact bg-cover relative'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center contact-old'>
            <div className='lg:w-1/2 w-full lg:pl-40 px-5 flex flex-col text-white'>
              <p data-aos='fade-right' className='text-sm mb-4 uppercase'>Let’s make it happen</p>
              <h1 data-aos='fade-right' className='lg:text-6xl text-3xl font-semibold'>Don’t hesitate to get in touch</h1>
              <Btn_primary className='mt-16' id='contact' name="Get in touch" />
            </div>
            <div className='absolute h-24 lg:left-64 left-20 bottom-0 send-us'>
              <div className='h-full pl-3 border-l relative'>
                <p className='text-white uppercase'>Send us a Message</p>
                <div className='absolute h-8 border-l top-0 left-0 see-work-scroll'></div>
              </div>
            </div>
          </div>
          <div className='w-0 h-full absolute top-0 left-0 bg-black bg-cover contact-form bottom-0 z-0 opacity-0'></div>
           <div className='home-content absolute top-0 left-0 lg:pl-24 pl-12 w-full h-full flex items-center contact-form-body hidden'>
            <div className='w-full lg:px-40 px-5 flex flex-col text-white z-10'>
                <p className='text-sm mb-4 uppercase'>It will take a minute</p>
                <h1 className='lg:text-6xl text-3xl font-semibold'>Let’s do this</h1>
                {/* <p className='text-sm my-8 uppercase'>We’re excited to hear from you!</p> */}
                <form className='w-full mt-10' action="">
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
                <Btn_primary className='mt-16' name="Submit" />
              </div>
            </div>
        </section>

      </div>

    );
  }
  
export default Home;
