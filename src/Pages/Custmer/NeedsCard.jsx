import React from "react";
import { format } from 'date-fns';
import { Link } from 'react-router-dom';



const NewsCard = ({ thumbnail, createdAt, readTime, category, heading, reportDescription, loading ,_id}) => {

  const formatDate = (isoString) => {
    return format(new Date(isoString), 'MMMM-dd');
  };
  return (
    <div className={`bg-white rounded-3xl shadow-md overflow-hidden ${loading ? 'shimmer' : ''}`}>
      {loading ? (
        <div className="w-full h-48 shimmer"></div>
      ) : (
        <img src={thumbnail} alt={heading} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <div>
            {loading ? (
              <div className="h-4 bg-gray-300 rounded w-24 mb-1 shimmer"></div>
            ) : (
              <span>{formatDate(createdAt)}</span>
            )}
            {loading ? (
              <div className="h-4 bg-gray-300 rounded w-16 shimmer"></div>
            ) : (
              <span className="ms-3">2 min read</span>
            )}
          </div>
          {loading ? (
            <div className="h-4 bg-gray-300 rounded w-20 shimmer"></div>
          ) : (
            <span className="text-green-500 font-semibold mb-2 inline-block">{category}</span>
          )}
        </div>
        {loading ? (
          <div className="h-6 bg-gray-300 rounded w-48 mb-2 shimmer"></div>
        ) : (
          <h3 className="text-xl font-semibold mb-2 text-theme">{heading}</h3>
        )}
        {loading ? (
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full shimmer"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 shimmer"></div>
          </div>
        ) : (
          <p className="text-gray-600 mb-4">{reportDescription}</p>
        )}
        {!loading &&    <Link  
        to={`/ArticleDetail/${encodeURIComponent(heading)}/${encodeURIComponent(createdAt)}/${encodeURIComponent(category)}/${encodeURIComponent(reportDescription)}/${encodeURIComponent(thumbnail)}/${encodeURIComponent(_id)}`}
         className="text-green-500 font-semibold">Read More</Link>
         
         }
      </div>
    </div>
  );
};

export default NewsCard;
