import React from 'react';
import Work from '../components/work';
import Btn_primary from './btn_primary';

function Work_content( props ) {

    if(props.type == "home"){

        return (
        
            <section className='w-full h-screen bg-black lg:pt-16 py-6'>
                <div className='home-content w-full h-full lg:pl-24 pl-12'>
                    <div className='w-full h-full grid grid-rows-3'>
                        <div className='flex lg:flex-row flex-col lg:px-48 px-5 text-white items-center'>
                            <div className='lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col z-10 '>
                                <h1 data-aos='fade-left' className='lg:text-6xl text-3xl font-semibold'>Selected <br />Projects</h1>
                            </div>
                            <div className='lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col z-10 lg:pt-8 pt-0'>
                                <p data-aos='fade-right' className='text-sm max-w-md'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                                <Btn_primary className='mt-4' url="/works" name="See More" />
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='50' className='flex lg:flex-row flex-col lg:px-48 px-5 text-white relative z-10 items-center work'>
                            <div className='lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col z-10'>
                                <p className='text-sm text-gray uppercase'>NFT Artwork</p>
                                <h1 className='lg:text-5xl text-3xl font-semibold'>Archive 91</h1>
                            </div>
                            <div className='lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col z-10'>
                                <p className='text-sm max-w-md lg:mt-6 mt-0'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                                <a href="https://archive91.com/" target="_blank" className='text-sm text-gray uppercase lg:mt-12 mt-6 cursor-pointer hover:text-gray'>Visit the Site <i className="fas fa-angle-right text-gray text-xs"></i></a>
                            </div>
                            <div className='w-full h-full absolute top-0 left-0 bg-cover lg:hidden bg-service-data'></div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='50' className='flex lg:flex-row flex-col lg:px-48 px-5 text-white relative z-10 items-center work'>
                            <div className='lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col z-10'>
                                <p className='text-sm text-gray uppercase'>Software Agency</p>
                                <h1 className='lg:text-5xl text-3xl font-semibold'>INK Softwares</h1>
                            </div>
                            <div className='lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col z-10'>
                                <p className='text-sm max-w-md lg:mt-6 mt-0'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                                <a href="https://ink-software.web.app/" target="_blank" className='text-sm text-gray uppercase lg:mt-12 mt-6 cursor-pointer hover:text-gray'>Visit the Site <i className="fas fa-angle-right text-gray text-xs"></i></a>
                            </div>
                            <div className='w-full h-full absolute top-0 left-0 bg-cover lg:hidden bg-service-ui'></div>
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
                            <h1 className='lg:text-6xl text-3xl font-semibold'>Our Projects</h1>
                        </div>
                        <div className='lg:w-1/2 w-full flex flex-col z-10'>
                            <p className='text-sm max-w-md mt-6'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                            <Btn_primary className='mt-4' url="/contact" name="Get in touch" />
                        </div>
                    </div>
                    <Work url="https://archive91.com/" title="Archive 91" subtitle="NFT Artwork" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-data"/>
                    <Work url="https://ink-software.web.app/" title="INK Softwares" subtitle="Software Agency" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-ui"/>
                    <Work url="https://github.com/hamza2912/reactBarcode" title="Barcode Attendance Software" subtitle="Administration" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-data"/>
                    <Work url="https://qorier.com/" title="Qorier" subtitle="E-commerce" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-ui"/>
                    <Work url="https://grow-tech.web.app/" title="GrowTech" subtitle="Technology" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-data"/>
                    <Work url="https://grow-bold.web.app/" title="GrowBold" subtitle="Education" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-ui"/>
                    <Work url="http://dealizle.com/" title="Dealizle" subtitle="E-commerce" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-data"/>
                    <Work url="https://azider-store.web.app/" title="Azider" subtitle="E-commerce" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-ui"/>
                    <Work url="https://cuedin-c5b34.web.app/" title="Cuedin" subtitle="Market Research" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-data"/>
                    <Work url="https://github.com/hamza2912/animo" title="Animo" subtitle="Softare Tools" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-ui"/>
                    <Work url="https://github.com/hamza2912/servaid" title="Servaid" subtitle="Pharmacy" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-data"/>
                    <Work url="https://github.com/hamza2912/mentorguide" title="TutorGuide" subtitle="Education" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-service-ui"/>
                </div>
            </section>
    
        );

    }

    
}

export default Work_content;