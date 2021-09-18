import React from "react";

function Btn_primary(props) {

    var btn_class = 'w-32 bg-white rounded-3xl text-black p-2 font-semibold text-center btn cursor-pointer ' + props.className;
    
    return (
    
        <a id={props.id} className={btn_class} href={props.url}>{props.name} <i className="btn-primary fas fa-angle-right text-black hidden"></i></a>

    );
}

export default Btn_primary;