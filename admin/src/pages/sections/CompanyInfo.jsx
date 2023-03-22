import axios from "../../utils/axiosInstance";
import React, { useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai'

const CompanyInfo = () => {
  const [data, setData] = useState(null);

    // Data Fetching
    useEffect(() => {
        axios.get('/info')
            .then(response => setData(response.data[0]))
            .catch(error => console.error(error));
    }, []);

  console.log(data)

  const handelEdit = () => {

  }
  return (
    <div className="w-full">
      <h1 className="text-4xl text-primary-400 text-center font-bold">Company Info</h1>
      <hr className="my-5" />

      <div className="w-full flex justify-center">
        {
          data && (
            <form className="w-4/5 border rounded-xl p-5">
              <div className="w-full border-none mt-3">
                <label htmlFor="name" className="">Company Name:</label>
                <input type="text" name="name" className="w-full border-b mt-2" defaultValue={data.name} />
              </div>
              <div className="w-full border-none mt-3">
                <label htmlFor="slogan" className="">Company Slogan:</label>
                <input type="text" name="slogan" className="w-full border-b mt-2" defaultValue={data.slogan} />
              </div>
              <div className="w-full border-none mt-3">
                <label htmlFor="address" className="">Company Address:</label>
                <input type="text" name="address" className="w-full border-b mt-2" defaultValue={data.address} />
              </div>
              <div className="w-full border-none mt-3">
                <label htmlFor="email" className="">Company Email:</label>
                {
                  data.email.map((email, index)=>(
                    <input type="email" name="email" className="w-full border-b mt-2" defaultValue={email} />
                  ))
                }
              </div>
              <div className="w-full border-none mt-3">
                <label htmlFor="phone" className="">Company Phone:</label>
                {
                  data.phone.map((phone, index)=>(
                    <input type="text" name="phone" className="w-full border-b mt-2" defaultValue={phone} />
                  ))
                }
              </div>
              <div className="w-full border-none mt-3">
                <label htmlFor="info" className="">Company Info:</label>
                <textarea type="text" name="email" className="w-full border-b mt-2" defaultValue={data.other_info} />
              </div>
              
            </form>
          )
        }
      </div>
    </div>
  );
};

export default CompanyInfo;
