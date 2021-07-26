import { Fade } from '@chakra-ui/transition';
import { useEffect } from 'react';
import OurServices from '../components/About/OurServices';
import About from '../components/Home/About';
import FAQ from '../components/Home/Faq';
import Features from '../components/Home/Features';
import Header from '../components/Home/Header';
import LabCorner from '../components/Home/LabCorner';

function Homepage() {
  useEffect(() => {
    document.title = 'Hastom Farms';
  }, []);
  return (
    <Fade in>
      <Header />
      <About />
      <OurServices />
      <Features />
      <FAQ />
      <LabCorner />
    </Fade>
  );
}

export default Homepage;
