import React from "react";
import NeedsCard from "./NeedsCard";
import { useArticles } from "./ArticlesContext"; 
const Yourneeds = () => {
  const { articles, loading } = useArticles();
  console.log(articles)

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <NeedsCard key={index} loading={true} />
            ))
          : articles.map((card, index) => <NeedsCard key={index} {...card} />)}
      </div>
    </div>
  );
};

export default Yourneeds;
