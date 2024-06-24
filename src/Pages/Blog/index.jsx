import React, { useState } from "react";

import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";

const Detail = () => {
  return (
    <>
      <div className=" relative w-100 bg-bgBlogDetail   bg-no-repeat 2xl:bg-cover bg-cover">
        <Navbar />

        <div className="h-[75vh]  w-11/12  2xl:w-4/6   mx-auto text-center flex flex-col items-center justify-center"></div>
      </div>

      <div className="   ">
        <div className=" p-8  w-11/12  2xl:w-4/6   mx-auto">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900">
              Veterinary Public Health:
            </h1>
            <span className="text-secColor text-sm md:text-2xl font-semibold">
              12, June 2024
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-gray-700">
            Protecting Both Animal and Human Health
          </h2>
          <p className="mt-4 text-gray-600 text-xl">
            Veterinary public health (VPH) is a multidisciplinary field that
            focuses on the prevention and control of diseases that affect both
            animals and humans. It encompasses a wide range of activities aimed
            at ensuring the health and safety of communities through the
            management of zoonotic diseases, food safety, antimicrobial
            resistance, environmental health, and emergency preparedness.
          </p>
          <p className="mt-2 text-gray-600 text-xl">
            The One Health approach, which recognizes the interconnectedness of
            human, animal, and environmental health, is a cornerstone of
            veterinary public
            health...............................................
          </p>

          <div className="  flex items-center justify-center ">
            <div className="bg-white p-8 rounded-lg  max-w-md w-full text-center">
              <h2 className="text-3xl font-bold mb-4">Upgrade Plan</h2>
              <p className="text-gray-700 mb-4">To read the article</p>
              <button
                //   onClick={handleCloseOverlay}
                className="bg-secColor text-[#001B57] px-10 py-2 rounded-md "
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* {isOverlayVisible && ( */}
        {/* <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Upgrade Plan</h2>
            <p className="text-gray-700 mb-4">
              Upgrade to our premium plan to access all features.
            </p>
            <button
              onClick={handleCloseOverlay}
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
            >
              Close
            </button>
          </div>
        </div> */}
        {/* )} */}
      </div>

      <Footer />
    </>
  );
};

export default Detail;
