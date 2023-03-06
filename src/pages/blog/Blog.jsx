/**
 * This is a React component that renders a blog page with a list of blog cards and pagination. 
 * The component imports the Navbar, Footer, blogData, Stack, Link, BsArrowRight, Chip, and Pagination components from various packages and files.

The BlogCard component renders a card with a blog post image, categories, date, title, and a "Read More" link.

The Blog component renders a title, a description, a container for the list of BlogCards, and a Pagination component. It also renders the Navbar and Footer components.

Tailwind css is used for styling 
 */

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { blogData } from '../../data'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { Chip, Pagination } from '@mui/material'

const BlogCard = (props) => {
    return (
        <div className="w-1/1 md:w-1/4 shadow-xl hover:scale-105 transition-all">
            <img src={props.img} alt="" className="rounded-tl-xl rounded-tr-xl w-full aspect-video" />
            <div className=" bg-white rounded-bl-xl rounded-br-xl shadow p-5 flex flex-col">
                <Stack direction="row" className="flex flex-wrap items-center gap-1">
                    {
                        props.categories.map((tech, index) => (
                            <Chip label={tech} key={index} variant="outlined" className="hover:border-primary-500 cursor-pointer" />
                        ))
                    }
                </Stack>
                <p className="mt-2 text-gray-400">{props.date}</p>
                <h1 className="text-xl font-bold text-gray-400 my-2">{props.title}</h1>
                <Link to={`./${props.id}`} className="hover:text-secondary-500 flex items-center gap-2">Read More <BsArrowRight /></Link>
            </div>
        </div>
    )
}

const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-6xl mt-10 mb-2 font-bold italic text-primary-500">Blogs</h1>
                <p className="text-lg mb-10">Follow our blog to get all the latest tech news</p>
                <div className="container flex gap-5 md:gap-10 justify-center p-5 flex-wrap">
                    {
                        blogData.map((item, index) => (
                            <BlogCard key={index} {...item} />
                        ))
                    }
                </div>
                <Pagination count={10} variant="outlined" shape="rounded" className='my-10' />
            </div>
            <Footer />
        </>
    )
}

export default Blog