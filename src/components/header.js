import React from "react";
import { useHistory } from 'react-router-dom';

function Header() {

    // // let history = useHistory();

    // // function backToHome() {
    // //   history.push("");
    
    // // }

    return (
        
        <div className=''>

          <header className='header lg:w-24 w-12 h-screen fixed top-0 left-0 bottom-0 bg-transparent border-r lg:px-5 px-0 py-6 z-20'>
              <div className='flex flex-col h-full items-center justify-between text-white'>
                <div className='logo-container w-4/5'>
                  <a href="/">
                    <img className='w-full h-auto' src="images/logo/pixact-logo.png" alt="Pixact Logo Mini" />
                    <p className='font-medium text-lg pixact-label mt-4'>Pixact</p>
                  </a>
                </div>
                <div className='show-nav w-2/3 cursor-pointer'>
                  <img className='w-full h-auto' src="images/icons/bars.svg" alt="Bars Icon" />
                </div>
                <div className="w-full h-12"></div>
              </div>
              <div className='scrollbar absolute top-0 right-0 h-16 w-px bg-white'></div>
          </header>
          {/* imaginary header */}
          <header className='imaginary-header w-full h-auto fixed top-0 left-0 bg-transparent px-5 py-10 z-30 hidden'>
              <div className='flex flex-row h-auto items-center justify-between text-white'>
                <div className='w-24 px-5 imaginary-logo-container flex flex-row items-center cursor-pointer'>
                  <img className='lg:w-4/5 w-3/5 h-auto' src="images/logo/pixact-logo.png" alt="Pixact Logo Mini" />
                  <p className='font-medium text-lg'>Pixact</p>
                </div>
                <i className="fas fa-angle-left pr-5 cursor-pointer imaginary-logo-container" ></i>
              </div>
          </header>

          {/* nav */}
          <div className='nav-content bg-black lg:pl-24 pl-12 w-full h-screen flex items-center fixed top-0 left-0 hidden z-20'>
              <div className='w-full lg:h-auto h-3/5 lg:pr-24 pr-12 flex lg:flex-row flex-col text-white justify-between z-50'>
                <a id='work' className='hover:text-white ns na nt' href="/works">
                  <h1 className='lg:text-6xl text-4xl font-semibold'>Work</h1>
                </a>
                <a id='services' className='hover:text-white nw na nt' href="/services">
                  <h1 className='lg:text-6xl text-4xl font-semibold'>Services</h1>
                </a>
                <a id='approach' className='hover:text-white nw ns nt' href="/approach">
                  <h1 className='lg:text-6xl text-4xl font-semibold'>Approach</h1>
                </a>
                <a id='about' className='hover:text-white nw ns na' href="/contact">
                  <h1 className='lg:text-6xl text-4xl font-semibold'>Contact</h1>
                </a>
              </div>
               {/* nav backgrounds */}
              <div className='w-full h-screen absolute top-0 left-0 bg-work bg-cover header-work hidden'></div>
              <div className='w-full h-screen absolute top-0 left-0 bg-services bg-cover header-services hidden'></div>
              <div className='w-full h-screen absolute top-0 left-0 bg-approach bg-cover header-approach hidden'></div>
              <div className='w-full h-screen absolute top-0 left-0 bg-contact bg-cover header-contact hidden'></div>
          </div>

        </div>
       

    );
}

export default Header;