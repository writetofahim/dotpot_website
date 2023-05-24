import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Faq = () => {
  const [activeFaqId, setActiveFaqId] = useState(null);
  const handleClick = (id) => {
    setActiveFaqId(id === activeFaqId ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer:
        "We offer website development, mobile app development, and other related services. We specialize in creating custom solutions tailored to your specific needs.",
    },
    {
      id: 2,
      question: "How experienced is your team?",
      answer:
        "Our team consists of highly skilled professionals with extensive experience in website development and mobile app development. We have successfully completed numerous projects for clients across various industries.",
    },
    {
      id: 3,
      question: "What technologies do you work with?",
      answer:
        "We work with a wide range of technologies including but not limited to HTML, CSS, JavaScript, React, Angular, Node.js, PHP, Python, iOS, and Android. Our team stays up to date with the latest trends and technologies in the industry.",
    },
    {
      id: 4,
      question: "Do you provide maintenance and support services??",
      answer:
        "Yes, we offer maintenance and support services to ensure that your website or mobile app continues to function smoothly after launch. We provide regular updates, bug fixes, security enhancements, and technical support as needed.",
    },
    {
      id: 5,
      question: "How long does it take to develop a website or mobile app?",
      answer:
        "The timeline for development depends on the scope and complexity of the project. We work closely with our clients to determine project requirements and provide an estimated timeline based on those requirements.",
    },
    {
      id: 6,
      question: "What is your pricing structure?",
      answer:
        "Our pricing is based on factors such as project complexity, scope, and timeline. We provide customized quotes tailored to each client's specific requirements. Please reach out to us to discuss your project and get a detailed quote.",
    },
    {
      id: 7,
      question: "Can you work with our existing IT infrastructure and systems?",
      answer:
        "Yes, we can seamlessly integrate with your existing IT infrastructure and systems. Our team has experience working with a variety of technologies and platforms, allowing us to adapt to your environment.",
    },
    {
      id: 8,
      question: "How do you handle project communication and updates?",
      answer:
        "We maintain open and transparent communication throughout the project. We provide regular updates, progress reports, and schedule meetings to discuss project status, address any concerns, and ensure alignment with your requirements.",
    },
    {
      id: 9,
      question: "What is your project development process?",
      answer:
        "We follow an agile project development methodology that emphasizes collaboration, flexibility, and iterative development. Our process includes requirements gathering, design, development, testing, deployment, and ongoing support.",
    },
    {
      id: 10,
      question:
        "How do you ensure the security of our data and sensitive information?",
      answer:
        "We prioritize data security and follow industry best practices to protect your sensitive information. We implement robust security measures, including data encryption, access controls, and regular security audits.",
    },
  ];

  useScrollToTop();
  return (
    <div className="h-full">
      <Navbar />
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Dotpot iT",
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>FAQ | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="FAQ Page - IT Company: Services, quotes, industries, on-site support, managed services, data security, cloud migration."
        />
        <meta
          name="keywords"
          content="software development company, faq of dotpotit"
        />
        <link rel="canonical" href="https://dotpotit.com/faq" />
        <meta property="og:title" content="FAQ | Dotpot iT" />
        <meta
          property="og:description"
          content="FAQ Page - IT Company: Services, quotes, industries, on-site support, managed services, data security, cloud migration."
        />
        <meta
          property="og:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
        <meta property="og:url" content="https://dotpotit.com/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Dotpot iT" />
        <meta
          name="twitter:description"
          content="FAQ Page - IT Company: Services, quotes, industries, on-site support, managed services, data security, cloud migration."
        />
        <meta
          name="twitter:image"
          content="https://dotpotit.com/api/uploads/blogs/meta_website_summary-1684306601800.png"
        />
      </Helmet>
      <section className="w-full pt-[15vh] items-center justify-center flex flex-col">
        <h1 className="text-4xl text-textColor-500 font-bold text-center ">
          FAQ
        </h1>
        <div className="flex flex-col py-10 w-3/4 ">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              onClick={() => handleClick(faq.id)}
              className="cursor-pointer mb-4"
            >
              <div
                className={`w-full flex justify-between items-center py-4 px-5 text-xl text-textColor-500  ${
                  faq.id === activeFaqId
                    ? "bg-primary-200 hover:bg-primary-200"
                    : "border hover:bg-secondary-100"
                } `}
              >
                <button className="text-base font-bold text-textColor-500 lg:text-xl">
                  {faq.question}
                </button>
                {faq.id === activeFaqId ? (
                  <BiMinus />
                ) : (
                  <BsPlusLg className="text-sm" />
                )}
              </div>
              <div
                className={`${
                  faq.id === activeFaqId ? "block" : "hidden"
                } text-left py-4 px-7`}
              >
                <p className="text-lg">{faq.answer}</p>
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
