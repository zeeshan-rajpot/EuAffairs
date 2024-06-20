import React, { useState } from 'react';
import SavedReportsCard from './SavedReportsCard';




const TailoredReport = () => {
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



      const [isUpgraded, setIsUpgraded] = useState(false);

      const handleButtonClick = () => {
        setIsUpgraded(true);
      };
    return (

        <>
        
        
        <div className="container mx-auto p-4">
      {!isUpgraded ? (
        <div className='text-center mt-20'>
          <h3 className='text-3xl font-semibold text-theme'>
            Upgrade to Professional account
          </h3>
          <p className='text-lg mt-4 text-theme'>
            Get access to the tailored report
          </p>
          <button
            onClick={handleButtonClick}
            className="px-[50px] hover:bg-transparent text-theme bg-secColor py-3 border border-secColor rounded-full duration-200 mt-4"
          >
            Upgrade Now
          </button>
        </div>
      ) : (
        <div className="flex flex-col space-y-4 mt-8">
          {data.map((card, index) => (
            <SavedReportsCard key={index} {...card} />
          ))}
        </div>
      )}
    </div>
        </>
    );
}

export default TailoredReport;
