import React from 'react'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ivr from "../../assets/img/ivr.png";
import { useScrollToTop } from '../../hooks/useScrollToTop'

const Ivr = () => {
useScrollToTop()
return (
<div>
  <Navbar />
  <div className='px-3 min-h-screen pt-[15vh]'>
    <div className='container mx-auto'>
      <h1 className='text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center'>Interactive
        Voice Response (IVR)</h1>
      <div className='text-gray-400 flex flex-col gap-5 p-5'>
        <p className='text-justify'>
          Interactive Voice Response (IVR) is a technology that enables automated voice-based interactions between
          computers and humans. With IVR, callers can use their voice or keypad inputs to complete various steps and
          reach their desired destination without the need for human assistance. IVR is particularly valuable in
          situations where call volumes are high or when live agents are not available to handle calls.
        </p>
      </div>
      <div className="border-b container mx-auto">
        <img className="md:w-1/2 mx-auto mb-5" src={ivr} alt="IVR Image" />
      </div>
      <div className='md:my-6 block md:flex gap-10 sm:my-5'>
        <div
          className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
          <h2 className="text-lg font-bold mb-2">Easy Edit and Upload</h2>
          <p className="text-gray-700 text-justify">With the flexible IVR module of Dotpot IT, you have the ability to
            create and modify voice menus for call routing at any given time. The Multiple IVR feature lets you offer
            multiple services to your callers. Plus, various tools within the Dotpot IT administrative panel are
            available to assist you in creating your IVR menu.</p>
        </div>
        <div
          className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
          <h2 className="text-lg font-bold mb-2">Design Own IVR</h2>
          <p className="text-gray-700 text-justify">Dotpot IT system provides you with the ability to create an IVR system
            that is customized to your business requirements. The process is straightforward and user-friendly, allowing
            you to design your IVR with ease.</p>
        </div>
        <div
          className="bg-white rounded-lg shadow-lg p-6 hover:bg-primary-100 transition-all duration-300w-full md:w-1/3 mx-5 hover:scale-105 md:my-0 my-5">
          <h2 className="text-lg font-bold mb-2">Responsive IVR</h2>
          <p className="text-gray-700 text-justify">IVR systems are now commonly employed for making outbound calls to
            perform various time-sensitive tasks, such as providing or collecting information regarding appointments,
            overdue bills, and other important events or activities.</p>
        </div>
      </div>
      <div className='text-gray-400 flex flex-col gap-5 p-5 mb-5'>
        <p className='text-justify'>
          By offering customers the option to choose between self-service and agent-assisted support, an IVR system can
          significantly lower your cost per call. With our IVR software, your agents can concentrate on handling more
          intricate cases while customers can easily resolve simple issues like account inquiries or bill payments on
          their own. This dual benefit not only frees up your agents but also provides a more efficient and satisfying
          customer experience.
        </p>
      </div>
    </div>
  </div>
  <Footer />
</div>
)
}

export default Ivr