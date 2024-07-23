// ArticlesContext.js
import React, { createContext, useContext, useState } from 'react';
import { userApi } from '../../api';

const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getArticles = async () => {
    setLoading(true);
    try {
      const response = await userApi.getArticle();
      console.log("User data:", response);
      setArticles(response?.articles || []);
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ArticlesContext.Provider value={{ articles, loading, error, getArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => useContext(ArticlesContext);
