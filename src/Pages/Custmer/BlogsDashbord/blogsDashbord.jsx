



import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Upload from "../../../Compunents/Upload";
// import Bar from '../../../Compunents/Bar';
import SideBar from '../../../Compunents/SideBar';
import { userApi } from "../../../api";
import Yourneeds from "../Yourneeds";
import NewsCard from "../NeedsCard";
import BlogCard from "../BlogCard";





const BlogsDashbord = () => {
  const [category, setCategory] = useState('Healthcare');
  const [subcategory, setSubcategory] = useState('');
  const [heading, setHeading] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [blogs, setBlogs] = useState([]);
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




  const categories = {
    Healthcare: ['Animal health', 'Pharmaceuticals', 'Public health', 'Medical devices', 'Cancer', 'Health policy reforms'],
    Sustainability: ['Renewable energy', 'Climate change', 'Waste management', 'Sustainable agriculture', 'Green technologies'],
    Economy: ['Trade regulations', 'Labor market policies', 'Economic growth initiatives', 'Digital economy'],
    Politics: ['EU legislation', 'International relations', 'Human rights', 'Immigration policy', 'Regional politics'],
  };

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


  
  

  
  


 







  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Assuming you'll get total pages from API

  const fetchArticles = async (page) => {
    setLoading(false);
    try {
      const response = await userApi.getBloguser(); // Fetch 10 items per page
      console.log(response)
      setBlogs(response.blogs || []);
    
    } catch (err) {
      setError(err.message);
      console.error("Error fetching articles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);


  return (
    <>
      <Toaster />

      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 ">
          <SideBar />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8 ">
          <div className="text-3xl font-semibold mb-4">Blogs </div>
          
          <div className="mt-6 ">
            {/* <Bar heading={`Article`} /> */}
          </div>
          <div className=" mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.length === 0 ? (
        <p>There are no blogs for now.</p>
      ) : (
        blogs.map((article, index) => (
          <BlogCard key={index} {...article} />
        ))
      )}
      </div>


    </div>
        </div>
      </div>







    </>
  );
};

export default BlogsDashbord;
