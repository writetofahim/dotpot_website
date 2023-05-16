import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
import CommonSnackbar from "../../components/CommonSnackbar/CommonSnackbar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "../../utils/axiosInstance";
import postLogger from "../../utils/postLogger";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { resetToken } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setOpen(false);
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`/auth/reset-password/${resetToken}`, {
        password,
      });
      postLogger({ level: "info", message: response });
      setSuccess("Password has been reset successfully");
      setOpen(true);
      event.target.reset();
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error?.response?.data?.message);
        return;
      }
      setError(error.message);
      postLogger({ level: "error", message: error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Reset Password | Dotpot iT</title>
        <meta
          name="description"
          content="Get Top-notch, Extensively, Innovative Mobile App Solution By Us"
        />
        <link rel="canonical" href="/reset-password/" />
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
      <CommonSnackbar message={success} open={open} setOpen={setOpen} />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-5">Reset Password</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-5">
            <label htmlFor="password" className="block mb-1 font-bold">
              New Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="confirmPassword" className="block mb-1 font-bold">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <button
            disabled={loading}
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded flex gap-2 items-center disabled:bg-primary-200"
          >
            Reset Password {loading && <FaSpinner className="animate-spin" />}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
