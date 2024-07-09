
import React, { useEffect, useState } from "react";
import NeedsCard from './NeedsCard';
import { userApi } from '../../api';


const Yourneeds = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getarticles = async () => {
    try {
      const response = await userApi.getArticle();
      console.log("User data:", response.articles);
      setArticles(response?.articles || []);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getarticles();
  }, []);

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
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

    
              {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <NeedsCard key={index} loading={true} />
                ))
              ) : (
        articles.map((card, index) => (
          <NeedsCard key={index} {...card} />
        ))
      )}
      </div>
    </div>
  );
}

export default Yourneeds;
