import React from 'react';
import Work from '../components/work';
import Btn_primary from './btn_primary';

function Work_content( props ) {

    if(props.type == "home"){

        return (
        
            <section className='w-full h-screen bg-black pt-16'>
                <div className='home-content w-full h-full pl-24'>
                    <div className='w-full h-full grid grid-rows-3'>
                        <div className='flex flex-row px-48 text-white items-center'>
                            <div className='w-1/2 h-full flex flex-col z-10 '>
                                <h1 data-aos='fade-left' className='text-6xl font-semibold'>Selected <br />Projects</h1>
                            </div>
                            <div className='w-1/2 h-full flex flex-col z-10  pt-8'>
                                <p data-aos='fade-right' className='text-sm max-w-md'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                                <Btn_primary className='mt-4' url="/" name="See More" />
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='50' className='flex flex-row px-48 text-white relative cursor-pointer z-10 items-center'>
                            <div className='w-1/2 h-full flex flex-col z-10'>
                                <p className='text-sm text-gray uppercase'>NFT Artwork</p>
                                <h1 className='text-5xl font-semibold'>Archive 91</h1>
                            </div>
                            <div className='w-1/2 h-full flex flex-col z-10'>
                                <p className='text-sm max-w-md mt-6'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                                <a href="/works" className='text-sm text-gray uppercase mt-12 cursor-pointer hover:text-gray'>Browse Case Study <i className="fas fa-angle-right text-gray text-xs"></i></a>
                            </div>
                            <div className='w-full h-full absolute top-0 left-0 bg-cover hidden bg-about'></div>
                        </div>
                        <div data-aos='fade-up' data-aos-delay='50' className='flex flex-row px-48 text-white relative cursor-pointer z-10 items-center'>
                            <div className='w-1/2 h-full flex flex-col z-10'>
                                <p className='text-sm text-gray uppercase'>NFT Artwork</p>
                                <h1 className='text-5xl font-semibold'>Archive 91</h1>
                            </div>
                            <div className='w-1/2 h-full flex flex-col z-10'>
                                <p className='text-sm max-w-md mt-6'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                                <a href="/works" className='text-sm text-gray uppercase mt-12 cursor-pointer hover:text-gray'>Browse Case Study <i className="fas fa-angle-right text-gray text-xs"></i></a>
                            </div>
                            <div className='w-full h-full absolute top-0 left-0 bg-cover hidden bg-about'></div>
                        </div>
                    </div>
                </div>
            </section>
    
        );

    } else {

        return (
        
            <section className='w-full h-auto bg-black'>
                <div className='home-content w-full pl-24'>
                    <div className='flex flex-row px-48 h-80 text-white items-center justify-between'>
                        <h1 className='text-6xl font-semibold'>Selected <br />Projects</h1>
                        <p className='text-sm max-w-md'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                    </div>
                    <Work id='work1' title="Archive 91" subtitle="NFT Artwork" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-about"/>
                    <Work id='work2' title="Archive 91" subtitle="NFT Artwork" description="A selection of Creative Technology, Content Storytelling and Design Interaction projects." bgClass="bg-services"/>
                </div>
            </section>
    
        );

    }

    
}

export default Work_content;