import React, { useEffect, useState } from "react";
import { userApi } from '../../../api';
import Sidebar from '../../../Compunents/SideBar';
import RequestModal from "./RequestModal";
import { format } from 'date-fns';


const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("Toggle modal");
    setIsModalOpen(!isModalOpen);
  };

  const getReq = async () => {
    try {
      const response = await userApi.getRequest();
      console.log("User data:", requests);
      setRequests(response?.requests || []);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReq();
  }, []);


  const formatDate = (isoString) => {
    return format(new Date(isoString), 'MMMM-dd');
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <Sidebar actTab="Request" />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8">
          <div className="p-4">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Request</h1>
              <button onClick={toggleModal} className="bg-secColor text-theme px-4 py-2 rounded-lg">
                New Request
              </button>
            </div>
            <div className="space-y-4">
            {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="p-4 w-full bg-white shadow-lg rounded-lg shimmer">
                    <div className="h-6 bg-gray-200 mb-2 shimmer"></div>
                    <div className="h-4 bg-gray-200 shimmer"></div>
                  </div>
                ))
              ) : (
                requests.map((request, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-sm text-gray-500">{formatDate(request.createdAt)}</div>
                    <h2 className="text-lg font-semibold text-gray-900">{request.subject}</h2>
                    <p className="text-gray-700">{request.description}</p>
                  </div>
                ))
              )}
              {error && <div className="text-red-500">{error}</div>}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <RequestModal toggle={toggleModal} req={getReq} />}
    </>
  );
};

export default RequestList;
