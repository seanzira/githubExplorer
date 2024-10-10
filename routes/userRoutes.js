const express = require('express');
const userController = require('../controllers/userController'); 

const router = express.Router();

// Define routes
router.get('/users/:username', userController.getUserDetails); // Route to get user details
router.get('/users/:username/repos', userController.getUserRepos); 
router.get('/repos/:username/:repoName/commits', userController.getRepoCommits); 

// Export the router
module.exports = router;