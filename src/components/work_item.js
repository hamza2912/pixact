import React from 'react';
import Work from './work';
import Work_tags from './work_tags';
import Add_button from './add_button';

function Work_item(props) {

    return (
      
        <div className='work_item flex flex-col'>
            <Work imgDim={props.imgDim} src={props.src} />
            <div className='flex flex-row'>
              <div className='w-3/5 flex flex-col mt-6'>
                <Work_tags title={props.title} price={props.price} />
                <p className='text-white text-base font-presto italic mt-2'>{props.artist}</p>
              </div>
              <div className='w-2/5 flex flex-col mt-6 items-end'>
                <Add_button url={props.url} />
                <div className='lg:w-48 w-40 z-50 gray-shades relative mt-2'>
                  <div className='w-full bg-black py-1 px-2 text-center'>
                    <p className='text-sea text-base font-presto italic'>via Opensea</p>
                  </div>
                </div>
              </div>
            </div>
        </div>

    );
  }
  
export default Work_item;