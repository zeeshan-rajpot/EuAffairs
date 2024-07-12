import React from 'react';
import { Link } from "react-router-dom";
import { format } from 'date-fns';

const SavedReportsCard = ({ heading, createdAt, updatedAt, category, reportDescription, loading ,_id}) => {
  const formatDate = (isoString) => {
    return format(new Date(isoString), 'MMMM-dd');
  };

  return (
    <div className={`bg-white rounded-3xl shadow-md overflow-hidden mb-6 p-6 ${loading ? 'shimmer' : ''}`}>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        {loading ? (
          <div className="h-4 bg-gray-300 rounded w-24 shimmer"></div>
        ) : (
          <span>{formatDate(createdAt)}</span>
        )}
        {loading ? (
          <div className="h-4 bg-gray-300 rounded w-20 shimmer"></div>
        ) : (
          <span className="ml-4 text-secColor">{category}</span>
        )}
        {/* <span className="ml-auto">{updatedAt}</span> */}
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
      {!loading && 
       <Link
       to={`/ReportsDetail/${encodeURIComponent(heading)}/${encodeURIComponent(createdAt)}/${encodeURIComponent(category)}/${encodeURIComponent(reportDescription)}/${encodeURIComponent(_id)}`}
      className="text-green-500 font-semibold"
    >
      Read More 
      </Link>
      }
    </div>
  );
};

export default SavedReportsCard;
