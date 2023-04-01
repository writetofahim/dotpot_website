/**
 * This is a React component that renders a blog page with a list of blog cards and pagination. 
 * The component imports the Navbar, Footer, blogData, Stack, Link, BsArrowRight, Chip, and Pagination components from various packages and files.

The BlogCard component renders a card with a blog post image, categories, date, title, and a "Read More" link.

The Blog component renders a title, a description, a container for the list of BlogCards, and a Pagination component. It also renders the Navbar and Footer components.

Tailwind css is used for styling 
 */

import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { blogData } from '../../data'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { Chip, Pagination } from '@mui/material'
import ChatPopup from '../../components/ChatPopup/ChatPopup'
import { AiOutlineDoubleRight } from "react-icons/ai"
import axios from '../../utils/axiosInstance'

import Particle from '../../components/Hero/Particle'
import { useScrollToTop } from '../../hooks/useScrollToTop'

const BlogCard = (props) => {
    const id = props._id
    return (
        <div className="container p-5 mx-auto border rounded-xl shadow-xl bg-white">
            <div className=" lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={`${import.meta.env.REACT_APP_SERVER_PATH}/${props.image}`} alt="" />

                <div className="lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <h3 className="text-3xl uppercase">{props.title}</h3>


                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        {props.date}
                    </p>

                    <div className="flex flex-wrap gap-1 my-5">
                        {
                            props.tags.map((tag, index) => (
                                <Link to={`/blog?tag=${tag}`} key={index} >
                                    <div className="px-3 py-2 border rounded-full">
                                        <p className="text-gray-400">{tag}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>

                    <Link to={`./${id}`} className="mt-2 text-secondary-300 hover:text-secondary-500 transition-all flex items-center">
                        Read more
                        <AiOutlineDoubleRight />
                    </Link>

                </div>
            </div>
        </div>
    )
}

const Blog = () => {
    useScrollToTop()
    const [data, setData] = useState(null);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    const fetchData = async (page) => {
    try {
        const response = await axios.get(`/blog?page=${page}`);
        console.log(response.data);
        setData(response.data.blogs);
        setTotalPages(response.data.totalPages);
    } catch (error) {
        console.error(error);
    }
    };

    React.useEffect(() => {
    fetchData(page);
    }, [page]);

    const handlePrevPage = () => {
    setPage(page - 1);
    };

    const handleNextPage = () => {
    setPage(page + 1);
    };



    return (
        <>
            <Navbar />
            <Particle />
            <div className="w-full pt-[15vh]">
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-6xl mt-10 mb-2 font-bold italic text-primary-500">Blogs</h1>
                    <p className="text-lg mb-10">Follow our blog to get all the latest tech news</p>
                    <div className="container flex gap-5 md:gap-10 justify-center p-5 flex-wrap">
                        {
                            data && data.map((item, index) => (
                                <BlogCard key={index} {...item} />
                            ))
                        }
                    </div>
                    
                    {/* Pagination Start */}
                    <div className='flex justify-center mt-5 mb-5'>
                        <nav aria-label="Page navigation example ">
                        <ul className="inline-flex -space-x-px">
                            <li>
                            <button
                                onClick={handlePrevPage}
                                disabled={page === 1}
                                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
                            >
                                Previous
                            </button>
                            </li>
                            {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index}>
                                <button
                                onClick={() => setPage(index + 1)}
                                className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${index + 1 === page ? 'text-blue-600 border-blue-600 bg-blue-50' : ''
                                    }`}
                                >
                                {index + 1}
                                </button>
                            </li>
                            ))}
                            <li>
                            <button
                                onClick={handleNextPage}
                                disabled={page === totalPages}
                                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
                            >
                                Next
                            </button>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    {/* Pagination Start */}


                </div>

                <ChatPopup />
            </div>
            <Footer />
        </>
    )
}

export default Blog