import React from 'react';
import Work from '../components/work';
import Btn_primary from './btn_primary';

function Work_content( props ) {

    if(props.type == "home"){

        return (
        
            <section className='w-full lg:h-screen h-auto bg-black lg:pt-16 py-6'>
                <div className='home-content w-full h-full lg:pl-24 pl-12'>
                    <div className='w-full h-full grid grid-rows-3'>
                        <div className='flex lg:flex-row flex-col lg:px-48 px-5 text-white items-center'>
                            <div className='lg:w-1/2 w-full lg:h-full h-auto flex flex-col z-10 '>
                                <h1 data-aos='fade-left' className='lg:text-5xl text-2xl font-semibold'>Selected <br className='lg:block hidden' />Projects</h1>
                            </div>
                            <div className='lg:w-1/2 w-full lg:h-full h-auto flex flex-col z-10 lg:pt-8 pt-0 mt-5 lg:mt-0'>
                                <p data-aos='fade-right' className='lg:text-sm text-xs max-w-md'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                                <Btn_primary className='mt-4' url="/works" name="See More" />
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='50' className='flex lg:flex-row flex-col lg:px-48 px-5 text-white relative z-10 items-center work -mt-5 lg:-mt-0'>
                            <div className='lg:w-1/2 w-full lg:h-full h-auto flex flex-col z-10 mb-5 lg:mb-0'>
                                <p className='lg:text-sm text-xs text-gray uppercase pt-4'>UI UX | Full Stack Development</p>
                                <h1 className='lg:text-5xl text-2xl font-medium'>DP Transport</h1>
                            </div>
                            <div className='lg:w-1/2 w-full lg:h-full h-auto flex flex-col z-10'>
                                <p className='lg:text-sm text-xs max-w-md lg:mt-6 mt-0 font-light'>A transport buisness company which streamline and strengthen the supply chain of any organization</p>
                                <p className='lg:text-sm text-xs max-w-md mt-4 text-blue-100'>Technologies: Figma, React, HTML5, CSS3, Tailwindcss, Node.js, MongoDB etc.</p>
                                <a href="https://dptransport-portal.web.app/" target="_blank" className='lg:text-sm text-xs text-gray uppercase lg:mt-12 mt-8 cursor-pointer hover:text-gray mb-2'>Visit the Site <i className="fas fa-angle-right text-gray text-xs"></i></a>
                            </div>
                            <div className='w-full h-full absolute top-0 left-0 bg-cover lg:hidden bg-service-data'></div>
                            <div className='w-1/2 absolute top-0 left-0 h-1 bg-blue'></div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='50' className='flex lg:flex-row flex-col lg:px-48 px-5 text-white relative z-10 items-center work mt-5 lg:mt-0'>
                            <div className='lg:w-1/2 w-full lg:h-full h-auto flex flex-col z-10 mb-5 lg:mb-0'>
                                <p className='lg:text-sm text-xs text-gray uppercase pt-4'>UI UX | Frontend</p>
                                <h1 className='lg:text-5xl text-2xl font-medium'>Dora</h1>
                            </div>
                            <div className='lg:w-1/2 w-full lg:h-full h-auto flex flex-col z-10'>
                                <p className='lg:text-sm text-xs max-w-md lg:mt-6 mt-0 font-light'>Dora gives an edge by ensuring clients get a transparent and collaborative experience</p>
                                <p className='lg:text-sm text-xs max-w-md mt-4 text-blue-100'>Technologies: Figma, React, HTML5, CSS3, Tailwindcss, Firebase etc.</p>
                                <a href="https://trydora.com/" target="_blank" className='lg:text-sm text-xs text-gray uppercase lg:mt-12 mt-8 cursor-pointer hover:text-gray mb-2'>Visit the Site <i className="fas fa-angle-right text-gray text-xs"></i></a>
                            </div>
                            <div className='w-full h-full absolute top-0 left-0 bg-cover lg:hidden bg-service-ui'></div>
                            <div className='w-1/2 absolute top-0 left-0 h-1 bg-blue'></div>
                        </div>
                    </div>
                </div>
            </section>
    
        );

    } else {

        return (
        
            <section className='w-full h-auto bg-black py-24'>
                <div className='home-content w-full lg:pl-24 pl-12'>
                    <div className='flex lg:flex-row flex-col lg:px-48 px-5 pb-5 lg:h-48 h-auto text-white lg:items-center items-start lg:justify-between'>
                        <div className='lg:w-1/2 w-full flex flex-col z-10'>
                            <h1 className='lg:text-5xl text-3xl font-semibold'>Projects <br />Highlights</h1>
                        </div>
                        <div className='lg:w-1/2 w-full flex flex-col z-10'>
                            <p className='text-sm max-w-md mt-6'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                            <Btn_primary className='mt-4' url="/contact" name="Get in touch" />
                        </div>
                    </div>
                    <Work url="https://dptransport-portal.web.app/" title="DP Transport" subtitle="UI UX | Full Stack Development" description2="Technologies: Figma, React, HTML5, CSS3, Tailwindcss, Node.js, MongoDB etc." description="A transport buisness company which streamline and strengthen the supply chain of any organization
                    " bgClass="bg-service-ui"/>
                    <Work url="https://trydora.com/" title="Dora" subtitle="UI UX | Frontend" description2="Technologies: Figma, React, HTML5, CSS3, Tailwindcss, Firebase etc." description="Dora gives an edge by ensuring clients get a transparent and collaborative experience" bgClass="bg-service-data"/>
                    <Work url="https://archive91.com/" title="Archive 91" subtitle="UI UX | Frontend" description2="Technologies: Figma, React, HTML5, CSS3, Tailwindcss, Firebase etc." description="An old fashioned website that sells NFT based digital auctions, demonstrating the archives of a company 'Smart World Technologies' back 2000s." bgClass="bg-service-ui"/>
                    <Work url="https://travelbridgeui.web.app/" title="TravelBridge" subtitle="UI UX | Frontend" description2="Technologies: HTML5, CSS3, Tailwindcss, Firebase etc." description="TravelBridge provides a simpler solution that provides a travel and hospitality tech company agility and peace of mind!" bgClass="bg-service-data"/>
                    <Work url="https://ink-software.web.app/" title="INK Softwares" subtitle="UI UX | Frontend" description2="Technologies: Figma, React, HTML5, CSS3, jQuery, Tailwindcss etc." description="A software agency that provides a full custom software development starting with a series of design thinking workshops." bgClass="bg-service-ui"/>
                    <Work url="https://github.com/hamza2912/reactBarcode" title="Barcode Attendance Software" subtitle="Frontend | Backend" description2="Technologies: React, HTML5, CSS3, Node.js, MongoDB etc." description="A real-time attendance software that maintains students' attendance records utilizing barcode scans, informs their guardian via SMS, and generates daily weekly, and monthly announcements." bgClass="bg-service-data" code="true"/>
                    <Work url="https://qorier.com/" title="Qorier" subtitle="UI UX | Frontend" description2="Technologies: Angular, Angular Material UI" description="A Qatar-based company that provides end-to-end e-commerce logistics and delivery." bgClass="bg-service-ui"/>
                    <Work url="https://grow-tech.web.app/" title="GrowTech" subtitle="UI UX | Frontend" description2="Technologies: HTML5, CSS3, Sass, Tailwindcss, jQuery etc." description="An African-based agency that transforms creative ideas into communication and provides IT consulting and training." bgClass="bg-service-data"/>
                    <Work url="https://grow-bold.web.app/" title="GrowBold" subtitle="UI UX | Frontend" description2="Technologies: HTML5, CSS3, Sass, Tailwindcss, jQuery etc." description="An African-based company that provides wide range of service from childcare education to digital skills and jobs." bgClass="bg-service-ui"/>
                    <Work url="http://dealizle.com/" title="Dealizle" subtitle="Frontend | Backend" description2="Technologies: React, HTML5, CSS3, sass, Node.js, MongoDB etc." description="A UAE-based e-commerce store recommended by Gulf News for shopping." bgClass="bg-service-data"/>
                    {/* <Work url="https://azider-store.web.app/" title="Azider" subtitle="UI UX | Frontend | Backend" description2="Technologies: Angular, Sass, Bootstrap, MdBootstrap, Firebase etc." description="An e-commerce  clothing brand " bgClass="bg-service-ui"/> */}
                    <Work url="https://github.com/hamza2912/mentorguide" title="TutorGuide" subtitle="UI UX | Frontend | Backend" description2="Technologies: React, Bootstrap, Node.js, MongoDB etc." description="A Web application that provides availability of tutors in respective areas with their profiles. Tutors can also create and maintain their profiles." bgClass="bg-service-ui" code="true"/>
                    <Work url="https://cuedin-c5b34.web.app/" title="Cuedin" subtitle="UI UX | Frontend" description2="Technologies: HTML5, CSS3, Javascript etc." description="A Market Research company that hears the voice of the consumer, their needs and create innovative products and services." bgClass="bg-service-data"/>
                    <Work url="https://github.com/hamza2912/animo" title="Animo" subtitle="UI UX | Frontend" description2="Technologies: HTML5, CSS3, Sass, Tailwindcss, jQuery etc." description="A software tool that offers microservices." bgClass="bg-service-ui" code="true"/>
                    <Work url="https://github.com/hamza2912/servaid" title="Servaid" subtitle="Frontend" description2="Technologies: HTML5, CSS3, Tailwindcss, jQuery etc." description="A Pakistan-based online medical store." bgClass="bg-service-data" code="true"/>
                </div>
            </section>
    
        );

    }

    
}

export default Work_content;