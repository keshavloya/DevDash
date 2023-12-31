import React, { useState } from "react";
import { sendOTP } from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpButton, setOtpButton] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOtpButton(true);
    const response = await sendOTP(email, "password");
    if (!response.ok) {
      setOtpButton(false);
      setEmail("");
    }
    if (response.ok) {
      navigate("/otp", {
        state: {
          email,
          type: "password",
        },
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-purple-100 backdrop-blur flex justify-center items-center bg-texture bg-cover py-28 sm:py-0">
      <div className="p-4 sm:p-8 flex-1 ">
        <div className="max-w-[420px] min-w-[320px] bg-white rounded-b-3xl mx-auto">
          <div className="relative h-auto mt-3">
            <svg
              className="absolute -top-20 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
            <div className="absolute bottom-5 right-2">
              <Link to="/" className="block transition hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 stroke-current text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="px-10 pt-4 pb-8 rounded-3xl shadow-xl">
            <div className="mx-auto text-center">
              <Link
                to="/"
                className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
              >
                <span className="mx-auto text-3xl font-black leading-none text-gray-900 select-none">
                  DevDash<span className="text-indigo-600">.</span>
                </span>
              </Link>
            </div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {" "}
              Forgot password
            </h1>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="my-10">
                Enter your email to reset your password
              </div>

              <div className="mb-10 relative">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  value={email}
                  id="emaill"
                  type="emaill"
                  name="emaill"
                  disabled={otpButton}
                  className="outline-none disabled:cursor-not-allowed peer w-full px-0.5 py-1.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600"
                  placeholder="Password"
                />
                <label
                  htmlFor="emaill"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <button
                type="submit"
                disabled={otpButton}
                className="w-full py-2 text-lg text-white disabled:cursor-not-allowed font-semibold text-center rounded-full bg-indigo-500 transition-all hover:bg-indigo-600 focus:outline-none"
              >
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
