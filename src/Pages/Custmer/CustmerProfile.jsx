import React, { useEffect, useState } from "react";
import Sidebar from "../../Compunents/SideBar";
import TabContent from "./TabContent";
import { userApi } from "../../api";
import CheckboxSection from "./CheckboxSection"; // Adjust the import path accordingly
import toast, { Toaster } from 'react-hot-toast';
const CustmerProfile = () => {
  const [activeTab, setActiveTab] = useState("first");
  const [username, setUsername] = useState('');
  const [profileimage, setProfileimage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [categoriesState, setCategoriesState] = useState([]);

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

  const getProfile = async () => {
    try {
      const response = await userApi.getProfile();
      console.log("User data:", response?.user);
      setUsername(response?.user?.email || []);
    } catch (err) {
      setError(err.message);
      console.log("user not get " + err);
    } finally {
      setLoading(false);
    }
  };

  const getInterest = async () => {
    try {
      const response = await userApi.getInterests();
      console.log("User data:", response);
      setCategoriesState(response.interests)
    } catch (err) {
      setError(err.message);
      console.log("user not get " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
    getInterest();
  }, []);

  const profiles = [
    {
      image: 'https://via.placeholder.com/150',
      name: username,
      // interests: [
      //   {
      //     category: 'Healthcare',
      //     items: ['Animal health', 'Pharmaceuticals', 'Public health'],
      //   },
      //   {
      //     category: 'Sustainability',
      //     items: ['Renewable energy', 'Climate change', 'Sustainable agriculture'],
      //   },
      //   {
      //     category: 'Economy',
      //     items: ['Trade regulations', 'Fiscal policies', 'Economic growth initiatives'],
      //   },
      //   {
      //     category: 'Politics',
      //     items: ['EU legislation', 'Human rights'],
      //   },
      // ],
      interests: categoriesState,
    },
  ];

  const handleCardClick = (profile) => {
    setSelectedCard(profile);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    document.body.style.overflow = 'auto';
  };

  const handleEditButtonClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const [categories, setCategories] = useState([
    {
      category: 'Healthcare',
      subcategories: [
        { label: 'Animal health', checked: true },
        { label: 'Pharmaceuticals', checked: false },
        { label: 'Public health', checked: false },
        { label: 'Medical devices', checked: false },
        { label: 'Cancer', checked: false },
        { label: 'Health policy reforms', checked: false },
      ],
    },
    {
      category: 'Sustainability',
      subcategories: [
        { label: 'Renewable energy', checked: true },
        { label: 'Climate change', checked: false },
        { label: 'Waste management', checked: false },
        { label: 'Sustainable agriculture', checked: false },
        { label: 'Green technologies', checked: false },
      ],
    },
    {
      category: 'Economy',
      subcategories: [
        { label: 'Trade regulations', checked: true },
        { label: 'Fiscal policies', checked: false },
        { label: 'Labor market policies', checked: false },
        { label: 'Economic growth initiatives', checked: false },
        { label: 'Digital economy', checked: false },
      ],
    },
    {
      category: 'Politics',
      subcategories: [
        { label: 'EU legislation', checked: false },
        { label: 'International relations', checked: false },
        { label: 'Immigration policy', checked: false },
        { label: 'Human rights', checked: false },
        { label: 'Regional politics', checked: false },
      ],
    },
  ]);

  

  const handleCheckboxChange = (categoryIndex, subcategoryIndex) => {
    const newCategories = categories.map((category, catIdx) => {
      if (catIdx === categoryIndex) {
        const newSubcategories = category.subcategories.map((subcategory, subIdx) => {
          if (subIdx === subcategoryIndex) {
            return { ...subcategory, checked: !subcategory.checked };
          }
          return subcategory;
        });
        return { ...category, subcategories: newSubcategories };
      }
      return category;
    });
    setCategories(newCategories);
  };




  const [interests, setInterests] = useState([]);


  const handleSaveButtonClick = async (e) => {
    const checkedCategories = categories.map(category => ({
      category: category.category,
      subcategories: category.subcategories
        .filter(subcategory => subcategory.checked)
        .map(subcategory => subcategory.label)
    })).filter(category => category.subcategories.length > 0);
  
    const interests = { interests: checkedCategories };
  
    setInterests(interests.interests);




    e.preventDefault();
    setLoading(true);
    setError(null);
  
    const uploadData = (interests) 
  
    console.log("Data being uploaded:", uploadData);
  
    try {
      const upload = await userApi.addIntrest(uploadData);
      console.log(upload);
      toast.success(upload.message);
      getProfile();
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred.";
      setError(errorMessage);
      console.log(err);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }





  };






  









  return (
    <>


<Toaster />

      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <Sidebar actTab="CustmerProfile" />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8">
          <div className="flex items-center my-4">
            <img src="/Group 1171274941.png" alt="" />
            <p className="text-lg text-theme font-semibold mx-2">{username}</p>
            <p className="cursor-pointer" onClick={() => handleCardClick(profiles[0])}>Edit</p>
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
                src={selectedCard.image}
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
                      {interestCategory.subcategories.map((item, itemIndex) => (
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
              onClick={handleCloseEditModal}
            >
              <img src="/cancle.png" alt="Close" />
            </button>

            <div className="text-center">
              <h2 className="text-xl font-semibold mt-4">Edit Modal</h2>
            </div>

            <div className="bg-white flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Select your interest</h2>
                <div className="grid grid-cols-2 gap-2">
                {categories.map((category, categoryIndex) => (
        <CheckboxSection
          key={categoryIndex}
          category={category.category}
          items={category.subcategories}
          onChange={subcategoryIndex => handleCheckboxChange(categoryIndex, subcategoryIndex)}
        />
      ))}
                  <div className='mt-5'>
                    <button onClick={handleCloseEditModal} className="bg-gray-300 text-gray-700 px-16 py-2 rounded-full">Cancel</button>
                  </div>
                  <div className='mt-5'>
                    <button onClick={handleSaveButtonClick} className="bg-green-500 text-white px-16 py-2 rounded-full">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustmerProfile;
