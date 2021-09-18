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
        <section className='w-full h-screen bg-black'>
          <div className='home-content pl-24 w-full h-full flex items-center'>
            <div className='w-1/2 pl-40 flex flex-col text-white'>
              <p className='text-sm mb-4 uppercase'>Hi there, We’re Pixact</p>
              <h1 className='text-6xl font-semibold'>We create modern experiences for tomorrow’s brands.</h1>
            </div>
          </div>
          <div className='absolute h-24 left-64 bottom-0 see-our-work'>
            <div className='h-full pl-3 border-l relative'>
              <p className='text-white uppercase'>See our Work</p>
              <div className='absolute h-8 border-l top-0 left-0 see-work-scroll'></div>
            </div>
          </div>
          
        </section>
        <Work_content type="home" />
        <section className='w-full h-screen bg-cover bg-approach'>
          <div className='home-content pl-24 w-full h-full flex items-center'>
            <div className='w-1/2 pl-40 flex flex-col text-white'>
              <p className='text-sm mb-4 uppercase'>Approach</p>
              <h1 className='text-6xl font-semibold'>How we do it?</h1>
              <p className='text-2xl mt-16'>Through a uniquely collaborative process that combines analytical thinking, creative sorcery, and an obsession with solving impossible problems.</p>
              <Btn_primary className='mt-16' url="/" name="Read More" />
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-black'>
          <div className='home-content pl-24 w-full h-full flex items-center'>
            <div className='w-2/3 pl-40 flex flex-col text-white'>
              <p className='text-sm mb-4 uppercase'>what’s in the works?</p>
              <h1 className='text-6xl font-semibold'>An AR experience that shapes <span className='text-red-600'>expectations</span> for tomorrow’s commuter. A data <span className='text-red-600'>visualization</span> of culture.</h1>
              <p className='text-sm mt-10 uppercase'>Ready to talk business? Shoot us an email</p>
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-contact bg-cover relative'>
          <div className='home-content pl-24 w-full h-full flex items-center contact-old'>
            <div className='w-1/2 pl-40 flex flex-col text-white'>
              <p className='text-sm mb-4 uppercase'>Let’s make it happen</p>
              <h1 className='text-6xl font-semibold'>Don’t hesitate to get in touch</h1>
              <Btn_primary className='mt-16' id='contact' name="Get in touch" />
            </div>
            <div className='absolute h-24 left-64 bottom-0 see-our-work'>
              <div className='h-full pl-3 border-l relative'>
                <p className='text-white uppercase'>Send us a Message</p>
                <div className='absolute h-8 border-l top-0 left-0 see-work-scroll'></div>
              </div>
            </div>
          </div>
          <div className='w-0 h-full absolute top-0 left-0 bg-black bg-cover contact-form bottom-0 z-0 opacity-0'></div>
           <div className='home-content absolute top-0 left-0 pl-24 w-full h-full flex items-center contact-form-body hidden'>
            <div className='w-full px-40 flex flex-col text-white z-10'>
                <p className='text-sm mb-4 uppercase'>It will take a minute</p>
                <h1 className='text-6xl font-semibold'>Let’s do this</h1>
                {/* <p className='text-sm my-8 uppercase'>We’re excited to hear from you!</p> */}
                <form className='w-full mt-10' action="">
                  <input className='w-full px-4 py-3 border bg-transparent' placeholder="Subject" type="text" />
                  <div className='grid grid-cols-2 gap-4 mt-4'>
                    <input className='w-full px-4 py-3 border bg-transparent' placeholder="First Name" type="text" />
                    <input className='w-full px-4 py-3 border bg-transparent' placeholder="Last Name" type="text" />
                  </div>
                  <div className='grid grid-cols-2 gap-4 mt-4'>
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
