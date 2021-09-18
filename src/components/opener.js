import React from "react";

function Opener(props) {
    return (
        
        <div className='opener w-full h-full absolute bg-black top-0 left-0 flex justify-center items-center z-50'>
            <img className='opener-logo w-32 h-auto opacity-0' src="images/logo/pixact-logo.png" alt="Pixact Logo" />
        </div>

    );
}

export default Opener;