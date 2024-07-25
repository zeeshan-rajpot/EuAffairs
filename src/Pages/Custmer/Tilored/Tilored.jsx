import React, { useEffect, useState } from "react";

import TabContent from "../TabContent";
import Sidebar from "../../../Compunents/SideBar";

const Tilored = () => {
  const [activeTab, setActiveTab] = useState("third");

  const getButtonClass = (tab) => {
    let baseClass = "p-2 focus:outline-none";
    if (tab === "first" || tab === "second") {
      baseClass += " border--4 border-theme"; // Add left border to first and second buttons
    }
    if (activeTab === tab) {
      baseClass += " border-b-4 border-theme"; // Add bottom border to the active tab
    }
    return baseClass;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
        <Sidebar actTab="Tilored" />
      </div>
      <div className="col-span-8 lg:col-span-8 p-8 ">
        {/* <Breadcrumb name="users" /> */}

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
              Tailored Reports
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

export default Tilored;
