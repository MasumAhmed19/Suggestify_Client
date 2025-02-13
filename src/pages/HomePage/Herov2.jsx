import React, { useState } from "react";
import { ImSpinner } from "react-icons/im";


const Herov2 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a network request with setTimeout
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 2000);

    const form = e.target;
    form.reset();
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
          {/* Title */}
          <div className="text-center">
            <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 ">
              Ask. Discover. Recommend.
            </p>
            <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight ">
              Your Go-To Platform for{" "}
              <span className="text-[#7201FF]">
                Product Recommendations
              </span>
            </h1>
          </div>

          <div className="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
            <div className="shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
              <div className="flex justify-center -space-x-3">
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white "
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="User 1"
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white "
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="User 2"
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white "
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="User 3"
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white "
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="User 4"
                />
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-white bg-gray-800 ">
                  <span className="text-xs font-medium leading-none text-white uppercase">
                    7k+
                  </span>
                </span>
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-s border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0 "></div>

            <div className="pt-5 sm:pt-0 sm:ps-5">
              <div className="text-lg font-semibold text-gray-800 ">
                Trust pilot
              </div>
              <div className="text-sm text-gray-500 ">
                Rated best over 37k reviews
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 ">
              <div className="w-full pb-2 sm:pb-0">
                <label
                  htmlFor="hs-hero-name-1"
                  className="block text-sm font-medium "
                >
                  <span className="sr-only">Your name</span>
                </label>
                <input
                  type="text"
                  id="hs-hero-name-1"
                  className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s w-full ">
                <label
                  htmlFor="hs-hero-email-1"
                  className="block text-sm font-medium "
                >
                  <span className="sr-only">Your email address</span>
                </label>
                <input
                  type="email"
                  id="hs-hero-email-1"
                  className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="whitespace-nowrap pt-2 sm:pt-0 grid sm:block">
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#7201FF] text-white hover:bg-[#7201FF] focus:outline-none focus:bg-[#7201FF] disabled:opacity-50 disabled:pointer-events-none"
                  disabled={isLoading || isSubscribed}
                >
                  {isLoading ? (

                      <ImSpinner className="animate-spin h-5 w-5" />

                    
                  ) : isSubscribed ? (
                    "Subscribed"
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Herov2;
