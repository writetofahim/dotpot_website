import { useGoogleLogin } from "@react-oauth/google";
import { createContext, useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import postLogger from "../utils/postLogger";

export const AuthContext = createContext(); // create a new context object

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [randomValue, setRandomValue] = useState(null);
  const [order, setOrder] = useState([]);

  // sign in with google
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      setLoading(true);
      const response = await axios.post("/auth/google", {
        code: codeResponse.code,
      });
      console.log(response);
      // Save the access token and user object in localStorage
      localStorage.setItem("accessToken", JSON.stringify(response.data.token));
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...response.data.user,
          timestamp: new Date().getTime(),
        })
      );
      // Set the user object as the current user
      setUser(response.data.user);
      setLoading(false);
    },
    onError: (errorResponse) => {
      console.log(errorResponse);
      setLoading(false);
    },
  });

  useEffect(() => {
    // useEffect hook to run some code after the component is mounted
    // Check if there is a user object in localStorage and if it has been there for more than 5 days
    const currentUser = localStorage.getItem("user");
    if (
      currentUser &&
      new Date().getTime() - currentUser?.timestamp > 259200000
    ) {
      // If it has been there for more than 3 days, remove it along with the access token
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    }
    // If the user object is still valid, set it as the current user
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  // login user with email and password
  const login = async (email, password) => {
    setError(""); // clear the error state
    try {
      // Send a POST request to the login API endpoint with email and password
      const { data } = await axios.post("/auth/login", { email, password });
      // Save the access token and user object in localStorage
      postLogger({ level: "info", message: data });
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, timestamp: new Date().getTime() })
      );
      // Set the user object as the current user
      setUser(data.user);
    } catch (error) {
      postLogger({ level: "error", message: error });
      if (error?.response?.data?.message) {
        return setError(error.response.data.message);
      }
      {
        setError(error.message); // set the error state with the error message
      }
      console.log(error);
    }
  };

  // Registration user with username, email and password
  const registration = async (user) => {
    setError(""); // clear the error state
    try {
      // Send a POST request to the register API endpoint with the user object
      const { data } = await axios.post("/auth/register", user);
      // Save the access token and user object in localStorage
      postLogger({ level: "info", message: data });
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      // Set the user object as the current user
      setUser(data.user);
      return data;
    } catch (error) {
      console.log(error);
      postLogger({ level: "error", message: error });
      if (error?.response?.data?.msg) {
        // check if there is a custom error message in the response
        setError(error.response.data.msg);
        // set the error state with the custom error message
      } else {
        setError(error.message);
      }
    }
  };

  // logout user
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
  };

  const values = {
    user,
    login,
    registration,
    logout,
    error,
    googleLogin,
    isChatPopupOpen,
    setIsChatPopupOpen,
    randomValue,
    setRandomValue,
    order,
    setOrder,
  };

  // Return the AuthContext.Provider with the user object, login, registration, and logout functions as its value
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
