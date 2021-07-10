import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/App.css';

import Layout from './components/Global/Layout';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import customTheme from './helpers/theme';
import Blogpage from './pages/Blogpage';
import AuthPage from './pages/AuthPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './helpers/ScrollToTop';
import ContactPage from './pages/ContactPage';
import GeneralProvider from './context/GeneralContext';
import NotFoundPage from './pages/404Page';

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
              <Route
                exact
                path={['/services', '/services/:route']}
                component={ServicesPage}
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
