/* eslint-disable eqeqeq */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeaturedCards from '../components/MAIN/Blog/FeaturedCards';
import LatestArticle from '../components/MAIN/Blog/LatestArticle';

import { Fade } from '@chakra-ui/transition';
import baseURL from '../helpers/config';
import axios from 'axios';
import SkeletonLoaderBlog from '../components/MAIN/Blog/SkeletonLoaderBlog';
import { Center, Text } from '@chakra-ui/react';
import Pagination from 'react-js-pagination';
import ErrorAlert from '../components/MAIN/Global/ErrorAlert';

function BlogListingByCategory() {
  let { category } = useParams();
  const [loadingCategoryPosts, setLoadingCategoryPosts] = useState(false);
  const [articles, setArticles] = useState([]);
  const [articlesData, setArticlesData] = useState([]);
  const [error, setError] = useState(false);

  const FetchCategoryArticles = async (page = 1) => {
    setLoadingCategoryPosts(true);
    setError(null);
    try {
      const dt = await axios.get(baseURL + '/article-category/' + category);
      const { data } = dt.data;
      if (data.error) {
        setError(true);
        setLoadingCategoryPosts(false);
      } else {
        setArticles(data);
        setArticlesData(dt.data);
        setLoadingCategoryPosts(false);
      }
    } catch (error) {
      setError(true);
      setLoadingCategoryPosts(false);
    }
  };

  useEffect(() => {
    document.title = 'Blog';
    FetchCategoryArticles();
    //eslint-disable-next-line
  }, [category]);

  return (
    <Fade in>
      <>
        {loadingCategoryPosts && <SkeletonLoaderBlog />}
        {!loadingCategoryPosts && error && (
          <ErrorAlert
            title="Something went wrong!"
            // message="A network  error may have occurred, please"
            message={
              'Sorry, cannot find resource. It may have been removed by an administrator.'
            }
          />
        )}
        {!loadingCategoryPosts && !error && articles.length == 0 && (
          <ErrorAlert
            title="Empty Barn!"
            type="info"
            message="There are no articles for this selected category"
            retryFunc={() => window.location.reload()}
          />
        )}

        {!loadingCategoryPosts &&
          !error &&
          articles.length !== 0 &&
          articlesData &&
          articlesData.meta && (
            <>
              {articlesData.meta.current_page == 1 && (
                <>
                  <LatestArticle latestPost={articles[0]} />
                  <FeaturedCards posts={articles.slice(1, articles.length)} />
                </>
              )}

              {articlesData.meta.current_page != 1 && (
                <FeaturedCards posts={articles} />
              )}
            </>
          )}
        <Center py="10" bg="white" flexDir="column">
          {!loadingCategoryPosts &&
            !error &&
            articlesData &&
            articlesData.meta &&
            articles.length !== 0 &&
            articlesData.meta.current_page == articlesData.meta.last_page && (
              <Text as="p">--- End ---</Text>
            )}{' '}
          {!loadingCategoryPosts &&
            !error &&
            articlesData &&
            articlesData.meta &&
            articles.length !== 0 && (
              <Pagination
                totalItemsCount={articlesData.meta.total}
                activePage={articlesData.meta.current_page}
                itemsCountPerPage={articlesData.meta.per_page}
                itemClass="pagination-item"
                linkClass="pagination-link"
                firstPageText="<<"
                lastPageText=">>"
                onChange={pageNumber => FetchCategoryArticles(pageNumber)}
              />
            )}
        </Center>
      </>
    </Fade>
  );
}

export default BlogListingByCategory;
