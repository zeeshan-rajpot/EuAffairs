import React, { useState } from 'react';
import AdminSidebar from "../../Compunents/AdminSidebar";
import CategorySelector from "../../Compunents/categories";
import Upload from "../../Compunents/Upload";
import Bar from "../../Compunents/bar";
import NeedsCard from "../Custmer/NeedsCard";

const Article = () => {

  const cards = [
    {
      title: 'The path to technical leadership',
      date: 'Dec 28',
      readTime: '7',
      category: 'Leadership',
      description: 'If software development feels like it is only part of your professional purpose, ...',
      image: 'https://via.placeholder.com/300' // replace with actual image
    },
    {
      title: 'The path to technical leadership: ',
      date: 'Dec 28',
      readTime: '7',
      category: 'Leadership',
      description: 'If software development feels like it is only part of your professional purpose, ...',
      image: 'https://via.placeholder.com/300' // replace with actual image
    },
    {
      title: 'The path to technical leadership: ',
      date: 'Dec 28',
      readTime: '7',
      category: 'Leadership',
      description: 'If software development feels like it is only part of your professional purpose, ...',
      image: 'https://via.placeholder.com/300' // replace with actual image
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
          <div className="text-3xl font-semibold mb-4">Article </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex items-center justify-center">
              <CategorySelector />
            </div>
            <div onClick={() => handleCardClick({})}>
              <Upload />
            </div>
          </div>
          <div className="mt-6 ">
            <Bar heading={`Article`} />
          </div>
          <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <NeedsCard key={index} {...card} />
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
        
        <div className="my-4 mt-10">
          <input
            type="file"
            className="hidden"
            id="thumbnailUpload"
          />
          <label htmlFor="thumbnailUpload" className="cursor-pointer">
            <div className="w-full h-32 bg-white shadow-lg flex flex-col items-center justify-center rounded-lg">
              <img src="/solar_upload-broken.png" alt="" />
              <p className="text-gray-500">Upload Thumbnail</p>
            </div>
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2  shadow-lg rounded-lg"
            placeholder="Heading Name"
          />
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
          <textarea
            className="w-full px-4 py-2  shadow-lg rounded-lg"
            rows="4"
            placeholder="Article"
          ></textarea>
        </div>
        <div className="text-center mt-6">
          <button className="px-10 py-2 bg-secColor text-theme hover:bg-transparent border border-secColor hover:text-theme duration-200 font-semibold rounded-full">
            Submit
          </button>
        </div>
      </div>
        </div>
      )}

    </>
  );
};

export default Article;
