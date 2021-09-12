import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';
import customTheme from './helpers/theme';
import GeneralProvider from './context/GeneralContext';

import Main from './shells/Main';
import ScrollToTop from './helpers/ScrollToTop';
import Dashboard from './shells/Dashboard';
import {Alert} from 'react-bootstrap';
import {useState} from '@hookstate/core';
import store from './store/store';

function App() {

  const {alertNotification} = useState(store)
  const {alertType} = useState(store)
  const {alertMessage} = useState(store)

  return (
    <ChakraProvider theme={customTheme}>
      <GeneralProvider>
        <ScrollToTop>
        <Alert show={alertNotification.get()} variant={alertType.get()}>
          {alertMessage.get()}
        </Alert>
          <Switch>
            <Route
              exact
              path={[
                '/',
                '/about',
                '/blog',
                '/login',
                '/register',
                '/contact',
                '/blog/:category',
                '/farmlands',
                '/beef-processing',
                '/cashew-farm',
                '/agricultural-institute',
                '/cattle-ranch',
              ]}
              component={Main}
            />
            <Route
              exact
              path={['/dashboard', '/dashboard/*']}
              component={Dashboard}
            />
          </Switch>
        </ScrollToTop>
      </GeneralProvider>
    </ChakraProvider>
  );
}

export default App;
