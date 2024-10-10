import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Search from '../actualComponents/Search';

describe('Search component', () => {
    it('matches snapshot', () => {
      const { asFragment } = render(
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });