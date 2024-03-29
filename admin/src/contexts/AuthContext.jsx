import { createContext, useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import postLogger from "../utils/postLogger";

export const AuthContext = createContext(); // create a new context object

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, []);

  // login user with email and password
  const login = async (email, password) => {
    setError(""); // clear the error state
    try {
      // Send a POST request to the login API endpoint with email and password
      const { data } = await axios.post("/auth/login", { email, password });
      // Save the access token and user object in localStorage
      if (data.user.role !== "ADMIN") {
        throw new Error("You don't have admin access!");
      }
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, timestamp: new Date().getTime() })
      );
      // Set the user object as the current user
      setUser(data.user);
      postLogger({ level: "info", message: data });
    } catch (error) {
      if (error.response?.data?.message) {
        return setError(error.response?.data?.message);
      } else {
        setError(error.message);
      }
      postLogger({ level: "error", message: error });
    }
  };

  // Registration user with username, email and password
  const registration = async (user) => {
    setError(""); // clear the error state
    try {
      // Send a POST request to the register API endpoint with the user object
      const { data } = await axios.post("/auth/register", user);
      // Save the access token and user object in localStorage
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      // Set the user object as the current user
      setUser(data.user);
      postLogger({ level: "info", message: data });
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.msg) {
        // check if there is a custom error message in the response
        setError(error.response.data.msg);
        // set the error state with the custom error message
      } else {
        setError(error.message);
        // set the error state with the default error message
      }
      postLogger({ level: "error", message: error });
    }
  };

  // logout user
  const logout = () => {
    // Remove the access token and user object from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    // Set the current user as null
    setUser(null);
  };

  // Return the AuthContext.Provider with the user object, login, registration, and logout functions as its value
  return (
    <AuthContext.Provider
      value={{ user, login, registration, logout, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
