import React from "react";

function Header() {
    return (
        
        <div>

          <header className='header w-24 h-full fixed top-0 left-0 bg-transparent border-r px-5 py-10 z-10'>
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
                <div></div>
              </div>
              <div className='scrollbar absolute top-0 right-0 h-16 w-px bg-white'></div>
          </header>
          {/* imaginary header */}
          <header className='imaginary-header w-24 h-full fixed top-0 left-0 bg-transparent px-5 py-10 z-50 hidden'>
              <div className='flex flex-col h-full items-center justify-between text-white'>
                <div className='imaginary-logo-container flex flex-row items-center cursor-pointer'>
                  <img className='w-4/5 h-auto' src="images/logo/pixact-logo.png" alt="Pixact Logo Mini" />
                  <p className='font-medium text-lg'>Pixact</p>
                </div>
              </div>
          </header>

          {/* nav */}
          <div className='nav-content bg-black pl-24 w-full h-screen flex items-center fixed top-0 left-0 hidden z-20'>
              <div className='w-full pr-24 flex flex-row text-white justify-between z-50'>
                <a id='work' className='hover:text-white ns na nt' href="/works">
                  <h1 className='text-6xl font-semibold'>Work</h1>
                </a>
                <a id='services' className='hover:text-white nw na nt' href="">
                  <h1 className='text-6xl font-semibold'>Services</h1>
                </a>
                <a id='approach' className='hover:text-white nw ns nt' href="/approach">
                  <h1 className='text-6xl font-semibold'>Approach</h1>
                </a>
                <a id='about' className='hover:text-white nw ns na' href="/approach">
                  <h1 className='text-6xl font-semibold'>About</h1>
                </a>
              </div>
               {/* nav backgrounds */}
              <div className='w-full h-screen absolute top-0 left-0 bg-work bg-cover hidden'></div>
              <div className='w-full h-screen absolute top-0 left-0 bg-services bg-cover hidden'></div>
              <div className='w-full h-screen absolute top-0 left-0 bg-approach bg-cover hidden'></div>
              <div className='w-full h-screen absolute top-0 left-0 bg-about bg-cover hidden'></div>
          </div>

        </div>
       

    );
}

export default Header;