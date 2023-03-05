import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import RecentBlogs from '../../components/RecentBlogs/RecentBlogs'
import { blogData } from '../../data'
import parse from 'react-html-parser';

const SingleBlog = () => {

    const { id } = useParams();
    const blog = blogData[id]

    return (
        <>
            <Navbar />
            <div className='full flex items-center justify-center'>
                <div className="container flex flex-col items-center p-10 text-justify">
                    <img src={blog.img} alt="" />
                    <div className="md:w-3/5">
                        <h1 className="my-5 text-3xl font-bold text-left">{blog.title}</h1>
                        <p className="text-gray-400">{blog.date}</p>
                        {
                            blog.categories.map((item, index) => (
                                <Link key={index} to={`/blog?catergory=${item}`} >
                                    <p className="inline text-gray-400 hover:text-secondary-500 transition-all">{item}, </p>
                                </Link>
                            ))
                        }
                        {
                            parse(blog.desc)
                        }
                    </div>
                </div>
            </div>

            <RecentBlogs />
            <Footer />
        </>
    )
}

export default SingleBlog