import React, { useEffect, useState } from "react";
import Sidebar from '../../../Compunents/SideBar';
import NewsCard from './NewsCard';
import { userApi } from '../../../api';

const News = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getNews = async () => {
    try {
      const response = await userApi.getNews();
      console.log("User data:", response.news);
      setNews(response?.news || []);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
    const data = [
        {
          image: 'https://via.placeholder.com/300', // Replace with actual image URL
          date: 'Jun 19',
          readTime: '7 min read',
          category: 'WEATHER',
          title: 'How to Beat the Heat: See It Coming (More than a Week Ahead!)',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
          image: 'https://via.placeholder.com/300', // Replace with actual image URL
          date: 'May 11',
          readTime: '5 min read',
          category: 'APP',
          title: 'Ten fastest-growing apps in 2022 (including some you don’t know)',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
          image: 'https://via.placeholder.com/300', // Replace with actual image URL
          date: 'Feb 5',
          readTime: '8 min read',
          category: 'DESIGN',
          title: '6 things to learn from top designers while dealing with visuals',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
      ];
  return (
    <div>
      



      <div className="grid grid-cols-1 lg:grid-cols-10">
      <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
        <Sidebar actTab="News" />
       
      </div>
      <div className="col-span-8 lg:col-span-8 p-8 ">
        {/* <Breadcrumb name="users" /> */}



   
        <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {news.map((card, index) => (
          <NewsCard key={index} {...card} />
        ))}
      </div>
    </div>

      </div>
    </div>




    </div>
  );
}

export default News;
