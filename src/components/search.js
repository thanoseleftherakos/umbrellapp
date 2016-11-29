import React, { Component } from 'react';
import SearchField from './../containers/searchfield';
import AccessLocation from './../containers/access_location';

export default class Search extends Component {
	render() {
		return (
			<main className="wrapper wrapper--red">
				<section className="search">
					<h2>type a location:</h2>
					<SearchField />
					<h3>or give us your location</h3>
					<AccessLocation />
				</section>
			</main>
		);
	}
}
