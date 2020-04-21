import {RECEIVE_COMMIT_COUNTS } from "./actionTypes";
import { getCommitCountsFromGithub, apiEndPoint } from '../api/ApiHelper';
import moment from 'moment';

export function getCommitCounts(url, timespan) {    
	return dispatch => {
        var res = url.split("/");
        const owner = res[3];
        const repo = res[4];
         
        let until = moment().toISOString();;
        let since = moment().subtract(1, 'd').toISOString();;
        switch(timespan){
            case 'week':
                since = moment().subtract(1, 'w').toISOString();;
                break;
            case 'month':
                since = moment().subtract(1, 'M').toISOString();;
                break;
            default:
                break;
        }        
		return getCommitCountsFromGithub(`${apiEndPoint}?owner=${owner}&repo=${repo}&since=${since}&until=${until}`).then(response => {			
			dispatch(receiveCommitCounts(response));
		});
	};
}

export const receiveCommitCounts = json => ({ type: RECEIVE_COMMIT_COUNTS, data: json });