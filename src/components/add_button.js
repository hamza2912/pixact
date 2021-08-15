import React from "react";

function Add_button(props) {
    return (
        
        <div className="lg:w-48 w-40 flex flex-row font-semibold z-50 relative shades">
            <div className="w-full px-2 py-3 bg-wheat flex justify-center items-center">
                <a href={props.url} className="cursor-pointer font-presto italic">Add to Cart</a>
            </div>
        </div>

    );
}

export default Add_button;