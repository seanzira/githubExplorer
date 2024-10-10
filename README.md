# GitHub Explorer

## Project Overview
GitHub Explorer is a web application that allows users to search for GitHub users and view their profiles, repositories, and commits. This application utilizes the GitHub API to fetch and display relevant information in a user-friendly manner.

## Installation Instructions
To set up the project locally, follow these steps:

- Download the project files.
- Install the project dependencies for both the frontEnd and the backEnd (in their respective directories) by running `npm install`
- Once that is done, run the backend file by running `npm start` in the backend directory
- Once the backend is running, run `npm start` in the frontend directory which will redirect you to the project's webpage (if not, there will be an http://localhost:3000 link available to you).

## Features
The webpage consists of a search engine where you can enter the specific GitHub user that you are looking for. The webpage also displays the user's details, including their avatar, bio, and repositories, as well as the last 5 commits for each. To top it all off, the webpage has a responsive green and black design to allow for a quality user experience.

## Technologies
1: Frontend
- React
- React Router
- Axios

2: Backend
- Node.js
- Express
- Axios
- CORS
- Helmet

3: Development Tools
- ESLint
- Nodemon
