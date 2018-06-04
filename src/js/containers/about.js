import React from 'react';
import '../../../src/css/about/about.css';

export default class About extends React.Component {

	render() {

		return (
			<div className = "about-backgroundcolor">
				<div className = "about-centerBackground">
					<div className = "me-abstract" >关于我</div>
					<div className = "me-one" >本人,摩羯男,23岁 机缘巧合,走上了程序猿的道路,从此这这条道路上开始了茫茫的寻求之道,有缘之人来到这个网站，就来看看我这个渣渣程序猿这些年的心酸泪史吧,废话不多说,相遇即是有缘。</div>
					<div className = "about-line"></div>
					<div className = "contact-me-line"></div>
					<div className = "me-abstract" >联系我</div>
					<div className = "about-contect-me about-detial">
						<ul>
							<li>WeChat:312047099</li>
							<li>Email:wangningsai@126.com</li>
							<li>Github：<a href="https://github.com/wangningsai">https://github.com/wangningsai</a></li>
							<li>简书：<a href = "https://www.jianshu.com/u/15d37d620d5b">https://www.jianshu.com/u/15d37d620d5b</a></li>
						</ul>
					</div>
					<div className = "contact-me-line"></div>
					<div className = "me-abstract" >我的简历</div>
					<div className = "about-contect-me about-detial">
						<a href = "http://nan2.pdfdo.com/Download/060416395829/060416395829.html">iOS开发工程师</a>	
					</div>
				</div>
			</div>
			);
	}
}