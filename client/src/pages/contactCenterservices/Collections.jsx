import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import collections from "../../assets/img/collections.jpg";

const Collections = () => {
return (
<div>
  <Navbar />
  <div className='px-3 min-h-screen pt-[15vh]'>
    <div className='container mx-auto'>
      <h1 className='text-3xl md:text-5xl font-extrabold mb-2 md:mb-5 block text-primary-500 text-center'>Collections
      </h1>
      <div className='text-gray-400 flex flex-col gap-5 p-5'>
        <p className='text-justify'>
          Dotpot IT offers automated dialing solutions that ensure your agents only receive calls that are answered by
          debtors. This feature enables you to contact a larger number of debtors each day. With our real-time and
          historical reporting, you can identify the best times to reach out to debtors and increase your chances of
          recovering debts. Manually calling debtors can waste your agents' time and resources, as they often end up
          leaving voicemails and rarely get connected to live individuals. By utilizing Dotpot IT, you can eliminate
          these unnecessary costs and allow your agents to focus on maximizing the effectiveness of their live
          connections.
        </p>
      </div>
      <div className="border-b container mx-auto">
        <img className="md:w-1/2 mx-auto " src={collections} alt="Customer service" />
      </div>
      <div className='text-gray-400 flex flex-col gap-5 p-5'>
        <p className='text-justify'>
          We offers a telemarketing module that is suitable for businesses and call centers of all sizes. Our module is
          designed to enhance the speed and efficiency of telemarketing companies by drastically improving
          speed-to-contact, daily call volume, agents' productivity, and customer satisfaction. With our solution, your
          business can achieve incredible results and make the most out of your telemarketing efforts.
        </p>
      </div>
      <p className="text-gray-700 flex flex-col gap-2 px-5">Overview:</p>
      <div className="px-5">
        <ul className="list-disc p-5 mb-5">
          <li>Quickly implement new collections programs.</li>
          <li>Automated messaging with live agent connect.</li>
          <li>Keep costs in-line with collection opportunities.</li>
        </ul>
      </div>
    </div>
  </div>
  <Footer />
</div>
);
};

export default Collections;