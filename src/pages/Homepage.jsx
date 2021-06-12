import { Fade } from '@chakra-ui/transition';
import About from '../components/Home/About';
import FAQ from '../components/Home/Faq';
import Features from '../components/Home/Features';
import Header from '../components/Home/Header';
import LabCorner from '../components/Home/LabCorner';
import ManagerTalk from '../components/Home/ManagerTalk';

function Homepage() {
  return (
    <Fade in>
      <Header />
      <About />
      <ManagerTalk />
      <Features />
      <FAQ />
      <LabCorner />
    </Fade>
  );
}

export default Homepage;
