import React, { Component } from 'react';
import logo from './../assets/images/logo.svg'
import { Link } from 'react-router';
import social_share from '../assets/images/social_share.jpg';

export default class Header extends Component {
	constructor(props) {
    	super(props);
    	this.state = {navOpen: false};
  	}
	toggleNav = (e) => {
		e.preventDefault();
		this.setState( { navOpen : !this.state.navOpen } );
	}
	shareWindow = (e) => {
		e.preventDefault();
		const url = e.currentTarget.getAttribute('href');
		const w = 700;
		const h = 500;
		const left = (screen.width/2)-(w/2);
		const top = (screen.height/2)-(h/2);
		return window.open(url, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	}
	showFavorites = () => {
		if(this.props.location == "/forecast") {
			return (
				<div className="header__fav">
					<a href="#"><span>Add to Favorites</span><i className="icon-heart"></i></a>
				</div>
			)
		}
	}
	render() {
		return (
			<header className="header">
				<button className={"header__nav-toggle " + (this.state.navOpen ? "active" :"")} onClick={(e) => this.toggleNav(e)}><span></span></button>
				<div className="header__logo">
					<Link to="/"><img src={logo} alt=""/></Link>
				</div>
				{ this.showFavorites() }
				<nav className={"nav " + (this.state.navOpen ? "active" :"")}>
					<h1>Your best weather app</h1>
					<hr />
					<ul className="nav__list">
						<li className="nav__list__item"><a href="#">team</a></li>
						<li className="nav__list__item"><a href="#">history</a></li>
						<li className="nav__list__item"><a href="#">contact</a></li>
					</ul>
					<div className="nav__social-media">
						<h5>suggest to a friend</h5>
						<ul className="nav__social-media__list">
							<li className="nav__social-media__list__item">
								<a href="http://www.facebook.com/share.php?u=http://umbrellapp.webf8.net" onClick={(e) => this.shareWindow(e)}><i className="icon-facebook"></i></a>
							</li>
							<li className="nav__social-media__list__item">
								<a href="http://twitter.com/home/?status=http://umbrellapp.webf8.net" onClick={(e) => this.shareWindow(e)}><i className="icon-twitter"></i></a>
							</li>
							<li className="nav__social-media__list__item">
								<a href="https://plus.google.com/share?url=http://umbrellapp.webf8.net" onClick={(e) => this.shareWindow(e)}><i className="icon-google_plus"></i></a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}
