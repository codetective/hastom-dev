/* eslint-disable eqeqeq */
import { Center, Text } from '@chakra-ui/react';
import { Fade } from '@chakra-ui/transition';
import Pagination from 'react-js-pagination';
import { Switch, Route } from 'react-router-dom';
import FeaturedCards from '../components/MAIN/Blog/FeaturedCards';
import FeaturedPosts from '../components/MAIN/Blog/FeaturedPosts';
import LatestArticle from '../components/MAIN/Blog/LatestArticle';
import SkeletonLoaderBlog from '../components/MAIN/Blog/SkeletonLoaderBlog';
import TopNav from '../components/MAIN/Blog/TopNav';
import ErrorAlert from '../components/MAIN/Global/ErrorAlert';
import { useGenCtx } from '../context/GeneralContext';
import BlogListingByCategory from './BlogListingByCategory';
import BlogRead from './BlogRead';

function Blogpage() {
  const {
    articles,
    articlesData,
    errorArticles,
    loadingArticles,
    FetchArticles,
  } = useGenCtx();
  return (
    <Fade in>
      <TopNav />
      <Switch>
        <Route exact path="/blog">
          <>
            {loadingArticles && <SkeletonLoaderBlog />}
            {!loadingArticles && errorArticles && (
              <ErrorAlert
                title="Something went wrong!"
                message="A network  error may have occurred, please"
                retryFunc={() => window.location.reload()}
              />
            )}
            {!loadingArticles && !errorArticles && articles.length == 0 && (
              <ErrorAlert
                title="Empty Barn!"
                type="info"
                message="There are no articles for this selected category"
                retryFunc={() => window.location.reload()}
              />
            )}

            {!loadingArticles &&
              !errorArticles &&
              articles.length !== 0 &&
              articlesData &&
              articlesData.meta && (
                <>
                  {articlesData.meta.current_page == 1 && (
                    <>
                      <LatestArticle latestPost={articles[0]} />
                      <FeaturedPosts articles={articles.slice(1, 4)} />
                      <FeaturedCards
                        posts={articles.slice(4, articles.length)}
                      />
                    </>
                  )}

                  {articlesData.meta.current_page != 1 && (
                    <FeaturedCards posts={articles} />
                  )}
                </>
              )}
            <Center py="10" bg="white" flexDir="column">
              {!loadingArticles &&
                !errorArticles &&
                articlesData &&
                articlesData.meta &&
                articles.length !== 0 &&
                articlesData.meta.current_page ==
                  articlesData.meta.last_page && (
                  <Text as="p">--- End ---</Text>
                )}{' '}
              {!loadingArticles &&
                !errorArticles &&
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
                    onChange={pageNumber => FetchArticles(pageNumber)}
                  />
                )}
            </Center>
          </>
        </Route>
        <Route
          exact
          path="/blog/:category"
          children={<BlogListingByCategory />}
        />
        <Route path="/blog/:category/:article" children={<BlogRead />} />
      </Switch>
    </Fade>
  );
}

export default Blogpage;
