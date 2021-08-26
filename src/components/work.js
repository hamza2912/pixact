import React from "react";

function Work(props) {

    var imgClass = props.imgDim + ' bg-white cursor-pointer'
    return (
        
        <div className="w-full h-auto border-2 border-white shadow-lg p-2">
            <div className="w-full border-2 border-white shadow-lg">
                <img src={props.src} className={imgClass} alt="Work" />
            </div>
        </div>

    );
}

export default Work;