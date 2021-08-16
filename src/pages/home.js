import React from 'react';
import Header from '../components/header';
import Work from '../components/work';
import Work_tags from '../components/work_tags';
import Add_button from '../components/add_button';
import Modal from '../components/modal';
import Footer from '../components/footer';

function Home() {

  const [toSend, setToSend] = React.useState({
    email: '',
    number: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    console.log(toSend.email, toSend.number);
  };

  // const [toSend, setToSend] = useState({
  //   from_name: '',
  //   to_name: '',
  //   message: '',
  //   reply_to: '',
  // });

//   React.useEffect(() => {
//     setusername(localStorage.getItem('name'));
//   }, []);

    return (
      
      <div>

        <Modal work_id='work3' src='images/artwork/artwork3.jpeg' title='Artwork 3' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='/'  />

        <Modal work_id='work1' src='images/artwork/artwork1.jpeg' title='Artwork 1' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='/'  />

        <Header />

        <div className='main_body'>
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
              <video className='w-full h-auto border-2 border-black' controls>
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
              <video className='w-full h-auto border-2 border-black' controls>
                <source src="video/video.mp4" type="video/mp4"/>
              </video>
            </div>

            {/* landing page content */}
            <div className='w-full flex lg:flex-row flex-col'>
              <div className='lg:w-1/2 w-full'>

              </div>
              <div className='lg:w-1/2 w-full lg:pl-12 mt-2 lg:mt-0'>
                <p className='lg:text-3xl text-xl text-white font-courier lg:max-w-2xl text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                {/* fixed sign up form */}
                <div id='popup' className='mt-5'>
                  <div className='lg:w-4/5 w-full border-t-2 border-l-2 border-r-2 shadow-lg z-10 bg-gray text-white'>
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
                  <div className='bg-gray border-l-2 border-r-2 shadow-lg lg:w-4/5 w-full h-96 px-10 pb-3 bg-signup relative flex justify-center items-end'>
                    <div className='lg:w-2/3 w-full'>
                      <form className='w-full' action="">
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
                      <div className='w-full flex justify-end'>
                        <button id='submit-popup' className='px-2 bg-white text-black text-xs font-medium ml-8' onClick={onSubmit}>Submit</ button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
          {/* our collection */}
          <div className='w-full shop-section flex lg:flex-row flex-col lg:p-16 p-5 bg-gray-200'>
            <div className='lg:w-2/5 w-full'>
              <h2 className='text-6xl text-black font-presto text-white text-shadow-lg mb-16'>Available <br/> Works</h2>
              <Work imgClass="w-full h-product artwork3" src="images/artwork/artwork3.jpeg"/>
              <div className='w-full flex flex-col items-center lg:mt-12 mt-6'>
                <Work_tags title="Art Piece # 1" price="$3k" />
                <div className='mt-8'>
                  <Add_button  url="/" />
                </div>
              </div>
            </div>
            <div className='lg:w-3/5 w-full lg:pt-16 pt-8 lg:pl-10 pl-0'>
              <Work imgClass="w-full h-product2 artwork1" src="images/artwork/artwork1.jpeg"/>
              <div className='w-full flex flex-col items-center lg:mt-12 mt-6'>
                <Work_tags title="Art Piece # 1" price="$3k" />
                <div className='mt-8'>
                  <Add_button  url="/" />
                </div>
              </div>
            </div>
          </div>
          {/* instagram */}
          <div className='w-full py-16 read-page'>
            <h2 className='text-right text-5xl text-black font-presto italic text-white text-shadow-lg lg:mr-32 mr-10'>Read More on M.Bakkom...</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 p-6 border-2 border-white my-12'>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black cursor-pointer'>
              </div>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black cursor-pointer'>
              </div>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black cursor-pointer'>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer></Footer>
        </div>

      </div>

    );
  }
  
export default Home;