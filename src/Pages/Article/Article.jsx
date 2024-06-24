import React from "react";
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
            <div>
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
    </>
  );
};

export default Article;
