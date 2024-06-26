import React, { useState } from 'react';
import AdminSidebar from "../../../Compunents/AdminSidebar";
import CategorySelector from "../../../Compunents/categories";
import Upload from "../../../Compunents/Upload";
import Bar from "../../../Compunents/bar";
import SavedReportsCard from "../../Custmer/SavedReportsCard";

const Reoprt = () => {
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




  const [category, setCategory] = useState('Healthcare');
  const [subCategory, setSubCategory] = useState('');

  const categories = {
    Healthcare: ['Animal health', 'Public health', 'Health policy reforms', 'Pharmaceuticals', 'Medical devices'],
    Technology: ['AI', 'Blockchain', 'Cybersecurity', 'Software', 'Hardware'],
    Finance: ['Banking', 'Insurance', 'Investment', 'Fintech', 'Accounting']
    // Add
  }

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    // Allow background scrolling
    document.body.style.overflow = 'auto';
  };



  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <AdminSidebar />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8 ">
          <div className="text-3xl font-semibold mb-4">Report</div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex items-center justify-center">
              <CategorySelector />
            </div>
            <div onClick={() => handleCardClick({})}>
              <Upload />
            </div>
          </div>
          <div className="mt-6 ">
            <Bar heading={`Tailored Reports`}/>
          </div>




          <div className="container mx-auto p-4">
    <div className="flex flex-col space-y-4">
      {data.map((card, index) => (
        <SavedReportsCard key={index} {...card} />
      ))}
    </div>
  </div>
        </div>
      </div>




      
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center mx-auto z-50 overflow-y-auto max-h-full">
         <div className="bg-white p-8 shadow-lg relative w-full md:w-1/2 rounded-3xl">
        <button 
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
        onClick={handleCloseModal}
        >
          <img src="/cancle.png" alt="Close" />
        </button>
        
    
    <div className='text-center'>
      <h2 className='text-theme font-semibold text-3xl mb-10'>
        Upload Report 
      </h2>

    </div>
        
        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubCategory(''); // Reset subcategory when category changes
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Subcategory</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {categories[category].map((subCat) => (
              <label key={subCat} className="flex items-center space-x-2">
                <input
              
                  type="radio"
                  name="subcategory"
                  value={subCat}
                  checked={subCategory === subCat}
                  onChange={() => setSubCategory(subCat)}
                  className="form-radio custom-radio"
                />
                <span>{subCat}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2  shadow-lg rounded-lg"
            placeholder="Heading Name"
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full px-4 py-2  shadow-lg rounded-lg"
            rows="4"
            placeholder="Report details"
          ></textarea>
        </div>
        <div className="text-center mt-6">
          <button className="px-32  py-2 bg-secColor text-theme hover:bg-transparent border border-secColor hover:text-theme duration-200 font-semibold rounded-full">
            Upload
          </button>
        </div>
      </div>
        </div>
      )}



    </>
  );
};

export default Reoprt;
