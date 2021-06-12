import { Fade } from '@chakra-ui/transition';
import { Switch, Route } from 'react-router-dom';
import FeaturedCards from '../components/Blog/FeaturedCards';
import FeaturedPosts from '../components/Blog/FeaturedPosts';
import LatestArticle from '../components/Blog/LatestArticle';
import TopNav from '../components/Blog/TopNav';
import BlogListingByCategory from './BlogListingByCategory';
import BlogRead from './BlogRead';

function Blogpage() {
  return (
    <Fade in>
      <TopNav />
      <Switch>
        <Route exact path="/blog">
          <LatestArticle />
          <FeaturedPosts />
          <FeaturedCards />
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
