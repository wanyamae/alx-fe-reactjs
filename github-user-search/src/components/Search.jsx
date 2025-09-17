import { fetchUserData } from "../services/githubService";
import React, { useState } from 'react';
import '../assets/css/Search.css';

export default function Search() {

const [username, setUsername] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [user, setUser] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
        const response = await fetchUserData(username);
        setUser(response.data)

    } catch {
        setError(true);
    } finally {
        setLoading(false);
    }

};

return (
    <div className='search-container'>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
            />
            <button type="submit" disabled={loading}>
                {loading ? "Searching..." : "Search"}
            </button>
        </form>
        {error && <div>User not found.</div>}
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
    </div>
);
}