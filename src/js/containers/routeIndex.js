import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeHeader from '../components/homeHeader';
import Home from '../containers/home';
import Blog from '../containers/blog';
import Demo from '../containers/demo';
import About from '../containers/about';

export default class RouteIndex extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<HomeHeader />
					<Route path = "/home" component = { Home } />
            		<Route path = "/blog" component = { Blog } />
            		<Route path = "/demo" component = {Demo} />
            		<Route path = "/about" component = { About } />
				</div>
			</Router>
			);
	}
}