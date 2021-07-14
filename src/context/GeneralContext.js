import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../helpers/config';

const GeneralContext = React.createContext();

export function useGenCtx() {
  return useContext(GeneralContext);
}

const GeneralProvider = ({ children }) => {
  const [fetchError, setError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoading] = useState(false);

  //articles states
  const [errorArticles, setErrorArticles] = useState(false);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [articles, setArticles] = useState([]);
  const [articlesData, setArticlesData] = useState([]);

  const FetchCategories = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const dt = await axios.get(baseURL + '/article-category?page=' + page);
      const { data } = dt.data;
      if (data.error) {
        setError(data.error.message);
        setLoading(false);
      } else {
        setError(null);
        setCategories(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  const FetchArticles = async (page = 1) => {
    setLoadingArticles(true);
    setErrorArticles(null);
    try {
      const dt = await axios.get(baseURL + '/article?page=' + page);
      const { data } = dt.data;
      if (data.error) {
        setErrorArticles(data.error.message);
        setLoadingArticles(false);
      } else {
        setErrorArticles(null);
        setArticles(data);
        setArticlesData(dt.data);
        setLoadingArticles(false);
      }
    } catch (error) {
      setErrorArticles(error.message);
      setLoadingArticles(false);
    }
  };

  useEffect(() => {
    FetchCategories();
    FetchArticles();
  }, []);

  return (
    <GeneralContext.Provider
      value={{
        loadingCategories,
        categories,
        fetchError,
        FetchCategories,

        FetchArticles,
        loadingArticles,
        errorArticles,
        articles,
        articlesData,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
export default GeneralProvider;
