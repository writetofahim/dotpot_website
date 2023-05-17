import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { BsPlusLg } from "react-icons/bs";

const Faq = () => {
    const [activeFaqId, setActiveFaqId] = useState(null);
    const handleClick = (id) => {
      setActiveFaqId(id === activeFaqId ? null : id);
    };

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer website development, mobile app development, and other related services. We specialize in creating custom solutions tailored to your specific needs.",
    },
    {
      id: 2,
      question: "How experienced is your team?",
      answer: "Our team consists of highly skilled professionals with extensive experience in website development and mobile app development. We have successfully completed numerous projects for clients across various industries.",
    },
    {
      id: 3,
      question: "What technologies do you work with?",
      answer: "We work with a wide range of technologies including but not limited to HTML, CSS, JavaScript, React, Angular, Node.js, PHP, Python, iOS, and Android. Our team stays up to date with the latest trends and technologies in the industry."
    },
    {
      id: 4,
      question: "Do you provide maintenance and support services??",
      answer: "Yes, we offer maintenance and support services to ensure that your website or mobile app continues to function smoothly after launch. We provide regular updates, bug fixes, security enhancements, and technical support as needed."
    },
    {
      id: 5,
      question: "How long does it take to develop a website or mobile app?",
      answer: "The timeline for development depends on the scope and complexity of the project. We work closely with our clients to determine project requirements and provide an estimated timeline based on those requirements."
    },
  ];

  useScrollToTop();
  return (
    <div className="h-full">
      <Navbar />
      <section className="w-full pt-[15vh] items-center justify-center flex flex-col">
        <h1 className="text-4xl text-textColor-500 font-bold text-center ">
          FAQ
        </h1>
        <div className="flex flex-col py-10 w-3/4 ">
          {faqs.map((faq) => (
            <div
              onClick={() => handleClick(faq.id)}
              className="cursor-pointer mb-4"
            >
              <div
                className={`w-full flex justify-between items-center py-4 px-5 text-xl text-buttonText-500  ${
                    faq.id === activeFaqId
                    ? "bg-primary-200 hover:bg-primary-200"
                    : "bg-gray-300 hover:bg-gray-400"
                } `}
              >
                <button className="text-base lg:text-xl">{faq.question}</button>
                <BsPlusLg />
              </div>
              <div
                className={`${faq.id === activeFaqId  ? "block" : "hidden"} text-left py-4 px-7`}
              >
                <p className="text-base">{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Faq;
