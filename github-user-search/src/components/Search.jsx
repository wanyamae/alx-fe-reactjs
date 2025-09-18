import { fetchUserData } from "../services/githubService";
import { advancedUserSearch } from "../services/githubService";
import React, { useState } from 'react';
import '../assets/css/search.css';

export default function Search() {

const [showAdvanced, setShowAdvanced] = useState(false);
const [username, setUsername] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [location, setLocation] = useState('');
const [minRepos, setMinRepos] = useState('');
const [user, setUser] = useState(null);
const [users, setUsers] = useState([]);

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);
    setUsers([]);
    try {
        if (showAdvanced) {
            const response = await advancedUserSearch({ username, location, minRepos });
            setUsers(response.data.items);
        } else {
            const response = await fetchUserData(username);
            setUser(response.data);
        }

    } catch {
        setError(true);
    } finally {
        setLoading(false);
    }

};

return (
    <div className='search-container'>
        <div className="search-mode-toggle">
            <span>Simple</span>
                <label className="switch">
                    <input
                    type="checkbox"
                    checked={showAdvanced}
                    onChange={() => setShowAdvanced(v => !v)}
                    />
                    <span className="slider"></span>
                </label>
            <span>Advanced</span>
        </div>
        <form onSubmit={handleSubmit}>
            <input
                className="search-input"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
            />
            {showAdvanced && (
                <div className="advanced-fields">
                    <input
                        className="search-input"
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="Location (e.g., San Francisco)"
                    />
                    <input
                        className="search-input"
                        type="number"
                        value={minRepos}
                        onChange={e => setMinRepos(e.target.value)}
                        placeholder="Minimum Repositories (e.g., 10)"
                        min="0"
                    />
                </div>
            )}
            <button type="submit" disabled={loading}>
                {loading ? "Searching..." : "Search"}
            </button>
        </form>
        {error && <div className="error-message">Looks like we cant find the user.</div>}
        {user && (
        <div className="user-card">
            <img src={user.avatar_url} alt={user.login} width={80} />
            <h2 className="centered-heading"> {user.name || user.login}</h2>
            <br />
            <a href ={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
            </a>
            <p>Followers: {user.followers} | Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
            <p>Username: {user.login}</p>
        </div>
        )}
        {showAdvanced && users.length > 0 && (
            <div className="user-list-table">
                <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Username</th>
          <th>Profile</th>
          <th>Repos</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>
              <img src={user.avatar_url} alt={user.login} width={40} />
            </td>
            <td>{user.login}</td>
            <td>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </td>
            <td>
              {/* Repo count is not in search API, so you need to fetch user details for each user */}
              {user.public_repos !== undefined ? user.public_repos : "—"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
            </div>
        )}
    </div>
);
}