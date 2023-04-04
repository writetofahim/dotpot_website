import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import em from "../../assets/img/em.jpg";

const EmailMarketing = () => {
  return (
    <div>
            <Navbar />
  <div className='px-3 min-h-screen pt-[15vh]'>
    <div className='container mx-auto'>
      <h1 className='text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center'>Email Marketing</h1>
      <div className='text-gray-400 flex flex-col gap-5 p-5'>
        <p className='text-justify'>
        Dotpot IT CC's email routing module enables incoming emails to be efficiently distributed to the appropriate agents based on the CC admin's policies.
        </p>
      </div>
      <div className="border-b container mx-auto">
        <img className="md:w-1/2 mx-auto " src={em} alt="Customer service" />
      </div>
      <div className='text-gray-400 flex flex-col gap-5 p-5'>
        <p className="font-bold">Facility to add notes to each email</p>
        <p className='text-justify'>
        CC agents can add notes to emails at any stage, including while it's being sent or queued, using Dotpot IT's email handling module.
        </p>
        <p className="font-bold">Reports on mail sent/receive</p>
        <p className='text-justify'>
        The email module records all sent/received emails, with statistics and filtering tools for easy retrieval of information in the future.
        </p>
        <p className="font-bold">Email filtering</p>
        <p className='text-justify'>
        Incoming and outgoing mails may be filtered based on agent groups or other policy factors.
        </p>
        <p className="font-bold">Sending/Receiving Emails with attachment</p>
        <p className='text-justify pb-5'>
        Agents can attach one or multiple files to any email message, and send it to the recipient. The email module also allows agents to receive incoming mail with attachments.
        </p>
        
      </div>
    </div>
  </div>
  <Footer />
    </div>
  );
};

export default EmailMarketing;
