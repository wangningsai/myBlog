import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/css/home/homeHeader.css';

export default class HomeHeader extends React.Component {
	render() {
		return (
				<div className = "home-header">
					<div className = "home-header-title"><Link to = "/">王宁的个人主页</Link></div>
					<div className = "home-header-subtitle">WangNing PersionalBlog</div>
					<div className = "home-header-nav">
						<div className = "home-header-nav-item"><Link to = "/home">Home</Link></div>
						<div className = "home-header-nav-item"><Link to = "/blog">Blog</Link></div>
						<div className = "home-header-nav-item"><Link to = "/demo">Demo</Link></div>
						<div className = "home-header-nav-item"><Link to = "/about">About Me</Link></div>
					</div>
				</div>
			);
	}
}