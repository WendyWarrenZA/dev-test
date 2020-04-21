const devTestServer = 'http://localhost:5678';
export const apiEndPoint = `${devTestServer}/commits`;

export function getCommitCountsFromGithub(url) {	
	return fetch(url)	
		.then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
			}      
            return res.commitCounts;
        })
        .catch(error => {
            alert('Error' + error.message);
			return null;
		})  
}