import React, { useEffect, useState } from "react";
import Sidebar from "../../Compunents/SideBar";
import TabContent from "./TabContent";

const CustmerProfile = () => {
  const [activeTab, setActiveTab] = useState("first");

  const getButtonClass = (tab) => {
    let baseClass = "p-2 focus:outline-none";
    if (tab === "first" || tab === "second") {
      baseClass += " border--4 border-theme"; 
    }
    if (activeTab === tab) {
      baseClass += " border-b-4 border-theme"; 
    }
    return baseClass;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
        <Sidebar actTab="CustmerProfile" />
      </div>
      <div className="col-span-8 lg:col-span-8 p-8 ">
        {/* <Breadcrumb name="users" /> */}
        <div className="flex items-center my-4">
          <img src="/Group 1171274941.png" alt="" />
          <p className="text-lg text-theme font-semibold mx-2">Mohsin</p>
          <p>Edit</p>
        </div>

        <div>
          <div className="tabs flex items-center justify-between p-4 bg-secColor text-lg font-semibold rounded-3xl">
            <button
              onClick={() => setActiveTab("first")}
              className={getButtonClass("first")}
            >
              Your needs
            </button>
            <button
              onClick={() => setActiveTab("second")}
              className={getButtonClass("second")}
            >
              Saved Reports
            </button>
            <button
              onClick={() => setActiveTab("third")}
              className={getButtonClass("third")}
            >
              Tailored Report
            </button>
          </div>
          <div className="bg-white p-4 rounded-3xl">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustmerProfile;
