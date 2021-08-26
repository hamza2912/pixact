import React from "react";
import Modal from "./modal";

function Artwork_modals(props) {
    return (

        <div>
        
        <Modal work_id='work1' src='images/artwork/artwork1.jpg' title='MAR.18.2021 19:15 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />

        <Modal work_id='work2' src='images/artwork/artwork2.jpg' title='MAR.18.2021 19:17 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />
  
        <Modal work_id='work3' src='images/artwork/artwork3.jpg' title='MAR.18.2021 19:19 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />
  
        <Modal work_id='work4' src='images/artwork/artwork4.jpg' title='MAR.18.2021 19:21 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />
  
        <Modal work_id='work5' src='images/artwork/artwork5.jpg' title='MAR.18.2021 19:22 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />

        </div>

    );
}

export default Artwork_modals;