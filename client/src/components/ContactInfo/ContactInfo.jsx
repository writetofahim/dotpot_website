import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const ContactInfo = () => {
  const [data, setData] = useState(null);

  // Data Fetching
  useEffect(() => {
    axios
      .get("/info")
      .then((response) => {
        setData(response.data[0]);
        postLogger({ level: "info", message: response });
      })
      .catch((error) => {
        console.error(error);
        postLogger({ level: "error", message: error });
      });
  }, []);

  // console.log(data)

  return (
    <section className="text-gray-600 body-font mt-10">
      <h1 className="text-3xl md:text-5xl text-center font-extrabold pt-10 block backdrop-blur-sm">
        Reach us On
      </h1>
      <div className="container px-5 py-24 mx-auto flex flex-col-reverse md:flex-row flex-wrap gap-10 md:gap-0">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.247472043089!2d90.3658077145906!3d23.80979748456011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c154f4caa0ad%3A0x31fecdb3c5351d8d!2sDotpot%20iT!5e0!3m2!1sen!2sbd!4v1675153448200!5m2!1sen!2sbd"
            style={{ border: "0", width: "100%" }}
            className="h-full min-h-[400px]"
          ></iframe> */}
          <img
            src="https://i.pinimg.com/originals/19/97/f3/1997f3da28e8d29289097871f45b04fd.gif"
            alt="Contact With Us"
            className="h-full w-full object-cover"
          />
        </div>
        {data && (
          <div className="flex flex-col justify-center items-center flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center ">
            <div className="flex flex-col mb-10 lg:items-start items-center w-4/5 p-5 border rounded-xl shadow-xl bg-white">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary-100 hover:bg-secondary-300 hover:scale-110 transition-all text-xl hover:text-white">
                <BsTelephone />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Call Us On
                </h2>
                {data &&
                  data.phone.map((item, index) => (
                    <p className="leading-relaxed text-base" key={index}>
                      {item}
                    </p>
                  ))}
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center w-4/5 p-5 border rounded-xl shadow-xl bg-white">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary-100 hover:bg-secondary-300 hover:scale-110 transition-all text-xl hover:text-white">
                <CiMail />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Send Mail
                </h2>
                {data &&
                  data.email.map((item, index) => (
                    <p className="leading-relaxed text-base" key={index}>
                      {item}
                    </p>
                  ))}
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center w-4/5 p-5 border rounded-xl shadow-xl bg-white">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary-100 hover:bg-secondary-300 hover:scale-110 transition-all text-xl hover:text-white">
                <CiLocationOn />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Visit Our Office
                </h2>
                <p className="leading-relaxed text-base">{data.address}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactInfo;
