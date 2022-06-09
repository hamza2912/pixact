import React from "react";

function Btn_primary(props) {

    var btn_class = 'lg:w-32 w-24 bg-white rounded-3xl text-black lg:text-base text-xs p-2 font-semibold text-center btn cursor-pointer ' + props.className;
    
    return (
    
        <a id={props.id} className={btn_class} href={props.url} target="_blank">{props.name} <i className="btn-primary fas fa-angle-right text-black hidden"></i></a>

    );
}

export default Btn_primary;