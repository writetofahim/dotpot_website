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
      <div className=" bg-[url(https://6amtech.com/wp-content/uploads/2023/03/Group-1597883190-scaled.webp)] bg-cover bg-no-repeat md:h-[300px] flex items-center justify-center mb-10">
        <div className="w-full p-3">
          <div className="container mx-auto border-2 border-white rounded-md backdrop-blur-3xl py-10 shadow-lg shadow-pink-200 flex items-center justify-center ">
            <div className="flex flex-col items-center px-2">
              <h2 className="md:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 pb-3">
                Reach us On
              </h2>
              <p className="text-center text-textColor-500 md:text-3xl text-xl  ">
                Seamless Communication for Limitless{" "}
                <span className="text-secondary-500">Opportunities</span>
              </p>
              <p className="text-center">
                Bridge the Gap, Embrace Collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-col-reverse md:flex-row flex-wrap gap-10 md:gap-0">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden bg-background-500">
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
            <div className="flex flex-col mb-10 lg:items-start items-center w-4/5 p-5 border border-border rounded-xl shadow-xl bg-background-500">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary-400 hover:bg-secondary-500 hover:scale-110 transition-all text-xl hover:text-white">
                <BsTelephone />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3 text-textColor-500">
                  Call Us On
                </h2>
                {data &&
                  data.phone.map((item, index) => (
                    <p className="leading-relaxed text-base text-textColor-500" key={index}>
                      {item}
                    </p>
                  ))}
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center w-4/5 p-5 border border-border rounded-xl shadow-xl bg-background-500">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary-400 hover:bg-secondary-500 hover:scale-110 transition-all text-xl hover:text-white">
                <CiMail />
              </div>
              <div className="flex-grow">
                <h2 className="text-textColor-500 text-lg title-font font-medium mb-3">
                  Send Email
                </h2>
                {data &&
                  data.email.map((item, index) => (
                    <p className="leading-relaxed text-base text-textColor-500" key={index}>
                      {item}
                    </p>
                  ))}
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center w-4/5 p-5 border border-border rounded-xl shadow-xl bg-background-500">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-secondary-400 hover:bg-secondary-500 hover:scale-110 transition-all text-xl hover:text-white">
                <CiLocationOn />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3 text-textColor-500">
                  Visit Our Office
                </h2>
                {/* <p className="leading-relaxed text-base">{data.address}</p> */}
                <p className="text-textColor-500">Dotpot iT</p>
                <p className="text-textColor-500">House-1, Road-3, Block-A</p>
                <p className="text-textColor-500">Mirpur-10, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactInfo;
