import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

function buildUserSearchQuery({ username, location, minRepos }) {
  let query = '';
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;
  return query.trim();
}

export function advancedUserSearch({ username, location, minRepos }) {
  const query = buildUserSearchQuery({ username, location, minRepos });
  return axios.get(`${API_URL}/search/users?q=${encodeURIComponent(query)}`);
}

function fetchUserData(username) {
  return axios.get(`${API_URL}/users/${username}`);
}

export { fetchUserData };

