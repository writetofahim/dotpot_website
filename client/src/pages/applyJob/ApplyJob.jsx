import { Chip, Divider } from '@mui/material'
import React, { useState } from 'react'
import { jobPageData } from '../../data'
import { SlOptionsVertical } from "react-icons/sl"
import { AiFillStar } from "react-icons/ai"
import { TfiLocationPin } from "react-icons/tfi"
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom'
import NavbarJob from '../../components/NavbarJob/NavbarJob'
import JobSearchbar from '../../components/JobSearchbar/JobSearchbar'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export const JobCard = (props) => {
    const [love, setLove] = useState(false)
    return (
        <>
            {/* For Large screen */}
            <div className="job-card w-full p-5 border rounded-xl hover:border-primary-500 text-gray-400 gap-1 hidden md:block" onClick={() => props.setId(props.id)}>
                <div className="flex justify-between items-center">
                    <h3 className="font-bold hover:underline cursor-pointer text-xl">{props.title}</h3>

                    <div className="ritht flex items-center justify-center">
                        {
                            love ?
                                <AiFillHeart className="text-secondary-500 text-2xl" onClick={() => setLove(!love)} />
                                :
                                <AiOutlineHeart className="text-secondary-500 text-2xl" onClick={() => setLove(!love)} />
                        }
                        <div className="cursor-pointer p-5 rounded-full hover:bg-primary-100">
                            <SlOptionsVertical />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="mr-3">
                        {props.company}
                    </p>
                    <p>{props.rating}</p>
                    <AiFillStar />
                </div>
                <div className="flex items-center gap-2">
                    <TfiLocationPin />
                    <p>{props.location}</p>
                </div>
                <p>{props.type}</p>
                <h3 className='p-1 bg-gray-200 w-max my-1 rounded'>Salary : {props.selary.min}TK - {props.selary.max}TK</h3>
                <div className="flex flex-wrap gap-1">
                    {
                        props.benefits.map((item, index) => (
                            <Chip label={item} key={index} variant="outlined" />
                        ))
                    }
                </div>
            </div>

            {/* For Small Device */}
            <Link to={`/applym/${props.id}`}>
                <div className="job-card w-full p-5 border rounded-xl hover:border-primary-500 text-gray-400 gap-1  md:hidden" onClick={() => props.setId(props.id)}>
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold hover:underline cursor-pointer text-xl">{props.title}</h3>

                        <div className="ritht flex items-center justify-center">
                            {
                                love ?
                                    <AiFillHeart className="text-secondary-500 text-2xl" onClick={() => setLove(!love)} />
                                    :
                                    <AiOutlineHeart className="text-secondary-500 text-2xl" onClick={() => setLove(!love)} />
                            }
                            <div className="cursor-pointer p-5 rounded-full hover:bg-primary-100">
                                <SlOptionsVertical />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className="mr-3">
                            {props.company}
                        </p>
                        <p>{props.rating}</p>
                        <AiFillStar />
                    </div>
                    <div className="flex items-center gap-2">
                        <TfiLocationPin />
                        <p>{props.location}</p>
                    </div>
                    <p>{props.type}</p>
                    <h3 className='p-1 bg-gray-200 w-max my-1 rounded'>Salary : {props.selary.min}TK - {props.selary.max}TK</h3>
                    <div className="flex flex-wrap gap-1">
                        {
                            props.benefits.map((item, index) => (
                                <Chip label={item} key={index} variant="outlined" />
                            ))
                        }
                    </div>
                </div>
            </Link>
        </>
    )
}

const ApplyJob = () => {
    const [id, setId] = useState(null);
    return (
        <>
            <NavbarJob />
            {/* <JobSearchbar /> */}
            <div className='w-full flex items-center justify-center' >
                <div className="w-full max-w-[1400px] container pt-20 pb-20 px-5">

                    <div className="w-full flex flex-col md:flex-row justify-between gap-5">

                        {/* Left sidebar */}
                        <div className="left md:w-2/5 flex flex-col gap-5">
                            <h3 className="text-xl font-bold text-gray-400">Available Jobs</h3>
                            <Divider className='w-full' />
                            {
                                jobPageData.jobs.map((item, index) => (
                                    <JobCard key={index} {...item} setId={setId} />
                                ))
                            }
                        </div>

                        {/* Right sidebar */}
                        <div className="right md:w-3/5 sticky top-20 rounded-xl border" id='jobDetails'>
                            {
                                id !== null && (
                                    <>
                                        {/* // Top Section */}
                                        <div className="p-5 w-full shadow">
                                            <h3 className="font-bold hover:underline cursor-pointer text-xl">{jobPageData.jobs[id].title}</h3>
                                            <div className="flex items-center">
                                                <p className="mr-3">
                                                    {jobPageData.jobs[id].company}
                                                </p>
                                                <p>{jobPageData.jobs[id].rating}</p>
                                                <AiFillStar />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <TfiLocationPin />
                                                <p>{jobPageData.jobs[id].location}</p>
                                            </div>
                                            <p>{jobPageData.jobs[id].type}</p>
                                            <h3 className='p-1 bg-gray-200 w-max my-1 rounded'>Salary : {jobPageData.jobs[id].selary.min}TK - {jobPageData.jobs[id].selary.max}TK</h3>
                                            <div className="flex flex-wrap gap-1">
                                                {
                                                    jobPageData.jobs[id].benefits.map((item, index) => (
                                                        <Chip label={item} key={index} variant="outlined" />
                                                    ))
                                                }
                                            </div>
                                            <Link to={`/apply/${id}`}>
                                                <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                                                    Apply Now <BsArrowRight />
                                                </button>
                                            </Link>
                                        </div>

                                        {/* // Bottom Section */}
                                        <div className="p-5 w-full text-gray-500 h-[70vh] overflow-scroll">
                                            <h3 className="text-xl font-bold">Job Details</h3>
                                            <p className="">{jobPageData.jobs[id].type}</p>
                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Benefits</h3>
                                            {
                                                jobPageData.jobs[id].benefits.map((item, index) => (
                                                    <Chip label={item} key={index} variant="outlined" className='mr-1' />
                                                ))
                                            }

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Full Job Description</h3>
                                            <p className='text-justify'>{jobPageData.jobs[id].des}</p>

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Position Responsibilities</h3>
                                            <p>As a {jobPageData.jobs[id].title}, you will:</p>
                                            <ul className='list-disc pl-10'>
                                                {
                                                    jobPageData.jobs[id].responsibilities.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Qualification</h3>
                                            <ul className='list-disc pl-10'>
                                                {
                                                    jobPageData.jobs[id].qualification.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Experience</h3>
                                            <ul className='list-disc pl-10'>
                                                {
                                                    jobPageData.jobs[id].experience.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>

                                            <Divider className='py-3' />
                                            <h3 className="text-xl font-bold mt-2">Education</h3>
                                            <ul className='list-disc pl-10'>
                                                {
                                                    jobPageData.jobs[id].education.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyJob