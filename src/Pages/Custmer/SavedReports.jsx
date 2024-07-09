
import React, { useEffect, useState } from "react";
import { userApi } from "../../api";
import SavedReportsCard from './SavedReportsCard';



  
   

const SavedReports = () => {
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getReport = async () => {
    try {
      const response = await userApi.getReport();
      console.log("User data:", response.reports);
      setReport(response?.reports || []);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReport();
  }, []);


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
    <div className="container mx-auto p-4">
    <div className="flex flex-col space-y-4">
      {report.map((card, index) => (
        <SavedReportsCard key={index} {...card} />
      ))}
    </div>
  </div>
  );
}

export default SavedReports;
