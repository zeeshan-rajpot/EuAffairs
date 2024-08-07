import { format } from 'date-fns';


const NewsCard = ({ thumbnail, createdAt, readTime, category, heading, reportDescription }) => {
  const formatDate = (isoString) => {
    return format(new Date(isoString), 'MMMM-dd');
  };


    return (
      <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6 p-6">
        <div className="flex items-center space-x-4">
          {/* <img src={thumbnail} alt={heading} className="w-20 h-20 rounded-md object-cover" /> */}
          <div className="flex-1">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{formatDate(createdAt)}</span>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
              <span className="mx-2">•</span>
              <span className="text-green-500">{category}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-theme">{heading}</h3>
            <p className="text-gray-600">{reportDescription}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsCard;