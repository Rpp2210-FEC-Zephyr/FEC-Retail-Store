import React from 'react';
import { render, screen } from '@testing-library/react';
import RatingsAndReviews from './components/RatingsAndReviews';
import '@testing-library/jest-dom/extend-expect';

test('renders a heading with text "Rating And Reviews!"', () => {
  const dummyObj = { 
    slice: (start, end) => { return [] }
  };

  render(<RatingsAndReviews currentProduct={dummyObj} count={0} />);
  const words = screen.getByText(/Rating And Reviews!/i);
  expect(words).toBeInTheDocument();
});