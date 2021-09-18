import React from "react";

function Work( props ) {

    var bgClass = "w-full h-full absolute top-0 left-0 bg-cover hidden " + props.bgClass;
    
    return (
        
    <div id={props.id} className='flex flex-row px-48 pt-24 pb-12 h-80 text-white relative cursor-pointer z-10'>
        <div className='w-1/2 flex flex-col z-10'>
            <p className='text-sm text-gray uppercase'>{props.subtitle}</p>
            <h1 className='text-5xl font-semibold'>{props.title}</h1>
        </div>
        <div className='w-1/2 flex flex-col z-10'>
            <p className='text-sm max-w-md mt-6'>{props.description}</p>
            <a href="/works" className='text-sm text-gray uppercase mt-12 cursor-pointer hover:text-gray'>Browse Case Study <i className="fas fa-angle-right text-gray text-xs"></i></a>
        </div>
        <div className={bgClass}></div>
    </div>

    );
}

export default Work;