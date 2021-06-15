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
import AboutPage from './pages/AboutPage';


function App () {
	return (
		<ChakraProvider theme={customTheme}>
			<Layout>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path='/blog' component={Blogpage} />
					<Route path="/blog/:category" component={Blogpage} />
				</Switch>
			</Layout>

		</ChakraProvider>
	);
}

export default App;