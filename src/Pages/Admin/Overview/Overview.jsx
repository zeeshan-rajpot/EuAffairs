import React from "react";
import AdminSidebar from "../../../Compunents/AdminSidebar";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
        <AdminSidebar />
      </div>
      <div className="col-span-8 lg:col-span-8 p-8 ">
        <div className="text-3xl font-semibold mb-4">Statistic</div>
      </div>
    </div>
  );
};

export default Overview;
