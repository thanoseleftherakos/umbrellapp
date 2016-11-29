import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchForecast, showLoader, hideLoader } from '../actions/index';

class AccessLocation extends Component {
	constructor(props) {
    	super(props);
    	this.state = { location: '', valid: true };
  	}
  	accessLocation = () => {
  		this.props.showLoader();
		let geocoder = new google.maps.Geocoder();
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(this.successFunction, this.errorFunction);
		}
	}
	successFunction = (position) => {
		let lat = position.coords.latitude;
		let lng = position.coords.longitude;
		let latlng = new google.maps.LatLng(lat, lng);
		let geocoder = new google.maps.Geocoder();
		let address;
		geocoder.geocode({latLng: latlng}, (results, status) => {
		    if (status == google.maps.GeocoderStatus.OK) {
		      if (results[1]) {
		        let arrAddress = results;
		        address = arrAddress[1].formatted_address;
		        this.props.fetchForecast(address,true);	
		      } else {
		        alert("No results found");
		      }
		    } else {
		      alert("Geocoder failed due to: " + status);
		    }
		});
	}
	errorFunction = (error) => {
		this.props.hideLoader();
	}

	render() {
		return (
			<button className="btn btn--icon btn--green" onClick={() => this.accessLocation()}><i className="icon-location"></i>access location</button>
		);

	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchForecast, showLoader, hideLoader }, dispatch);
}

export default connect(null, mapDispatchToProps)(AccessLocation);
