import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../componentStyles/Search.css';

// Search component
const Search = () => {

    // state to hold the username input from the user
    const [username, setUsername] = useState('');
    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Function to handle the search from submission
    const handleSearch = async (e) => {
        e.preventDefault();
        navigate(`/user/${username}`);
    };

    return (
        <div className="search-container">
            <h1>Github Explorer</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type='text'
                    placeholder='Search for a Github user'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}       
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
};

// export the Search component for use in other parts of the application
export default Search;