import React from "react";
import Btn_primary from './btn_primary';

function Service_content( props ) {

    return (
      
      <section id="servicePage" className='w-full h-screen py-2 bg-black'>
        <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
          <div className='w-full lg:px-40 px-5 flex flex-col text-white'>
            <h1 data-aos='fade-right' className='lg:text-5xl text-2xl font-semibold'>Opening Window To The<span className='text-red-600'> Digital World</span></h1>
            <p data-aos='fade-right' className='lg:text-base text-xs lg:mt-10 mt-5'>We are so much more than an innovative and dynamic software agency – we are an extension to your team.</p>
            <div className='w-full h-auto flex lg:flex-row flex-col lg:mt-10 mt-5'>
              <div className='lg:w-1/4 w-4/5 flex flex-col'>
                <ul className='w-full'>
                  <li data-aos="fade-right" data-aos-delay="150" id='ui' className='flex flex-row px-4 py-2 border border-red-600 w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i className="fas fa-pen-nib mr-4"></i>
                    <h2 className='lg:text-base text-xs'>UI, UX Design</h2>
                    <div className='border-r-4 h-1/3 absolute top-0 left-0 border-red-600 float-around-box'></div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200" id='dev' className='flex flex-row px-4 py-2 border w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i className="fas fa-code mr-4"></i>
                    <h2 className='lg:text-base text-xs'>Full Stack Development</h2>
                    <div className='border-r-4 h-1/3 absolute opacity-0 top-0 left-0 border-red-600 float-around-box'></div>
                  </li>
                  {/* <li data-aos="fade-right" data-aos-delay="250" id='data' className='flex flex-row px-4 py-2 border w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i className="fab fa-hive mr-4"></i>
                    <h2 className='lg:text-base text-xs'>Data Science</h2>
                    <div className='border-r-4 h-1/3 absolute opacity-0 top-0 left-0 border-red-600 float-around-box'></div>
                  </li> */}
                  <li data-aos="fade-right" data-aos-delay="250" id='data' className='flex flex-row px-4 py-2 border w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i className="fab fa-hive mr-4"></i>
                    <h2 className='lg:text-base text-xs'>NFT</h2>
                    <div className='border-r-4 h-1/3 absolute opacity-0 top-0 left-0 border-red-600 float-around-box'></div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="300" id='digi' className='flex flex-row px-4 py-2 border w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i className="fas fa-ad mr-4"></i>
                    <h2 className='lg:text-base text-xs'>Digital Marketing</h2>
                    <div className='border-r-4 h-1/3 absolute opacity-0 top-0 left-0 border-red-600 float-around-box'></div>
                  </li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className='lg:w-3/4 w-full lg:h-80 h-auto flex flex-col lg:pl-10'>
                <div id='ui-content' className='services-content w-full'>
                  <div className='w-full flex lg:flex-row flex-col justify-between lg:items-center items-left'>
                    <h2 className='lg:text-2xl text-lg font-semibold lg:block hidden'>UI UX Design</h2>
                    <a className='mr-2 text-pink-400' href="https://dribbble.com/wearepixact" target="_blank"><i className="fab fa-dribbble lg:text-xl text-lg mr-1"></i>dribbble</a> 
                  </div>   
                  <p className='lg:text-sm text-xs mt-2 mb-4 font-light'>We believe in providing a thoughtful and polished UI experience followed by the design thinking methodology. We understand and empathize with your problem, ideate and analyze different possible solutions and translate them to pixel-perfect designs.</p>
                  <img className='lg:w-2/5 w-1/2 h-auto mx-auto' src="images/services/ui-design.svg" alt="" />
                </div>
                <div id='dev-content' className='services-content w-full hidden'>
                  <h2 className='lg:text-2xl text-lg font-semibold lg:block hidden'>Full Stack Developemnt</h2>
                  <p className='lg:text-sm text-xs mt-2 mb-4 font-light'>We put life into designs by writing clean, reusable, and scalable code, raising no questions on responsiveness and compatibility. In addition to mastering frontend skills, we are experts at building both client and server-based applications.</p>
                  <img className='lg:w-2/5 w-1/2 h-auto mx-auto' src="images/services/dev.svg" alt="" />
                </div>
                {/* <div id='data-content' className='services-content w-full hidden'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>Data Science</h2>
                  <p className='lg:text-sm text-xs mt-2 mb-4 font-light'>We help transform businesses by enabling them to make sharper, critical, and informed decisions using digital data. We derive valuable insights to make smarter data-driven decisions.</p>
                  <img className='lg:w-1/3 w-2/5 h-auto mx-auto' src="images/services/datascience.svg" alt="" />
                </div> */}
                <div id='data-content' className='services-content w-full hidden'>
                  <h2 className='lg:text-2xl text-lg font-semibold lg:block hidden'>Non Fungible Tokens</h2>
                  <p className='lg:text-sm text-xs mt-2 mb-4 font-light'>We help founders launch disrupting web3 Projects. Work with us to launch your own successful NFT collection.</p>
                  <img className='lg:w-1/3 w-2/5 h-auto mx-auto' src="images/services/nft.svg" alt="" />
                </div>
                <div id='digi-content' className='services-content w-full hidden'>
                  <h2 className='lg:text-2xl text-lg font-semibold lg:block hidden'>Digital Marketing</h2>
                  <p className='lg:text-sm text-xs mt-2 mb-4 font-light'>We provide effective and productive digital marketing solutions to help you achieve more leads and sales through your digital assets and get you in front of your target audience at the right time and on the right digital screen. </p>
                  <img className='lg:w-2/5 w-1/2 h-auto mx-auto' src="images/services/digi.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );

}

export default Service_content;