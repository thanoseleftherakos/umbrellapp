import { REQUEST_FORECAST, RECEIVE_FORECAST, SHOW_LOADER, HIDE_LOADER } from '../actions/types';

export default function(state = {isLoading:false}, action) {
	switch(action.type) {
		case REQUEST_FORECAST:
			return { ...state, isLoading: true };
		case RECEIVE_FORECAST:
			return { ...state, data: action.payload, isLoading: false };
		case SHOW_LOADER:
			return { ...state, isLoading: true };
		case HIDE_LOADER:
			return { ...state, isLoading: false };
	default: return state;
	}
	return state;
}