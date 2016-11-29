import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import ForecastDay from './forecastday';
import * as actions from '../actions/index';
import moment from 'moment';
import Loader from './loader';

class Forecast extends Component {
	componentWillMount() {
		let query = this.props.location.query.q;
		const { history } = this.props;
		if(!this.props.forecast) {
			if(!query){
				history.replaceState(null, '/');
			}
			else {
				this.props.fetchForecast(query);
			}
		}
	}
	renderDays = (list) => {
		list.shift();
		return list.map((day,i) => (
			<ForecastDay 
				key={i} 
				day={this.formatDate(day.dt)} 
				icon={this.selectIcon(day.weather[0].main,day.weather[0].description)} 
				tempHigh={Math.trunc(day.temp.max)} 
				tempLow={Math.trunc(day.temp.min)} />
		));
	}
	formatDate = (timestamp) => {
		let day = moment.unix(timestamp).format("ddd");
		return day;
	}

	selectIcon = (main, description) => {
		switch(main) {
			case 'Thunderstorm':
				return 'rainy';
				break;
			case 'Drizzle':
				return 'rainy';
				break;
			case 'Rain':
				return 'rainy';
				break;
			case 'Snow':
				return 'snow';
				break;
			case 'Clear':
				return 'sunny';
				break;
			case 'Clouds':
				if(description == "few clouds") {
					return  'partialy_clouded';
				}
				return 'cloudy';
		}
	}
	render() {
		if(!this.props.forecast) {
			return <Loader />
		}
		return (
			<main className="wrapper wrapper--purple">
				<section className="weather">
					<div className="weather__upper">
						<h3>TODAY</h3>
						<h2>{this.props.forecast.city.name}, {this.props.forecast.city.country}</h2>	
						<i className={`icon-${this.selectIcon(this.props.forecast.list[0].weather[0].main)}`}></i>
						<div className="weather__upper__temp">
							<span>{`${Math.trunc(this.props.forecast.list[0].temp.max)} °C`}</span>
							<span>{`${Math.trunc(this.props.forecast.list[0].temp.min)} °C`}</span>
						</div>
					</div>
					<div className="weather__lower">
						{ this.renderDays(this.props.forecast.list) }
						<div className="clearfix"></div>
					</div>
				</section>      
			</main>
		);
	}
}


function mapStateToProps(state) {
    return { forecast: state.forecast.data };
}
export default connect(mapStateToProps,actions)(Forecast);