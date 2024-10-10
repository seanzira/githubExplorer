import { expect } from 'chai';
import axios from 'axios';
import sinon from 'sinon';
import { fetchUser } from '../services/githubService.js';

describe('GitHub User Fetching', () => {
    let axiosGetStub;

    // Set up the stub before each test
    beforeEach(() => {
        axiosGetStub = sinon.stub(axios, 'get');
    });

    // Restore the stub after each test
    afterEach(() => {
        axiosGetStub.restore();
    });

    // Test fetching user data for a valid username
    it('should fetch user data for a valid username', async () => {
        const username = 'seanzira';
        const expectedResponse = { 
            login: 'seanzira', 
            id: 162341287, 
            avatar_url: 'https://avatars.githubusercontent.com/u/162341287?v=4',
        };

        // Configuring the stub to return a resolved promise with the expected response
        axiosGetStub.withArgs(`https://api.github.com/users/${username}`).returns(Promise.resolve({ data: expectedResponse }));

        // Making sure that the returned user data matches the expected response
        const userData = await fetchUser(username);
        expect(userData.login).to.equal(expectedResponse.login);
        expect(userData.id).to.equal(expectedResponse.id);
        expect(userData.avatar_url).to.equal(expectedResponse.avatar_url);
    });

});
