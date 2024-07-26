import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import './style.css'
import { format } from 'date-fns';
import Navbar from "../../Compunents/Navbar";
import Footer from "../../Compunents/Footer";

const Detail = () => {


  const { thumbnail, blogDescription,category ,updatedAt , heading} = useParams();
  const formatDate = (isoString) => {
    return format(new Date(isoString), 'dd-MMMM-yyyy');
  };

  return (
    <>
 

      <div className=" relative w-100   bg-no-repeat 2xl:bg-contain xl:bg-contain bg-cover"
      style={{
        backgroundImage: `url(${thumbnail})`,
        // height: '75vh',
        backgroundPosition:'center',
      }}
      >
           <div className="glass opacity-80 relative">
        <Navbar />

    </div>

        <div className="h-[50vh] md:h-[75vh] w-11/12  2xl:w-4/6   mx-auto text-center flex flex-col items-center justify-center"></div>
      </div>

      <div className="   ">
        <div className=" p-8  w-11/12  2xl:w-4/6   mx-auto">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900">
             {heading}
            </h1>
            <span className="text-secColor text-sm md:text-2xl font-semibold">
            {formatDate(updatedAt)}
            </span>
          </div>
          {/* <h2 className="mt-4 text-2xl font-semibold text-gray-700">
            Protecting Both Animal and Human Health
          </h2> */}
          <p className="mt-4 text-gray-600 text-xl">
            {blogDescription}
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
