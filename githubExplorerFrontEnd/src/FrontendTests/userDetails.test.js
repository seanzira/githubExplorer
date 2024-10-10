import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetails from '../components/actualComponents/UserDetails';

// mocking user data and repository for testing
const mockUser = { login: 'johnDoe', avatar_url: 'https://example.com/avatar.png', bio: 'Developer' };
const mockRepos = [{ id: 1, name: 'repo1', description: 'First repo', created_at: '2023-01-01', html_url: 'https://github.com/repo1' }];
const mockCommits = {
    repo1: [{ sha: 'abc123', commit: { message: 'Initial commit', author: { date: '2023-01-01' } } }]
};

describe('UserDetails Component', () => {
    test('renders user details', () => {
        render(<UserDetails user={mockUser} repos={mockRepos} commits={mockCommits} />);

        expect(screen.getByText(mockUser.login)).toBeInTheDocument();
        expect(screen.getByText(mockUser.bio)).toBeInTheDocument();
        expect(screen.getByText(/repositories/i)).toBeInTheDocument();
        expect(screen.getByText(mockRepos[0].name)).toBeInTheDocument();
        expect(screen.getByText(`${mockCommits.repo1[0].commit.message} - ${new Date(mockCommits.repo1[0].commit.author.date).toLocaleDateString()}`)).toBeInTheDocument();
    });
});