import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Artwork_modals from '../components/artwork_modals';
import Available_artworks from '../components/available_artworks';

function Shop() {

    return (

      <div>

        <Artwork_modals />

        <Header />
        <div className='w-full pb-16 pt-32 lg:px-32 px-5 shop-page'>
          <Available_artworks />
        </div>
        <Footer />
        
      </div>

    );
  }
  
export default Shop;





