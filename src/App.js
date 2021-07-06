import React from 'react';
import {
	ChakraProvider
} from '@chakra-ui/react';
import './styles/App.css'

import Layout from './components/Global/Layout';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import customTheme from './helpers/theme';
import Blogpage from './pages/Blogpage';
import AuthPage from './pages/AuthPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './helpers/ScrollToTop';
import ContactPage from './pages/ContactPage';


function App () {
	return (
		<ChakraProvider theme={customTheme}>
			<Layout>
				<ScrollToTop>

				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path='/blog' component={Blogpage} />
					<Route exact path='/contact' component={ContactPage} />
					<Route exact path={['/services', '/services/:route']} component={ServicesPage} />
					<Route exact path={['/login','/register']} component={AuthPage} />
					<Route path="/blog/:category" component={Blogpage} />
				</Switch>
				</ScrollToTop>
			</Layout>

		</ChakraProvider>
	);
}

export default App;