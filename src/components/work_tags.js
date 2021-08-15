import React from "react";

function Work_tags(props) {

    return (
        
        <div className="lg:w-64 w-48 flex flex-row font-semibold z-50 relative shades">
            <div className="w-1/2 px-2 py-3 bg-prd-title flex justify-center items-center">
                <p className="font-presto italic">{props.title}</p>
            </div>
            <div className="w-1/2 px-2 py-3 bg-prd-price flex justify-center items-center text-white">
                <p className="font-presto italic">{props.price}</p>
            </div>
        </div>

    );
}

export default Work_tags;