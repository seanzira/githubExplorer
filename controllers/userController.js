// Import githubService
const githubService = require('../services/githubService');

// Fetch user data from GitHub API
exports.getUserDetails = async (req, res) => {
    const { username } = req.params;
    try {
        const userData = await githubService.fetchUser(username);
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
};

// Fetch repositories for a specific user
exports.getUserRepos = async (req, res) => {
    const { username } = req.params;
    try {
        const reposData = await githubService.fetchUserRepos(username);
        res.json(reposData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch repositories' });
    }
};

// Fetch commits for a specific repo
exports.getRepoCommits = async (req, res) => {
    const { username, repoName } = req.params;
    try {
        const commitsData = await githubService.fetchRepoCommits(username, repoName);
        res.json(commitsData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch commits' });
    }
};
