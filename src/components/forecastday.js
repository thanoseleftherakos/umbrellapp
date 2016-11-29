import React, { Component } from 'react';

export default class ForecastDay extends Component {
  render() {
    return (
		<div className="weather__lower__item">
			<div className="weather__lower__item__day">{this.props.day}</div>
			<div className="weather__lower__item__icon"><i className={`icon-${this.props.icon}`}></i></div>
			<div className="weather__lower__item__temp">
				<span>{`${this.props.tempHigh} °C`}</span>
				<span>{`${this.props.tempLow} °C`}</span>
			</div>
		</div>
    );
  }
}