import { useState } from "react";

import Sidebar from '../../../Compunents/SideBar';
import Login from '../../../Compunents/Login';
import Yourneeds from "../Yourneeds";

const Saved = () => {
  return (
    <div>
      


      <div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
        <Sidebar actTab="Saved" />
       
      </div>
      <div className="col-span-8 lg:col-span-8 p-8 ">
        {/* <Breadcrumb name="users" /> */}
<h3 className="text-xl md:text-3xl font-semibold text-theme ">
Save Articles
</h3>




<Yourneeds/>
      


      </div>
    </div>



    </div>
  )
}

export default Saved
