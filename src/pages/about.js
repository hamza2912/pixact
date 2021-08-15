import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function About() {

    return (

      <div>
        <Header />
        <div className='w-full lg:px-16 px-5 lg:pb-16 pb-8 pt-32 about-page'>
          <h2 className='text-center text-6xl text-white font-presto text-shadow-lg font-bold'>About the <br />Archive</h2>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6'>
            <div className='archive-content flex flex-col justify-center'>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>Narrative</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>Narrative</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>Narrative</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className='archive-image'>
              <img src="images/artwork/artwork3.jpeg" className='w-full h-product bg-gray-100' />
            </div>
          </div>
          <div className='w-full lg:px-32 px-5 lg:py-16 py-8 font-presto italic lg:text-3xl text-2xl text-center'>
            <h2 className='text-white font-presto italic'>Matthew Bakkom Quote</h2>
            <h2 className='text-black font-presto italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>

          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6'>
            <div className='archive-image'>
              <img src="images/artwork/artwork1.jpeg" className='w-full h-product bg-gray-100' />
            </div>
            <div className='archive-content flex flex-col justify-center'>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>Narrative</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>Narrative</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>Narrative</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:p-16 p-5 about-page'>
          <p className='text-center text-base text-white font-presto italic'>About the Artist</p>
          <h2 className='text-center text-6xl text-white font-presto text-shadow-lg font-bold'>Matthew <br />Bakkom</h2>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6'>
            <div className='archive-content flex flex-col justify-center'>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>About Matt</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>Cont</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>Cont</h2>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className='archive-image'>
              <img src="images/artwork/artwork3.jpeg" className='w-full h-product bg-gray-100' />
            </div>
          </div>
          <div className='w-full lg:px-32 px-5 lg:py-16 py-8 lg:text-3xl text-2xl text-center'>
            <h2 className='text-white font-presto italic'>Matthew Bakkom Quote</h2>
            <h2 className='text-black font-presto italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>

          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-12'>
            <div className='archive-image'>
              <img src="images/artwork/artwork1.jpeg" className='w-full h-product bg-gray-100' />
            </div>
            <div className='archive-content flex flex-col justify-center'>
              <div className='lg:mt-10 my-5'>
                <h2 className='text-2xl font-presto italic text-white'>Pacing new designs</h2>
                <p className='text-base font-courier my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='w-full border-b-2 border-white'></div>
                <p className='text-base font-courier mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />

      </div>

    );
  }
  
export default About;