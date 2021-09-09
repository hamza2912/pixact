import React from 'react';
import Header from '../components/header';
import Artwork_modals from '../components/artwork_modals';
import Footer from '../components/footer';
import Available_artworks from '../components/available_artworks';

function Home2() {

  const [toSend, setToSend] = React.useState({
    email: '',
    number: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  // const onSubmit = (e) => {
  //   console.log(toSend.email, toSend.number);
  // };

    return (
      
      <div>

        <Artwork_modals />

        <Header />

        <div className='main_body bg-home'>
          {/* landing page */}
          <div className='w-full lg:h-screen lg:pt-40 pt-32 lg:px-16 px-5 landing-page'>


            {/* minimized video window */}
            <div id='drag-w' className='absolute bottom-0 left-0 px-3 py-1 w-1/6 bg-video-header border-2 shadow-lg cursor-pointer hidden'>
              <div className='flex flex-row items-center'>
                <img className='w-5 h-auto' src="images/icons/searchFiles.png" alt="Search Files Icon 98" />
                <p className='ml-2 font-presto italic text-xs text-white'>New York City: 2001</p>
              </div>
            </div>

            {/* desktop draggable video */}
            <div id="mydiv" className='absolute first-pos z-10 bg-blue-200 text-center border-2 shadow-lg video-dim cursor-move hidden lg:block'>
              <div className='w-full pb-5 z-10 bg-gray text-white' id="mydivheader">
                <div className='w-full px-3 py-1 bg-video-header flex flex-row items-center justify-between'>
                  <div className='flex flex-row items-center'>
                  <img className='w-5 h-auto' src="images/icons/searchFiles.png" alt="Search Files Icon 98" />
                  <p className='ml-2 font-presto italic text-xs'>New York City: 2001</p>
                  </div>
                  <div className='flex flex-row'>
                    <i className="fas fa-minus text-black z-50 p-1 bg-gray border text-sm shadow-md mr-sm cursor-pointer minimize-div"></i>
                    <i className="fas fa-times text-black z-50 p-1 bg-gray border text-sm shadow-md cursor-pointer close-div"></i>
                  </div>
                </div>
              </div>
              <video className='w-full h-auto border-2 border-black' controls poster=
                "video/video_header.PNG">
                <source src="video/video.mp4" type="video/mp4"/>
              </video>
            </div>
            
            {/* mobile video */}
            <div id='mydiv' className='w-full border-2 border-white lg:hidden'>
              <div className='w-full px-5 py-1 bg-video-header flex flex-row items-center justify-between'>
                  <div className='flex flex-row items-center'>
                  <img className='w-5 h-auto' src="images/icons/searchFiles.png" alt="Search Files Icon 98" />
                  <p className='ml-2 font-presto italic text-xs'>New York City: 2001</p>
                  </div>
                  <div className='flex flex-row'>
                    <i className="fas fa-times text-black z-50 p-1 bg-gray border text-sm shadow-md cursor-pointer close-div"></i>
                  </div>
              </div>
              <video className='w-full h-auto border-2 border-black' controls poster=
                "video/video_header.PNG">
                <source src="video/video.mp4" type="video/mp4"/>
              </video>
            </div>

            {/* landing page content */}
            <div className='w-full flex lg:flex-row flex-col h-full'>
              <div className='lg:w-1/2 w-full'>

              </div>
              <div className='lg:w-1/2 w-full lg:pl-12 mt-2 lg:mt-0'>
                <p className='lg:text-3xl text-xl text-white font-courier lg:max-w-2xl text-justify'>Moments in time met with computer error, glitched into an entirely new phenomenon — all tangible via NFT. Archive91 displays the raw truth of the dot com bubble collapse while reminding us of our human tendency to repeat the past.</p>

                {/* fixed sign up form */}
                <div id='popup' className='mt-5'>
                  <div className='w-signup border-t-2 border-l-2 border-r-2 shadow-lg z-10 bg-gray text-white'>
                    <div className='w-full px-3 py-1 bg-video-header flex flex-row items-center justify-between'>
                      <div className='flex flex-row items-center'>
                      <img className='w-5 h-auto' src="images/icons/messege.png" alt="Search Files Icon 98" />
                      <p className='font-presto italic font-normal ml-2 text-xs'>New Messeges: (1)</p>
                      </div>
                      <div className='flex flex-row'>
                        <i className="fas fa-times text-black z-50 p-1 bg-gray border text-sm shadow-md cursor-pointer"></i>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray border-l-2 border-r-2 shadow-lg w-signup h-96 px-10 pb-3 bg-signup relative flex justify-center items-end'>
                    <div className='w-signup'>
                      <div className='mb-2'>
                        <h2 className='font-sarina lg:text-2xl text-xl text-center'>for premier access to</h2>
                        <p className='font-courier text-center lg:text-2xl text-lg tracking-widest text-gray-600'>Archive 91's Limited Edition<br className='hidden lg:block' /> NFT Release</p>
                      </div>
                      <form id='input-details' className='w-full' method="POST">
                        <div className='flex flex-row relative w-full'>
                          <img className='w-7 h-6 mr-1' src="images/icons/email.png" alt="" />
                          <label className='absolute -top-2 left-10 bg-white font-medium font-presto px-1 text-xs' htmlFor="email">Email</label>
                          <input className='w-full bg-gray border border-black px-2 focus:outline-none' type="text"  name='email' value={toSend.email} onChange={handleChange} />
                        </div>
                        <div className='flex flex-row relative w-full mt-4'>
                          <img className='w-7 h-6 mr-1' src="images/icons/phone.png" alt="" />
                          <label className='absolute -top-2 left-10 bg-white font-medium font-presto px-1 text-xs' htmlFor="number">Phone Number</label>
                          <input className='w-full bg-gray border border-black px-2 focus:outline-none' type="text"  name='number' value={toSend.number} onChange={handleChange} />
                        </div>
                       
                      </form>
                      <div id='recieved' className='w-full text-center hidden mb-4'>
                        <p className='font-presto italic text-lg'>Thanks, you’re on the list</p>
                      </div>
                      <div className='w-full flex justify-end'>
                        <button id='submit-popup' className='px-2 bg-white text-black text-xs font-medium ml-8'>Submit</ button>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* <button type="submit">Send</button> */}

              </div>

            </div>
          </div>
          {/* our collection */}
          <div className='w-full lg:py-16 lg:px-32 px-5 py-5 mt-12'>
            <Available_artworks />
          </div>
          {/* read more */}
          <div className='w-full py-16 read-page'>
            <h2 className='text-right text-5xl text-black font-presto italic text-white text-shadow-lg lg:mr-32 mr-10'>More on M. Bakkom...</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 p-6 border-2 border-white my-12'>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black flex justify-center items-center cursor-pointer'>
                <a className='w-4/5' href="https://www.nytimes.com/2001/07/30/nyregion/a-debut-in-queens-nighthawks-at-the-museum.html?searchResultPosition=7" rel="noreferrer" target="_blank">
                  <img src="images/logo/new_york_times_logo.png" alt="New York Times" />
                </a>              
              </div>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black flex justify-center items-center cursor-pointer'>
                <a className='w-4/5' href="https://www.startribune.com/artist-matthew-bakkom-marks-minneapolis-homecoming-with-diy-exhibit-of-wwi-photography/500151282/" rel="noreferrer" target="_blank">
                  <img src="images/logo/star_tribune_logo.png" alt="New York Times" />
                </a>
              </div>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black flex justify-center items-center cursor-pointer'>
                <a className='w-1/4' href="https://madparis.fr/francais/bibliotheque/expositions/expositions-terminees/presentation-2904" rel="noreferrer" target="_blank">
                  <img src="images/logo/mad_paris_logo.png" alt="New York Times" />
                </a>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer></Footer>
        </div>

      </div>

    );
  }
  
export default Home2;











  // const [toSend, setToSend] = useState({
  //   from_name: '',
  //   to_name: '',
  //   message: '',
  //   reply_to: '',
  // });

//   React.useEffect(() => {
//     setusername(localStorage.getItem('name'));
//   }, []);