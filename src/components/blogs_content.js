import React from 'react';
import BlogItem from '../components/blogItem';
import Btn_primary from './btn_primary';
import { getDatabase, ref, onValue } from "firebase/database";


function Blogs_content( props ) {

    const [blogs, setblogs] = React.useState([]);
    const [latestblogs, setlatestblogs] = React.useState([]);

    React.useEffect(() => {
      const db = getDatabase();
      const blogs = ref(db, 'blogs/');
      onValue(blogs, (snapshot) => {
        var sortedblogs = snapshot.val().sort((a, b) => (a.id < b.id ? 1 : -1));
        setblogs(sortedblogs);
        setlatestblogs(sortedblogs.slice(0, 2));
      });
    }, []);

    return (
        
        <section className={props.page == "home" ? 'w-full h-screen bg-black lg:py-16 py-6' : 'w-full h-auto bg-black lg:py-16 py-6'}>
            { blogs.length > 0 ?
            props.page == "home" ?
                <div className='home-content w-full h-full lg:pl-24 pl-12'>
                    <div className='flex lg:flex-row flex-col justify-between lg:px-24 px-5 text-white'>
                        <div className='flex flex-col lg:w-1/2 w-full'>
                            <h1 className='lg:text-6xl text-3xl font-semibold mt-5 lg:mt-0'>Our Blogs</h1>
                            <p className='text-sm mt-5'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                        </div>
                        <div className='w-auto flex flex-col lg:items-center'>
                            <Btn_primary className='mt-8' url="/blogs" name="Explore More" />
                        </div>
                    </div>
                    <div className={'w-full h-full py-12 grid ' + `grid-rows-${2}`}>
                        {
                        latestblogs.map((blog, index) => {
                            return <BlogItem key={index} title={blog.title} author={blog.author} description={blog.description} src={blog.src} id={blog.id} />
                        })
                        }
                    </div> 
                </div> :
                <div className='home-content w-full h-full lg:pl-24 pl-12'>
                    <div className='flex flex-col lg:px-24 px-5 text-white'>
                        <h1 className='lg:text-6xl text-3xl font-semibold mt-5 lg:mt-0'>Our Blogs</h1>
                        <p className='text-sm lg:mt-5 mt-3'>A selection of Creative Technology, Content Storytelling and Design Interaction projects.</p>
                    </div>
                    <div className={'w-full h-auto py-16 grid ' + `grid-rows-${blogs.length -1}`}>
                        {
                        blogs.map((blog, index) => {
                            return <BlogItem key={index} title={blog.title} author={blog.author} description={blog.description} src={blog.src} id={blog.id} />
                        })
                        }
                    </div>
                    <div className='w-full flex justify-center lg:p-16 p-5'>
                        <div className='lg:w-1/3 w-4/5 flex justify-between items-center'>
                            <a className='mr-2 text-blue-400' href="https://twitter.com/thepixact?s=09" target="_blank"><i className="fab fa-twitter lg:text-2xl text-lg mr-1"></i></a>  
                            <a className='mr-2 text-white' href="https://www.linkedin.com/company/pixact" target="_blank"><i className="fab fa-linkedin lg:text-2xl text-lg mr-1"></i></a>
                            <a className='mr-2 text-fb' href="https://web.facebook.com/thepixact" target="_blank"><i className="fab fa-facebook lg:text-2xl text-lg mr-1"></i></a>
                            <a className='mr-2 text-insta' href="https://www.instagram.com/thepixact/" target="_blank"><i className="fab fa-instagram lg:text-2xl text-lg mr-1"></i></a>
                            <a className='mr-2 text-pink-400' href="https://dribbble.com/wearepixact" target="_blank"><i className="fab fa-dribbble lg:text-2xl text-lg mr-1"></i></a> 
                        </div>
                    </div>
                </div> : 
            <div className='w-full h-screen lg:pl-24 pl-12 flex justify-center items-center'>
                <svg role="status" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                </svg>  
            </div> }
        </section>
    );
  }
  
export default Blogs_content;
