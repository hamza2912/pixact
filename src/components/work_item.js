import React from 'react';
import Work from './work';
import Work_tags from './work_tags';
// import Add_button from './add_button';

function Work_item(props) {

    return (
      
        <div className='work_item flex flex-col'>
            <Work imgDim={props.imgDim} src={props.src} />
            <div className='flex lg:flex-row flex-col items-center'>
              <div className='w-3/5 flex flex-col mt-6'>
                <Work_tags url={props.url} title={props.title} price={props.price} />
                {/* <p className='text-white text-base font-presto italic mt-2'>{props.artist}</p> */}
              </div>
              <div className='w-2/5 flex flex-col mt-6 items-end'>
                <p className='text-white text-base font-presto italic mt-2'>{props.artist}</p>
              </div>
            </div>
        </div>

    );
  }
  
export default Work_item;