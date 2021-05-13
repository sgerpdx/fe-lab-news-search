import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsContainer from './NewsContainer';

describe('NewsContainer file', () => {
  it('displays the correct thing', async () => {
    render(<NewsContainer />);

    screen.getByText('Loading...');
  });
});
