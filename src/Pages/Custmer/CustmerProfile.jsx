import React, { useState } from 'react';
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


  const profiles = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'Mohsin',
      interests: [
        {
          category: 'Healthcare',
          items: ['Animal health', 'Pharmaceuticals', 'Public health'],
        },
        {
          category: 'Sustainability',
          items: ['Renewable energy', 'Climate change', 'Sustainable agriculture'],
        },
        {
          category: 'Economy',
          items: ['Trade regulations', 'Fiscal policies', 'Economic growth initiatives'],
        },
        {
          category: 'Politics',
          items: ['EU legislation', 'Human rights'],
        },
      ],
    },
    // Add more profiles if needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleCardClick = (profile) => {
    setSelectedCard(profile);
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


  const handleEditButtonClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>

      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <Sidebar actTab="CustmerProfile" />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8 ">
          {/* <Breadcrumb name="users" /> */}
          <div className="flex items-center my-4">
            <img src="/Group 1171274941.png" alt="" />
            <p className="text-lg text-theme font-semibold mx-2">Mohsin</p>
            <p className='cursor-pointer' onClick={() => handleCardClick(profiles[0])}>Edit</p>
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


      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center mx-auto z-50 overflow-y-auto max-h-full">
          <div className="bg-white p-8 shadow-lg relative w-full md:w-1/2 xl:w-2/6 rounded-3xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
              onClick={handleCloseModal}
            >
              <img src="/cancle.png" alt="Close" />
            </button>

            <div className="text-center">
              <img
                src={selectedCard.image} // Profile image URL
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-semibold mt-4">{selectedCard.name}</h2>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-theme">My interests</h3>
                <button className="text-secColor hover:underline" onClick={handleEditButtonClick}>Edit</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedCard.interests.map((interestCategory, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-theme">{interestCategory.category}</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {interestCategory.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="px-32 py-2 bg-secColor text-theme font-semibold rounded-full hover:bg-[#00e6a1]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center mx-auto z-50 overflow-y-auto max-h-full">
          <div className="bg-white p-8 shadow-lg relative w-full md:w-1/2 xl:w-2/6 rounded-3xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
              onClick={handleCloseModal}
            >
              <img src="/cancle.png" alt="Close" />
            </button>

            <div className="text-center">
              <h2 className="text-xl font-semibold mt-4">Edit Modal</h2>
              {/* Add your edit form or content here */}
            </div>

            <div className="bg-white flex justify-center items-center ">
              <div className="bg-white p-8 rounded-lg  ">
                <h2 className="text-2xl font-bold mb-6 text-center">Select your interest</h2>
                <form className=" grid grid-cols-2 gap-2">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" defaultChecked />
                        <span>Animal health</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Pharmaceuticals</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Public health</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Medical devices</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Cancer</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Health policy reforms</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Sustainability</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" defaultChecked />
                        <span>Renewable energy</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Climate change</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Waste management</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Sustainable agriculture</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Green technologies</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Economy</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" defaultChecked />
                        <span>Trade regulations</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Fiscal policies</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Labor market policies</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Economic growth initiatives</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Digital economy</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Politics</h3>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>EU legislation</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>International relations</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Immigration policy</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Human rights</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="form-checkbox text-green-500" />
                        <span>Regional politics</span>
                      </label>
                    </div>
                  </div>

                  <div className='mt-5'>
                    <button onClick={handleCloseModal} className="bg-gray-300 text-gray-700 px-16 py-2 rounded-full">Cancel</button>


                  </div>
                  <div className='mt-5'>
                    <button onClick={handleCloseModal}  className="bg-green-500 text-white px-16 py-2 rounded-full">Save</button>

                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  );
};

export default CustmerProfile;
