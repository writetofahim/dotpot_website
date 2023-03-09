import React from 'react'
import NavbarJob from '../../components/NavbarJob/NavbarJob'
import Footer from '../../components/Footer/Footer'
import { jobPageData } from '../../data';
import { AiFillStar } from 'react-icons/ai'
import { TfiLocationPin } from 'react-icons/tfi'
import { BsArrowRight } from 'react-icons/bs'
import { Chip, Divider } from '@mui/material';
import { Link, useParams } from 'react-router-dom';


const ApplyMobile = () => {
  const { id } = useParams();
  console.log(id)

  const jobs = jobPageData.jobs;
  const job = jobs.find((obj) => obj.id == id)

  return (
    <div className='w-full'>
      <NavbarJob />
      <div className="flex item-center justify-center py-10">
        <div className="right md:w-3/5 sticky top-20 rounded-xl border" id='jobDetails'>
          {
            id !== null && (
              <>
                {/* // Top Section */}
                <div className="p-5 w-full shadow">
                  <h3 className="font-bold hover:underline cursor-pointer text-xl">{job.title}</h3>
                  <div className="flex items-center">
                    <p className="mr-3">
                      {job.company}
                    </p>
                    <p>{job.rating}</p>
                    <AiFillStar />
                  </div>
                  <div className="flex items-center gap-2">
                    <TfiLocationPin />
                    <p>{job.location}</p>
                  </div>
                  <p>{job.type}</p>
                  <h3 className='p-1 bg-gray-200 w-max my-1 rounded'>Salary : {job.selary.min}TK - {job.selary.max}TK</h3>
                  <div className="flex flex-wrap gap-1">
                    {
                      job.benefits.map((item, index) => (
                        <Chip label={item} key={index} variant="outlined" />
                      ))
                    }
                  </div>
                  <Link to={`/apply/`}>
                    <button variant="contained" className='bg-primary-500 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold mt-2 flex items-center gap-3'>
                      Apply Now <BsArrowRight />
                    </button>
                  </Link>
                </div>

                {/* // Bottom Section */}
                <div className="p-5 w-full text-gray-500 h-[70vh] overflow-scroll">
                  <h3 className="text-xl font-bold">Job Details</h3>
                  <p className="">{job.type}</p>
                  <Divider className='py-3' />
                  <h3 className="text-xl font-bold mt-2">Benefits</h3>
                  {
                    job.benefits.map((item, index) => (
                      <Chip key={index} label={item} variant="outlined" className='mr-1' />
                    ))
                  }

                  <Divider className='py-3' />
                  <h3 className="text-xl font-bold mt-2">Full Job Description</h3>
                  <p className='text-justify'>{job.des}</p>

                  <Divider className='py-3' />
                  <h3 className="text-xl font-bold mt-2">Position Responsibilities</h3>
                  <p>As a {job.title}, you will:</p>
                  <ul className='list-disc pl-10'>
                    {
                      job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    }
                  </ul>

                  <Divider className='py-3' />
                  <h3 className="text-xl font-bold mt-2">Qualification</h3>
                  <ul className='list-disc pl-10'>
                    {
                      job.qualification.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    }
                  </ul>

                  <Divider className='py-3' />
                  <h3 className="text-xl font-bold mt-2">Experience</h3>
                  <ul className='list-disc pl-10'>
                    {
                      job.experience.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    }
                  </ul>

                  <Divider className='py-3' />
                  <h3 className="text-xl font-bold mt-2">Education</h3>
                  <ul className='list-disc pl-10'>
                    {
                      job.education.map((item, index) => (
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
      <Footer />
    </div>
  )
}

export default ApplyMobile