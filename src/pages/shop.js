import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Work_item from '../components/work_item';

function Shop() {

    return (

      <div>
        <Header />
        <div className='w-full pb-16 pt-32 lg:px-32 px-5 shop-page'>
          <h2 className='text-center text-6xl text-white font-presto text-shadow-lg font-bold'>Available <br />ArtWorks</h2>
          <p className='text-center mt-10 font-presto italic text-white text-2xl'>Quantities Limited</p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-40 gap-y-12 lg:mt-24 mt-12'>
            <Work_item imgDim="w-full h-80" src="images/artwork/artwork1.jpeg" title="Art Piece # 1" price="$3k" url="/" artist="Matthew Bakkom" />
            <Work_item imgDim="w-full h-80" src="images/artwork/artwork2.jpeg" title="Art Piece # 1" price="$3k" url="/" artist="Matthew Bakkom" />
            <Work_item imgDim="w-full h-80" src="images/artwork/artwork3.jpeg" title="Art Piece # 1" price="$3k" url="/" artist="Matthew Bakkom" />
            <Work_item imgDim="w-full h-80" src="images/artwork/artwork4.jpeg" title="Art Piece # 1" price="$3k" url="/" artist="Matthew Bakkom" />
          </div>
        </div>
        <Footer />
      </div>

    );
  }
  
export default Shop;