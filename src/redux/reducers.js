import { combineReducers } from 'redux';
import { FETCH_COMMIT_COUNTS, RECEIVE_COMMIT_COUNTS } from './actionTypes';

function commitCounts(state = null, action) {	
	switch (action.type) {
		case FETCH_COMMIT_COUNTS:
			return action;
        case RECEIVE_COMMIT_COUNTS:    
            var result = [];
            for(var i in action.data){
                if (action.data[i] > 0){
                    result.push([i, action.data[i]]);
                }
            }              
			return result;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
    commitCounts
})
  
export default rootReducer