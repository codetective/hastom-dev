import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/App.css';

import Layout from './components/Global/Layout';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import customTheme from './helpers/theme';
import Blogpage from './pages/Blogpage';
import AuthPage from './pages/AuthPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './helpers/ScrollToTop';
import ContactPage from './pages/ContactPage';
import GeneralProvider from './context/GeneralContext';
import NotFoundPage from './pages/404Page';
import CashewServicePage from './pages/CashewServicePage';
import CattleRanchServicePage from './pages/CattleRanchingServicePage';
import AgricInstituteServicePage from './pages/AgricInstituteServicePage';
import BeefProcessingServicePage from './pages/BeefProcessingServicePage';
import FarmLandsServicePage from './pages/FarmLandsServicePage';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <GeneralProvider>
        <Layout>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/blog" component={Blogpage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/cashew-farm" component={CashewServicePage} />
              <Route
                exact
                path="/agricultural-institute"
                component={AgricInstituteServicePage}
              />
              <Route
                exact
                path="/beef-processing"
                component={BeefProcessingServicePage}
              />
              <Route exact path="/farmlands" component={FarmLandsServicePage} />
              <Route
                exact
                path="/cattle-ranch"
                component={CattleRanchServicePage}
              />
              <Route
                exact
                path={['/login', '/register']}
                component={AuthPage}
              />
              <Route path="/blog/:category" component={Blogpage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </ScrollToTop>
        </Layout>
      </GeneralProvider>
    </ChakraProvider>
  );
}

export default App;
