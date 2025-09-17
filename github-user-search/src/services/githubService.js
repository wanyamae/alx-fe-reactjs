import axios from 'axios';


function fetchUserData(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

export { fetchUserData };

function advancedUserSearch(query) {
    return axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
}

export { advancedUserSearch };
