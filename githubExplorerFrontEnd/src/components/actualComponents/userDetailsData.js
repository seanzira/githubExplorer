import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserDetails from './UserDetails';

const UserDetailsData = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [commits, setCommits] = useState({});

    const BASE_URL = 'http://localhost:3001/api'; 

    // Effect to fetch user and repository data from your backend
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userRes = await axios.get(`${BASE_URL}/users/${username}`);
                setUser(userRes.data);
                
                const reposRes = await axios.get(`${BASE_URL}/users/${username}/repos`);
                setRepos(reposRes.data);
            } catch (error) {
                console.error('Error fetching user and repos:', error);
            }
        };

        fetchUserData();
    }, [username]);

    // Effect to fetch commits for each repository from your backend
    useEffect(() => {
        const fetchCommits = async (repoName) => {
            try {
                const commitsRes = await axios.get(`${BASE_URL}/repos/${username}/${repoName}/commits`);
                return commitsRes.data.slice(0, 5); // Get the last 5 commits
            } catch (error) {
                console.error(`Error fetching commits for ${repoName}:`, error);
                return []; // Return an empty array on error
            }
        };

        const fetchAllCommits = async () => {
            try {
                const commitPromises = repos.map(repo => fetchCommits(repo.name));
                const results = await Promise.all(commitPromises);
                const commitsMap = repos.reduce((acc, repo, index) => {
                    acc[repo.name] = results[index];
                    return acc;
                }, {});
                setCommits(commitsMap);
            } catch (error) {
                console.error('Error fetching all commits:', error);
            }
        };

        if (repos.length > 0) {
            fetchAllCommits();
        }
    }, [repos, username]);

    // Pass the fetched data to the view component
    return (
        <UserDetails user={user} repos={repos} commits={commits} />
    );
};

// Export the UserDetailsData component for use in other parts of the app
export default UserDetailsData;
