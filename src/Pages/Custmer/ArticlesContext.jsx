import React, { createContext, useState, useContext, useEffect } from "react";
import { userApi } from "../../api";

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getArticles = async () => {
    try {
      const response = await userApi.getArticle();
      setArticles(response?.articles.reverse() || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, loading, error, getArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => useContext(ArticlesContext);
