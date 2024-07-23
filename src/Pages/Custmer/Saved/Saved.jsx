import React, { useEffect, useState } from "react";

import NeedsCard from '../NeedsCard';
import { userApi } from "../../../api";
import Sidebar from "../../../Compunents/SideBar";

const Saved = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSavedArticle = async () => {
    try {
      const response = await userApi.getSavedArticle();
      console.log("User data:", response);
      setSavedArticles(response?.savedArticles.reverse() || []);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSavedArticle();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-10">
        <div className="col-span-2 lg:col-span-2 bg-[#FAFBFF]">
          <Sidebar  />
        </div>
        <div className="col-span-8 lg:col-span-8 p-8">
          <h3 className="text-xl md:text-3xl font-semibold text-theme">
            Saved Articles
          </h3>

          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <NeedsCard key={index} loading={true} />
                ))
              ) : savedArticles.length === 0 ? (
                <p>There are no saved articles.</p>
              ) : (
                savedArticles.map((card, index) => (
                  <NeedsCard key={index} {...card} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
