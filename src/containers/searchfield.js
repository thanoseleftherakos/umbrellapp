import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchForecast } from '../actions/index';
import Geosuggest from 'react-geosuggest';

class SearchField extends Component {
	constructor(props) {
    	super(props);
    	this.state = { term: '', valid: true };
  	}
  	onInputChange(value) {
  		this.setState({ term: value });
  		this.setState({ valid: true });
  	}
  	onSuggestSelect(suggest){
  		this.setState({ term: suggest.label });
  	}
  	onFormSubmit(event) {
  		event.preventDefault();
  		if(!this.state.term){
  			this.setState({ valid: false });
  			return;
  		}
  		this.setState({ valid: true });
  		this.props.fetchForecast(this.state.term,true);
  	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)}>
				<div className="form-group">
					<Geosuggest
			          placeholder="type here.."
			          inputClassName="form-input form-input--purple form-input--btn"
			          onSuggestSelect={ this.onSuggestSelect.bind(this) }
			          onChange={ this.onInputChange.bind(this) }
			        />
			        {!this.state.valid &&
			        	<span className="form-group__error">please enter your city</span>	
			    	}
					<button type="submit" className="form-btn form-btn--input form-btn--purple"><i className="icon-search"></i></button>
				</div>
			</form>
		);

	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchForecast }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchField);
