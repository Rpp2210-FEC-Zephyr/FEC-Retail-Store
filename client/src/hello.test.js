
import { render } from '@testing-library/react';
import RatingsAndReviews from './components/RatingsAndReviews';

test('renders the title with "rating and review"', () => {
  const mockProps = {
    currentProduct: [{photos: ['2']}, {photos: ['1']}],
  };
  const { getByText } = render(<RatingsAndReviews {...mockProps} />);
  const titleElement = getByText(/rating and review/i);
  expect(titleElement).toBeInTheDocument();
});
