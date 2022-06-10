import React from "react";

function Work( props ) {

    var bgClass = "w-full h-full absolute top-0 left-0 bg-cover lg:hidden " + props.bgClass;
    
    return (
        
    <div className="work flex lg:flex-row flex-col lg:px-48 px-5 lg:pt-24 pt-6 lg:pb-12 pb-6 lg:h-80 h-auto text-white relative z-10">
        <div className='lg:w-1/2 w-full flex flex-col z-10'>
            <p className='lg:text-sm text-xs text-gray uppercase'>{props.subtitle}</p>
            <h1 className='lg:text-5xl text-2xl font-medium'>{props.title}</h1>
        </div>
        <div className='lg:w-1/2 w-full flex flex-col z-10'>
            <p className='text-sm max-w-md mt-6 font-light'>{props.description}</p>
            <p className='text-sm max-w-md mt-4 text-blue-100'>{props.description2}</p>
            <a href={props.url} target="_blank" className='lg:text-sm text-xs text-gray uppercase lg:mt-12 mt-6 cursor-pointer hover:text-gray'>{props.code != "true" ? "Visit the Site" : "See the Code"} <i className="fas fa-angle-right text-gray text-xs"></i></a>
        </div>
        <div className={bgClass}></div>
        <div className='w-1/2 absolute top-0 left-0 h-1 bg-blue'></div>
    </div>

    );
}

export default Work;