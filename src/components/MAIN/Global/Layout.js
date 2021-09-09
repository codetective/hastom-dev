import React from 'react';
import NavBar from '../Nav/Navbar';
import Footer from './Footer';

export default function Layout ({ children }) {
	return (<>
		<NavBar />
		<div>
			{children}
		</div>
		<Footer />
	</>)
}