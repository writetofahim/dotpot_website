import React, { useEffect } from "react";
import "./login.css";

const LoginSuccessModal = ({ message, open, setOpen }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false); // Hide the modal after 3 seconds
    }, 5000);

    return () => {
      clearTimeout(timer); // Clear the timeout when the component is unmounted or updated
    };
  }, [setOpen]);

  return (
    <>
      {open && (
        <div
          className={`fixed w-full top-20 right-5 z-[9999999] flex justify-center login-success-modal`}
        >
          <div className="w-[400px] flex justify-center items-center gap-4 bg-green-300/50 backdrop-blur-lg shadow-xl rounded-lg">
            <div class="wrapper">
              <svg
                class="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  class="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  class="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold">Login Successful</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSuccessModal;
