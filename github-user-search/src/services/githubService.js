import axios from 'axios';

function buildUserSearchQuery({ username, location, minRepos }) {
  let query = '';
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;
  return query.trim();
}

export function advancedUserSearch({ username, location, minRepos }) {
  const query = buildUserSearchQuery({ username, location, minRepos });
  return axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
}

function fetchUserData(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

export { fetchUserData };

