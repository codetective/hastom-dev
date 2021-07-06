import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeaturedCards from '../components/Blog/FeaturedCards';
import LatestArticle from '../components/Blog/LatestArticle';

import herd from '../assets/blog/herd.jpg';
import herd2 from '../assets/blog/herd2.jpg';
import farmers from '../assets/blog/farmers.jpg';
import farmers2 from '../assets/blog/farmers2.jpg';
import foliage from '../assets/blog/foliage.jpeg';
import cashew from '../assets/blog/cashew.jpg';
import greenhouse from '../assets/blog/greenhouse.jpeg';
import { Fade } from '@chakra-ui/transition';

function BlogListingByCategory() {
  const images = [farmers, farmers2, foliage, cashew, herd, herd2, greenhouse];

  let { category } = useParams();

  // sample blog posts to display
  const posts = {
    latest: {
      image: images[Math.floor(Math.random() * images.length)],
      caption: 'Seven key roles in financial funding in farms',
      author: 'Debo Ajiwhatever',
      category: category,
      sample:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
    },

    posts: [
      {
        image: images[Math.floor(Math.random() * images.length)],
        date: '12 Jun 2021',
        sample:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
        author: 'Debo Ajikede',
        category: category,

        caption: 'Filling system for agricultural exports and its advantages',
      },
      {
        image: images[Math.floor(Math.random() * images.length)],
        date: '12 Jun 2021',
        sample:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
        author: 'Debo Ajikede',
        category: category,

        caption: 'Cyber attack on virtual  farms : The 2021 report analysis',
      },
      {
        image: images[Math.floor(Math.random() * images.length)],
        date: '12 Jun 2021',
        sample:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
        author: 'Debo Ajikede',
        category: category,

        caption: 'Seven key roles in financial funding in farms',
      },
      {
        image: images[Math.floor(Math.random() * images.length)],
        date: '12 Jun 2021',
        sample:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
        author: 'Debo Ajikede',
        category: 'Technology',
        caption: 'Filling system for agricultural exports and its advantages',
      },
      {
        image: images[Math.floor(Math.random() * images.length)],
        date: '12 Jun 2021',
        sample:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
        author: 'Debo Ajikede',
        category: category,

        caption: 'Cyber attack on virtual  farms : The 2021 report analysis',
      },
      {
        image: images[Math.floor(Math.random() * images.length)],
        date: '12 Jun 2021',
        sample:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
        author: 'Debo Ajikede',
        category: category,

        caption: 'Seven key roles in financial funding in farms',
      },
    ],
  };

  const [loadingCategoryPosts, setLoadingCategoryPosts] = useState(false);

  useEffect(() => {
    document.title = 'Blog';
    setLoadingCategoryPosts(true);
    setTimeout(() => {
      setLoadingCategoryPosts(false);
    }, 3000);
  }, [category]);

  return (
    <Fade in>
      <LatestArticle
        latestPost={posts.latest}
        loadingCategoryPosts={!loadingCategoryPosts}
      />
      <FeaturedCards
        posts={posts.posts}
        loadingCategoryPosts={!loadingCategoryPosts}
      />
    </Fade>
  );
}

export default BlogListingByCategory;
