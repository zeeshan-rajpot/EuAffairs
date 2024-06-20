import { useState } from "react";

import Sidebar from '../../../Compunents/SideBar';
import Login from '../../../Compunents/Login';
import RequestModal from "./RequestModal";

const requests = [
  {
    date: 'Jun 19',
    title: 'How to Beat the Heat: See It Coming (More than a Week Ahead!)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    date: 'May 11',
    title: 'Ten fastest-growing apps in 2022 (including some you don’t know)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    date: 'Feb 5',
    title: '5 things to learn from type designers while dealing with visuals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
];

const RequestList = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      console.log("Toggle modal");
      setIsModalOpen(!isModalOpen);
    };
  
  return (

<>
<div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
        <Sidebar actTab="Request" />
       
      </div>
      <div className="col-span-8 lg:col-span-8 p-8 ">
        {/* <Breadcrumb name="users" /> */}



        <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Request</h1>
        <button  onClick={toggleModal} className="bg-secColor text-theme px-4 py-2 rounded-lg">New Request</button>
      </div>
      <div className="space-y-4">
        {requests.map((request, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-sm text-gray-500">{request.date}</div>
            <h2 className="text-lg font-semibold text-gray-900">{request.title}</h2>
            <p className="text-gray-700">{request.description}</p>
          </div>
        ))}
      </div>
    </div>


      </div>
    </div>



    {isModalOpen && <RequestModal toggle={toggleModal} />}
   

    </>
  );
};

export default RequestList;
