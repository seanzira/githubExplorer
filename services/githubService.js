// Import axios
const axios = require('axios');

// Fetch user data from GitHub API
exports.fetchUser = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

// Fetch repositories for a specific user
exports.fetchUserRepos = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
};

// Fetch commits for a specific repo
exports.fetchRepoCommits = async (username, repoName) => {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/commits`);
    return response.data;
};
