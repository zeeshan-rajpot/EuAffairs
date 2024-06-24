import React from "react";
import AdminSidebar from "../../../Compunents/AdminSidebar";
import CategorySelector from "../../../Compunents/categories";
import Upload from "../../../Compunents/Upload";
import Bar from "../../../Compunents/bar";
import NewsCard from "../../Custmer/News/NewsCard";

const NewsFlash = () => {
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
    <>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <AdminSidebar />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8 ">
          <div className="text-3xl font-semibold mb-4">News Flash</div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex items-center justify-center">
              <CategorySelector />
            </div>
            <div>
              <Upload />
            </div>
          </div>
          <div className="mt-6 ">
            <Bar heading={`News Flash`} />
          </div>
          <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {data.map((card, index) => (
          <NewsCard key={index} {...card} />
        ))}
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default NewsFlash;
