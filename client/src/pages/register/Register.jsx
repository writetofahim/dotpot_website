import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaSpinner } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import CommonSnackbar from "../../components/CommonSnackbar/CommonSnackbar";
import Footer from "../../components/Footer/Footer";
import Particle from "../../components/Hero/Particle";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../contexts/AuthContext";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const Register = () => {
  useScrollToTop();
  const [isLoading, setIsLoading] = useState(false);
  const { user, registration, error, googleLogin } = useContext(AuthContext);

  const [isOpen, setOpen] = useState(false);

  const [signUpError, setSignUpError] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      // If user exists, navigate to home page ("/")
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]); // This effect runs when the user value changes

  // Define a function to handle form submission
  const handleSubmit = async (e) => {
    setSignUpError("");
    e.preventDefault();
    if (e.target.password.value !== e.target.confirmPassword.value) {
      // If the password and confirm password fields don't match,
      return setSignUpError("Password and confirm password is not same!");
    }
    setIsLoading(true);
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      // Call the registration function from the AuthContext and pass in the user object
      const data = await registration(user);
      if (data?.user) {
        setOpen(true);
      }
      e.target.reset();

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
             {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "Dotpot iT",
              "address":"House-1, Road-3, Block-A, Mirpur-10, Dhaka, Bangladesh",
              "telephone": "+880 1817 176 192",
              "email": [
                "help@dotpotit.com",
                "hr@dotpotit.com",
                "marketing@dotpotit.com"
              ]
            }
          `}
        </script>
        <title>Registration | Dotpot iT a leading it company</title>
        <meta
          name="description"
          content="Get Top-notch, Extensively, Innovative Mobile App Solution By Us"
        />
        <link rel="canonical" href="https://www.dotpotit.com/register" />
        <meta
          property="og:title"
          content="Mobile App Development | Dotpot iT"
        />
        <meta
          property="og:description"
          content="Get Top-notch, Extensively, Innovative Mobile App Solution By Us"
        />
        <meta
          property="og:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
        <meta
          property="og:url"
          content="https://www.dotpotit.com/key-features/mobile-app-development"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile App Development | Dotpot iT"
        />
        <meta
          name="twitter:description"
          content="Get Top-notch, Extensively, Innovative Mobile App Solution By Us"
        />
        <meta
          name="twitter:image"
          content="https://www.dotpotit.com/assets/logo-492dab11.png"
        />
      </Helmet>
      <Navbar />
      <Particle />
      {isOpen && (
        <CommonSnackbar
          message={
            "Registration Successful! Check your email to know more about our services."
          }
          open={open}
          setOpen={setOpen}
        />
      )}
      <section className="pt-[10vh] flex items-center justify-center">
        <div className="container min-h-[100vh] flex items-center justify-center p-3">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-5 border rounded-xl shadow-xl glassmorphism"
          >
            <h1 className="text-center text-6xl text-textColor-500 font-bold">
              Register
            </h1>

            <div className="relative flex items-center mt-8">
              <span className="absolute text-xl ml-3">
                <RxPerson />
              </span>

              <input
                name="username"
                type="text"
                className="block w-full py-3 text-gray-700 bg-background-500 border rounded-lg px-11 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                name="email"
                type="email"
                className="block w-full py-3 text-gray-700 bg-background-500 border rounded-lg px-11 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300"
                placeholder="Email address"
                required
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                name="password"
                type="password"
                className="block w-full py-3 text-gray-700 bg-background-500 border rounded-lg px-11 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300"
                placeholder="Password"
                required
              />
            </div>

            <div className="relative flex items-center mt-4">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                name="confirmPassword"
                type="password"
                className="block w-full py-3 text-gray-700 bg-background-500 border rounded-lg px-11 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="mt-6">
              {error && <p className="text-red-500 mb-3">{error}</p>}
              {signUpError && (
                <p className="text-red-500 mb-3">{signUpError}</p>
              )}
              <button
                disabled={isLoading}
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-primary-500 rounded-lg hover:bg-primary-400 hover:shadow-xl hover:scale-105 transition-all "
              >
                <span className="w-[max-content] mx-auto flex items-center gap-2">
                  {" "}
                  Sign up {isLoading && <FaSpinner className="animate-spin" />}
                </span>
              </button>

              <button
                onClick={googleLogin}
                className="w-full flex items-center justify-center px-6 py-3 mt-4 text-gray-600 border rounded-xl hover:bg-primary-100 hover:shadow-xl hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>

                <span className="mx-2">Sign up with Google</span>
              </button>

              <div className="mt-6 text-center text-gray-400 font-bold">
                <Link to="/login" className="text-sm hover:underline">
                  Already Have an account?{" "}
                  <span className="text-textColor-500">Sign in</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
