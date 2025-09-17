import axios from 'axios';


function fetchUserData(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

export { fetchUserData };
