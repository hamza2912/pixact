import React from "react";

function Service_content( props ) {

    return (
      
      <section id="servicePage" className='w-full h-screen py-2 bg-black'>
        <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
          <div className='w-full lg:px-40 px-5 flex flex-col text-white'>
            <h1 data-aos='fade-right' className='lg:text-6xl text-2xl font-semibold'>Opening Window To The<span className='text-red-600'> Digital World</span></h1>
            <p data-aos='fade-right' className='lg:text-sm text-xs lg:mt-10 mt-5'>We are so much more than an innovative and dynamic IT company – we are an extension to your team and your trusted partners regardless of industry or business size. Being a dedicated IT partner, we support you and your business on the road towards real innovation and success.</p>
            <div className='w-full h-auto flex lg:flex-row flex-col lg:mt-10 mt-5'>
              <div className='lg:w-1/4 w-4/5 flex flex-col'>
                <ul className='w-full'>
                  <li data-aos="fade-right" data-aos-delay="150" id='ui' className='flex flex-row px-4 py-2 border border-red-600 w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i class="fas fa-pen-nib mr-4"></i>
                    <h2 className='lg:text-lg text-sm '>UI, UX Design</h2>
                    <div className='border-r-4 h-1/3 absolute top-0 left-0 border-red-600 float-around-box'></div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="200" id='dev' className='flex flex-row px-4 py-2 border w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i class="fas fa-code mr-4"></i>
                    <h2 className='lg:text-lg text-sm '>Frontend Development</h2>
                    <div className='border-r-4 h-1/3 absolute opacity-0 top-0 left-0 border-red-600 float-around-box'></div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="250" id='data' className='flex flex-row px-4 py-2 border w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i class="fab fa-hive mr-4"></i>
                    <h2 className='lg:text-lg text-sm '>Data Science</h2>
                    <div className='border-r-4 h-1/3 absolute opacity-0 top-0 left-0 border-red-600 float-around-box'></div>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="300" id='digi' className='flex flex-row px-4 py-2 border w-full text-white items-center mb-4 cursor-pointer services-options overflow-hidden'>
                    <i class="fas fa-ad mr-4"></i>
                    <h2 className='lg:text-lg text-sm '>Digital Marketing</h2>
                    <div className='border-r-4 h-1/3 absolute opacity-0 top-0 left-0 border-red-600 float-around-box'></div>
                  </li>
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className='lg:w-3/4 w-full lg:h-80 h-auto flex flex-col lg:pl-10'>
                <div id='ui-content' className='services-content w-full'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>UI UX Design</h2>
                  <p className='text-xs mt-2 mb-4'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
                  <img className='lg:w-2/5 w-1/2 h-auto mx-auto' src="images/services/ui-design.svg" alt="" />
                </div>
                <div id='dev-content' className='services-content w-full hidden'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>Frontend Developemnt</h2>
                  <p className='text-xs mt-2 mb-4'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
                  <img className='lg:w-2/5 w-1/2 h-auto mx-auto' src="images/services/dev.svg" alt="" />
                </div>
                <div id='data-content' className='services-content w-full hidden'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>Data Science</h2>
                  <p className='text-xs mt-2 mb-4'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
                  <img className='lg:w-1/3 w-2/5 h-auto mx-auto' src="images/services/datascience.svg" alt="" />
                </div>
                <div id='digi-content' className='services-content w-full hidden'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>Digital Marketing</h2>
                  <p className='text-xs mt-2 mb-4'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
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





















   {/* <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-2 lg:mt-12 mt-6'>
                <div className='w-full border border-white lg:pt-12 pt-6 px-2 pb-2 flex flex-col bg-service-ui bg-cover'>
                  <h2 className='lg:text-2xl text-lg font-semibold'>UI UX Design</h2>
                  <p className='text-xs mt-10'>Data science is the field of applying advanced analytics techniques and scientific principles to extract valuable information from data for business decision-making,</p>
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