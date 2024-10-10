import '../componentStyles/UserDetails.css'; 
import LoadingSpinner from './loadingIndicator';

const UserDetails = ({ user, repos, commits }) => {
    
    // Show the loading spinner while fetching data
    if (!user) {
        return <LoadingSpinner />;
    }

    // Render user details and repositories with commits
    return (
        <div>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={user.login} />
            <p>{user.bio}</p>
            <h3>Repositories:</h3>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                            {repo.name}
                        </a> - {repo.description || 'No description'}
                        <p>Created on: {new Date(repo.created_at).toLocaleDateString()}</p>
                        <h4>Last 5 commits:</h4>
                        <ul>
                            {commits[repo.name]?.map(commit => (
                                <li key={commit.sha}>
                                    {commit.commit.message} - {new Date(commit.commit.author.date).toLocaleDateString()}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Export the UserDetailsView component for use in other parts of the app
export default UserDetails;
