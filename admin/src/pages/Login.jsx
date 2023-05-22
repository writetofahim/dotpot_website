import React, { useContext, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  // create a isLoading state and setIsLoading setter using the useState hook, initialize to false
  const { user, login, error, loading } = useContext(AuthContext);
  // use the useContext hook to get the user, login, and error values from the AuthContext
  const navigate = useNavigate();
  // use the useNavigate hook to get the navigate function
  const location = useLocation();

  const from = location.state?.from?.pathname || "/admin";

  useEffect(() => {
    if (user && !loading) {
      navigate(from, { replace: true });
    }
  }, [from, user, loading]);

  const handleSubmit = async (e) => {
    // define a handleSubmit function that takes an event argument
    e.preventDefault(); // prevent default form submission behavior
    setIsLoading(true); // set isLoading state to true
    // get the email value from the form
    const email = e.target.email.value;
    // get the password value from the form
    const password = e.target.password.value;

    // try to log in the user
    try {
      // call the login function with email and password arguments
      await login(email, password);
      // reset the form
      e.target.reset();
      // set isLoading state to false
      setIsLoading(false);
      // if an error occurs
    } catch (error) {
      // set isLoading state to false
      console.log("login error: ", error);
      if (error.response?.data?.errors?.msg) {
        setError(error.response.data.errors.msg);
      } else {
        setError(error.message);
      }
      setIsLoading(false);
    }
  };

  if (!user && loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="container min-h-[100vh] flex items-center justify-center p-5">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md p-5 border rounded-xl shadow-xl glassmorphism"
          >
            <h1 className="text-center text-6xl text-blue-500 font-bold">
              SIGN IN
            </h1>

            <div className="relative flex items-center mt-8">
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
                type="email"
                name="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300"
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
                type="password"
                name="password"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary-300"
                placeholder="Password"
                required
              />
            </div>

            {error && (
              <p className="text-white mt-3 py-2 px-3 bg-red-400 rounded">
                {error}
              </p>
            )}
            <div className="mt-6">
              {/* {error && <p className='text-red-500 mb-3'>{error}</p>} */}
              <button
                disabled={isLoading}
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-blue-500 rounded-lg hover:bg-primary-400 hover:shadow-xl hover:scale-105 transition-all "
              >
                {/* <span className='w-[max-content] mx-auto flex items-center gap-2'>Sign in </span> */}
                <span className="w-[max-content] mx-auto flex items-center gap-2">
                  {" "}
                  Sign in {isLoading && <FaSpinner className="animate-spin" />}
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
