import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsContainer from './NewsContainer';

describe('NewsContainer file', () => {
  it('displays a list of articles', async () => {
    render(<NewsContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();
  });
});
