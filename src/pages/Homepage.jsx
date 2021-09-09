import { Fade } from '@chakra-ui/transition';
import { useEffect } from 'react';
import OurServices from '../components/MAIN/About/OurServices';
import About from '../components/MAIN/Home/About';
import FAQ from '../components/MAIN/Home/Faq';
import Features from '../components/MAIN/Home/Features';
import Header from '../components/MAIN/Home/Header';
import LabCorner from '../components/MAIN/Home/LabCorner';

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
