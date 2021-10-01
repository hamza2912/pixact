import React from "react";

function Work( props ) {

    var bgClass = "w-full h-full absolute top-0 left-0 bg-cover lg:hidden " + props.bgClass;
    
    return (
        
    <div id={props.id} className='flex lg:flex-row flex-col lg:px-48 px-5 lg:pt-24 pt-6 lg:pb-12 pb-6 lg:h-80 h-auto text-white relative cursor-pointer z-10'>
        <div className='lg:w-1/2 w-full flex flex-col z-10'>
            <p className='text-sm text-gray uppercase'>{props.subtitle}</p>
            <h1 className='lg:text-5xl text-3xl font-semibold'>{props.title}</h1>
        </div>
        <div className='lg:w-1/2 w-full flex flex-col z-10'>
            <p className='text-sm max-w-md mt-6'>{props.description}</p>
            <a href="/works" className='text-sm text-gray uppercase mt-12 cursor-pointer hover:text-gray'>Browse Case Study <i className="fas fa-angle-right text-gray text-xs"></i></a>
        </div>
        <div className={bgClass}></div>
    </div>

    );
}

export default Work;