/**
This is a React component named RecentBlogs. It is responsible for displaying a section on the webpage containing recent blogs.

The component imports Link from the react-router-dom library and RecentBlogsSlider from another component file.

RecentBlogsSlider is the slide that shows recent blogs.

It uses Link to create a link to the blog page and RecentBlogsSlider to display a slider of recent blog posts.

The RecentBlogsSlider component is responsible for displaying the recent blog posts.
 */

import React from 'react'
import { Link } from 'react-router-dom'
import RecentBlogsSlider from './RecentBlogsSlider'



const RecentBlogs = () => {
    return (
        <div className='w-full overflow-hidden py-10 md:flex md:flex-col md:justify-center bg-primary-100/50 backdrop-blur-sm'>
            <div className="p-3 md:p-5 mt-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center">
                <Link to="/blog">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-2 block text-textColor-500 hover:text-secondary-500">Recent Blogs</h2>
                </Link>
                <RecentBlogsSlider />
            </div>
        </div>
    )
}

export default RecentBlogs