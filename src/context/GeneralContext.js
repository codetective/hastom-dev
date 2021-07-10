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

  //creating category vars
  const [creatingCat, setCreatingCat] = useState(false);
  const [creatingCatError, setCatError] = useState(null);

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
      setError(null);
      setCategories(data);
      setLoading(false);
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
      setErrorArticles(null);
      setArticles(data);
      setArticlesData(dt.data);
      setLoadingArticles(false);
    } catch (error) {
      setErrorArticles(error.message);
      setLoadingArticles(false);
    }
  };

  const CreateCategory = async name => {
    setCreatingCat(true);
    setCatError(null);
    try {
      const dt = await axios.post(baseURL + '/article-category/create', {
        category: name,
      });
      const { category } = dt.data;
      setCatError(null);
      setCategories(prev => [...prev, category]);
      setCreatingCat(false);
    } catch (error) {
      setCatError(error.message);
      setCreatingCat(false);
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

        CreateCategory,
        creatingCat,
        creatingCatError,

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
