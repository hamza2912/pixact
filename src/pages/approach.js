import React from 'react';
import Header from '../components/header';
import Btn_primary from '../components/btn_primary';

function Approach() {

    return (
      
      <div className='homepage approach_page'>
      {/* <div className=''> */}

        
        <Header />
        <section className='w-full h-screen bg-black'>
          <div className='lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='lg:w-2/3 w-full lg:pl-40 px-5 flex flex-col text-white'>
              {/* <p className='text-sm mb-4 uppercase'>what’s in the works?</p> */}
              <h1 data-aos='fade-right' className='lg:text-6xl text-2xl font-semibold'><span className='text-red-600'>Pixact</span> is a global design and development agency</h1>
              <p data-aos='fade-right' data-aos-delay='100' className='lg:text-2xl text-base lg:mt-16 mt-6'>Combining insight, creativity and technology to align with culture and connect with people.</p>
              <p data-aos='fade-right' data-aos-delay='100' className='text-sm mt-10 uppercase'>What are we all about</p>
              <div className='grid grid-cols-2 gap-4 mt-10 lg:text-sm text-xs text-gray-400'>
                    <p data-aos='fade-up' data-aos-delay='200'>We help forward-thinking brands launch products and design new customer experiences in digital and beyond.</p>
                    <p data-aos='fade-up' data-aos-delay='250'>Everything here is in-house and end-to-end, from strategy to creative, UX, tech, and QA. 
                    </p>
                    <p data-aos='fade-up' data-aos-delay='300'>Our work focuses on cutting-edge experience design to help brands achieve more meaningful engagement with consumers</p>
                    <p data-aos='fade-up' data-aos-delay='350'>These integrated capabilities allow us to push the limits of creativity and technology while grounding us in what is most relevant to audiences.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-black'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='w-full lg:px-40 px-5 flex flex-col text-white'>
              <p className='text-sm mb-4 uppercase'>Our Approach</p>
              <h1 data-aos='fade-right' className='lg:text-6xl text-xl font-semibold'>A process that's both<br /><span className='text-red-600'>rigorous and flexible.</span></h1>
              <div className='w-full flex lg:flex-row flex-col lg:mt-12 mt-6'>
                <div className='lg:w-1/2 w-full pr-10'>
                  <img className='w-full h-auto' src="images/approach/flexible.png" alt="" />
                </div>
                <div className='lg:w-1/2 w-full mt-5 lg:mt-0'>
                  <p data-aos='fade-up' data-aos-delay='100' className='lg:text-base text-xs text-white'>Every client is unique. Some need end-to-end solutions, while others look for our expertise in a specific creative technology. We are collaborators in the truest sense and have made our process flexible to meet your workflow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-black relative'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='w-full h-4/5 lg:px-40 px-5 flex flex-col text-white'>
              <div className='w-full h-full flex lg:flex-row flex-col mt-12'>
                <div className='lg:w-1/2 w-full h-full'>
                  <p className='text-sm mb-4 uppercase'>Step 01</p>
                  <h1 className='lg:text-6xl text-2xl font-semibold'>Align</h1>
                    <img className='w-3/5 h-auto mt-10' src="images/approach/align-svg.png" alt="" />
                </div>
                <div className='lg:w-1/2 w-full lg:pt-40 pt-10t-10 h-full lg:mt-0 mt-5'>
                  <p data-aos='fade-right' data-aos-delay='100' className='lg:text-base text-sm uppercase'>Getting to know you</p>
                  <p className='lg:text-lg text-xs mt-6' data-aos='fade-up' data-aos-delay='200'>The first step in a successful partnership is to huddle up and learn. We get to know your brand, goals and expectations. From there, we put together an initial plan for the work to come.</p>
                  <p className='text-xs text-gray-400 mt-5' data-aos='fade-up' data-aos-delay='200'>KEY METHODOLOGIES: KICK-OFF MEETING, STAKEHOLDER INTERVIEWS, INTERNAL DOCUMENT REVIEW, BRAND AUDIT.</p>
                </div>
              </div>
            </div>
          </div>
          <img className='lg:w-96 w-64 lg:right-10 right-0 absolute top-0' src="images/approach/align-vector.png" alt="" />
        </section>
        <section className='w-full h-screen bg-black'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='w-full h-4/5 lg:px-40 px-5 flex flex-col text-white'>
              <div className='w-full h-full flex lg:flex-row flex-col items-center mt-12'>
                <div className='lg:w-1/2 w-full lg:h-full h-1/2'>
                  <img className='lg:w-4/5 w-3/5 h-auto' src="images/approach/insight-svg.png" alt="" />
                </div>
                <div className='lg:w-1/2 w-full mt-5 lg:mt-0'>
                  <p className='text-sm mb-4 uppercase'>Step 02</p>
                  <h1 className='lg:text-6xl text-2xl font-semibold'>Insight</h1>
                  <p data-aos='fade-right' data-aos-delay='100' className='lg:text-base text-sm uppercase lg:mt-16 mt-6'>UNDERSTANDING THE WIDER CONTEXT.</p>
                  <p className='lg:text-lg text-xs mt-6' data-aos='fade-up' data-aos-delay='200'>A great plan requires real insight. We quickly get up to speed on your consumers, relevant cultural trends, the marketplace, and more. It’s about getting the lowdown on what matters most to ensure success.</p>
                  <p className='text-xs text-gray-400 mt-5' data-aos='fade-up' data-aos-delay='200'>KEY METHODOLOGIES: LANDSCAPE REVIEW, TREND WATCHING, IN-DEPTH INTERVIEWS, SURVEYS, ETHNOGRAPHIC OBSERVATION, EXISTING DATA REVIEW, MINDSET DEVELOPMENT, JOURNEY MAPPING, SERVICE BLUEPRINT CREATION.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-black relative'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='w-full h-3/5 lg:px-40 px-5 flex flex-col text-white'>
              <div className='w-full h-full flex lg:flex-row flex-col mt-12'>
                <div className='lg:w-1/2 w-full h-full'>
                  <p className='text-sm mb-4 uppercase'>Step 03</p>
                  <h1 className='lg:text-6xl text-2xl font-semibold'>Opportunity</h1>
                  <p data-aos='fade-right' data-aos-delay='100' className='lg:text-base text-sm uppercase lg:mt-16 mt-6'>SHARPENING THE FOCUS.</p>
                  <p className='lg:text-lg text-xs mt-6' data-aos='fade-up' data-aos-delay='200'>With a deep understanding in place, it’s time to apply it. We find the vital overlap between your business needs and those of your consumers – the sweet spot where shared value lies. Now we define metrics for success.</p>
                  <p className='text-xs text-gray-400 mt-5' data-aos='fade-up' data-aos-delay='200'>KEY METHODOLOGIES: DEVELOPMENT OF THE CREATIVE BRIEF, EXPERIENCE DESIGN PRINCIPLES, AND SUCCESS METRICS.</p>
                </div>
                <div className='lg:w-1/2 w-full h-full'>
                </div>
              </div>
            </div>
          </div>
          <img className='lg:w-1/3 w-1/2 right-10 absolute bottom-20' src="images/approach/opportunity-svg.png" alt="" />
        </section>
        <section className='w-full h-screen bg-black'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='w-full h-4/5 lg:px-40 px-5 flex flex-col text-white'>
              <div className='w-full h-full flex lg:flex-row flex-col mt-12'>
                <div className='lg:w-1/2 w-full h-full'>
                  <p className='text-sm mb-4 uppercase'>Step 04</p>
                  <h1 className='lg:text-6xl text-2xl font-semibold'>Concept Design</h1>
                  <img className='w-3/5 h-auto mt-10' src="images/approach/concept-svg.png" alt="" />
                </div>
                <div className='lg:w-1/2 w-full lg:pt-40 pt-10 h-full'>
                  <p data-aos='fade-right' data-aos-delay='100' className='lg:text-base text-sm uppercase'>SMART, UNEXPECTED OR BOTH.</p>
                  <p className='lg:text-lg text-xs mt-6' data-aos='fade-up' data-aos-delay='200'>Need ambitious, innovative and first-of-its kind? Check.Need an ultra-rational solve? Check check. Our cross-disciplinary teams concept together, drawing inspiration from culture and emerging tech while ensuring viability. Every idea and design is ultimately vetted against the success criteria.</p>
                  <p className='text-xs text-gray-400 mt-5' data-aos='fade-up' data-aos-delay='200'>KEY METHODOLOGIES: INNOVATION SPRINTS, VISUAL RESEARCH, CULTURAL AUDITS, EMPATHY MAPPING, MIND-MAPPING, ABSTRACTION EXERCISES, CREATIVE EVALUATION FRAMEWORKS.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-black'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='w-full h-3/5 lg:px-40 px-5 flex flex-col text-white'>
              <div className='w-full h-full flex lg:flex-row flex-col items-center mt-12'>
                <div className='lg:w-1/2 w-full h-full'>
                  <p className='text-sm mb-4 uppercase'>Step 05</p>
                  <h1 className='lg:text-6xl text-2xl font-semibold'>Prototype and Test</h1>
                  <p data-aos='fade-right' data-aos-delay='100' className='lg:text-base text-sm uppercase lg:mt-16 mt-6'>DESIGN. REFINE. TEST. REPEAT.</p>
                  <p className='lg:text-lg text-xs mt-6' data-aos='fade-up' data-aos-delay='200'>Ok, we have a great idea. Now it’s time to bring it to life and put it through its paces. Promising solutions are prototyped and tested to ensure they’re hitting the right notes with consumers and to reveal areas for improvement.</p>
                  <p className='text-xs text-gray-400 mt-5' data-aos='fade-up' data-aos-delay='200'>KEY METHODOLOGIES: INFORMATION ARCHITECTURE, CONTENT STRATEGY, SEO, VISUAL CONCEPTING, UX and UI DESIGN, PROTOTYPING, USER TESTING, INDUSTRIAL DESIGN, ACCESSIBILITY, DESIGN SYSTEM CREATION.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                  <img className='w-3/5 mx-auto h-auto' src="images/approach/prototype-svg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-screen bg-black relative'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='w-full h-4/5 lg:px-40 px-5 flex flex-col text-white'>
              <div className='w-full h-full flex lg:flex-row flex-col mt-12'>
                <div className='lg:w-1/2 w-full h-full'>
                  <p className='text-sm mb-4 uppercase'>Step 06</p>
                  <h1 className='lg:text-6xl text-2xl font-semibold'>Build</h1>
                  <img className='w-4/5 h-auto mt-10' src="images/approach/build-svg.png" alt="" />
                </div>
                <div className='lg:w-1/2 w-full lg:pt-40 pt-10 ht-10-full'>
                  <p data-aos='fade-right' data-aos-delay='100' className='lg:text-base text-sm uppercase'>MAKING IT HAPPEN.</p>
                  <p className='lg:text-lg text-xs mt-6' data-aos='fade-up' data-aos-delay='200'>Now it’s time for our elite dev teams to write beautiful modern code – delivered on time, on budget, and in full. Our production philosophy is simple: hit milestones with reliability, with deliverables that exceed expectations.</p>
                  <p className='text-xs text-gray-400 mt-5' data-aos='fade-up' data-aos-delay='200'>KEY METHODOLOGIES: TECH TREND WATCHING, FUNCTIONAL REQUIREMENTS ANALYSIS, TECH DESIGN DOCUMENTATION, CODING STYLE GUIDELINES, CODE REVIEWS, SPEED OPTIMIZATION, CONTINUOUS INTEGRATION AND DEPLOYMENT, SECURITY REVIEWS, QA.</p>
                </div>
              </div>
            </div>
          </div>
          <img className='lg:w-96 w-64 lg:right-10 right-0 absolute top-0' src="images/approach/build-vector.png" alt="" />
        </section>
        <section className='w-full h-screen bg-black relative'>
          <div className='home-content lg:pl-24 pl-12 w-full h-full flex pt-12'>
            <div className='w-full h-3/5 lg:px-40 px-5 flex flex-col text-white'>
              <div className='w-full h-full flex lg:flex-row flex-col items-center mt-12'>
                <div className='lg:w-1/2 w-full h-full'>
                  <img className='w-4/5 h-auto' src="images/approach/launch.png" alt="" />
                </div>
                <div className='lg:w-1/2 w-full mt-5 lg:mt-0'>
                  <p className='text-sm mb-4 uppercase'>Step 07</p>
                  <h1 className='lg:text-6xl text-2xl font-semibold'>Launch and Evaluate</h1>
                  <p data-aos='fade-right' data-aos-delay='100' className='lg:text-base text-sm uppercase lg:mt-16 mt-6'>DEPLOYING WITH CONFIDENCE.</p>
                  <p className='lg:text-lg text-xs mt-6' data-aos='fade-up' data-aos-delay='200'>For some, the launch is the end. For us, it’s another crucial step. We’re with you in force to support deployment, measure performance, and continuously improve results. After all, we judge our success by yours.</p>
                  <p className='text-xs text-gray-400 mt-5' data-aos='fade-up' data-aos-delay='200'>KEY METHODOLOGIES: KPI TRACKING AND REPORTING, CUSTOMER FEEDBACK CAPTURE AND ANALYSIS, OPTIMIZATION.</p>
                </div>
              </div>
            </div>
          </div>
          <img className='lg:w-96 w-64
           lg:left-1/3 left-1/4 bottom-0 absolute' src="images/approach/launch-vector.png" alt="" />
        </section>
        <section className='w-full h-screen bg-black'>
          <div className='lg:pl-24 pl-12 w-full h-full flex items-center'>
            <div className='lg:w-2/3 w-full lg:pl-40 px-5 flex flex-col text-white'>
              {/* <p className='text-sm mb-4 uppercase'>what’s in the works?</p> */}
              <h1 data-aos='fade-right' className='lg:text-6xl text-2xl font-semibold'>Ready to <br /><span className='text-red-600'>work with us?</span></h1>
              <p data-aos='fade-right' data-aos-delay='100' className='lg:text-2xl text-base lg:mt-16 mt-6'>Whatever your goal, let’s chat about how to get you there.</p>
              <p className='text-xs text-gray-400 mt-10' data-aos='fade-up' data-aos-delay='200'>We offer design and interaction, creative technology, and content and storytelling capabilities in across five continents.</p>
              <div className='w-full flex lg:flex-row flex-col lg:mt-16 mt-6'>
              <div className='lg:w-48 w-32 bg-white rounded-3xl text-black lg:text-base text-xs py-2 font-semibold text-center hover:w-56 transition-all cursor-pointer  text-black flex justify-center'>
                  <div className='flex flex-row w-fit items-center'>
                    <p className=''>Let's chat</p>
                    <div className='h-6 lg:border-l-2 border-l border-black mx-2'></div>
                    <a className='mr-1 text-xs' href="mailto:pixact.co@gmail.com" target="_blank"><i className="fas fa-envelope lg:text-lg text-base mr-1"></i></a>
                    <a className='' href="https://wa.me/+923052073889" target="_blank"><i className="fab fa-whatsapp lg:text-lg text-base mr-1"></i></a> 
                  </div>
                </div>
                {/* <Btn_primary url="https://wa.me/+923052073889" className='mr-10' id='contact' name="Let's Chat" /> */}
                {/* <Btn_primary className='' id='contact' name="Newsletter" /> */}
            </div>
            </div>
          </div>
        </section>
      
      </div>

    );
  }
  
export default Approach;
