import React from "react";

function Add_button(props) {
    return (
        
        <div className="w-full h-full flex flex-row font-semibold z-50 relative shades">
            <div className="w-full h-full px-2 py-3 bg-wheat flex justify-center items-center">
                <a href={props.url} className="cursor-pointer font-presto text-center" rel="noreferrer" target="_blank">Add to Cart <br /><span className='text-sm text-pink-800'>Via Opensea</span></a>
            </div>
        </div>

    );
}

export default Add_button;