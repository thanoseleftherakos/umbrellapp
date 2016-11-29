import axios from 'axios';
import { REQUEST_FORECAST, RECEIVE_FORECAST, SHOW_LOADER, HIDE_LOADER } from './types';
import { browserHistory } from 'react-router';


const API_KEY = 'f71b114c11818063f28a56467a382c59';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=metric&cnt=6&appid=${API_KEY}`;


export function fetchForecast(city,redirect) {
	const url = `${API_URL}&q=${city}`;
	return function (dispatch) {
		dispatch({ type: REQUEST_FORECAST });
		setTimeout(() => { //add delay for holy specs
			axios.get(url)
			.then(response => {
				dispatch({ 
					type: RECEIVE_FORECAST,
					payload: response.data
				});
				if(redirect){
					browserHistory.push(`/forecast?q=${city}`);
				}
			})
			.catch(error => {
				console.log(error);
			});
		}, 2000 );
	};
}

export function showLoader() {
	return function (dispatch) {
		dispatch({ type: SHOW_LOADER });
	}
}
export function hideLoader() {
	return function (dispatch) {
		dispatch({ type: HIDE_LOADER });
	}
}