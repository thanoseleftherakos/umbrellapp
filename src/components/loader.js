import React, { Component } from 'react';
import logoHoly from '../assets/images/holy.svg';

export default class Loader extends Component {
  render() {
    return (
    	<main className="wrapper wrapper--red">
			<section className="loader">
				<div className="loader__icon">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 80 142">
						<path id="Shape" className="st0" d="M41.9,61.5V54h-3.7v7.5C17.5,62.5,1,79.5,1,100.4v3.7h3.7c0-4.1,3.3-7.4,7.4-7.4
							c4.1,0,7.4,3.3,7.4,7.4h3.7c0-4.1,3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4v29.7c0,4.1,3.3,7.4,7.4,7.4s7.4-3.3,7.4-7.4V130h-3.7v3.7
							c0,2-1.7,3.7-3.7,3.7c-2,0-3.7-1.7-3.7-3.7v-29.7c0-4.1,3.3-7.4,7.4-7.4s7.4,3.3,7.4,7.4h3.7c0-4.1,3.3-7.4,7.4-7.4
							c4.1,0,7.4,3.3,7.4,7.4H79v-3.7C79,79.5,62.5,62.5,41.9,61.5z M19.7,95.9c-2-1.8-4.6-2.9-7.5-2.9c-2.7,0-5.2,1-7.1,2.6
							c2.1-15.2,14-27.3,29.1-29.9C25.7,73.5,20.5,84.3,19.7,95.9z M49.3,93c-3.9,0-7.3,2-9.3,5c-2-3-5.4-5-9.3-5c-2.8,0-5.3,1-7.3,2.7
							c0.9-11.9,7-22.9,16.6-30.1c9.6,7.2,15.7,18.2,16.6,30.1C54.6,94,52.1,93,49.3,93z M67.9,93c-2.9,0-5.6,1.1-7.5,2.9
							c-0.8-11.6-6-22.4-14.5-30.2c15.1,2.5,27,14.7,29.1,29.9C73,93.9,70.5,93,67.9,93z"/>
						<line className="st1" x1="6" y1="-18" x2="6" y2="82"/>
						<line className="st1" x1="17" y1="-31" x2="17" y2="69"/>
						<line className="st1" x1="36" y1="-36" x2="36" y2="64"/>
						<line className="st1" x1="54" y1="-26" x2="54" y2="65"/>
						<line className="st1" x1="70" y1="-49" x2="70" y2="78"/>
					</svg>
				</div>
				<div className="loader__holy">
					<a href="http://holy.gd/" target="_blank"><img src={logoHoly} alt=""/></a>
				</div>
			</section>
		</main>
    );
  }
}