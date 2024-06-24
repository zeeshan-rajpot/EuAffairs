import React from 'react'
import AdminSidebar from '../../../Compunents/AdminSidebar'
import SavedReportsCard from '../../Custmer/SavedReportsCard';

const AdminRequest = () => {
    const data = [
        {
          title: 'How to Beat the Heat: See It Coming (More than a Week Ahead!)',
          date: 'Jun 19',
          readTime: '7 min read',
          category: 'WEATHER',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          title: 'Ten fastest-growing apps in 2022 (including some you don’t know)',
          date: 'May 11',
          readTime: '7 min read',
          category: 'APP',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
      ];
  return (
    <>
        
        <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <AdminSidebar />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8 ">
          <div className="text-3xl font-semibold mb-4">Request</div>
        


        
          <div className="container mx-auto p-4">
    <div className="flex flex-col space-y-4">
      {data.map((card, index) => (
        <SavedReportsCard key={index} {...card} />
      ))}
    </div>
  </div>
        </div>
      </div>
      
    </>
  )
}

export default AdminRequest
