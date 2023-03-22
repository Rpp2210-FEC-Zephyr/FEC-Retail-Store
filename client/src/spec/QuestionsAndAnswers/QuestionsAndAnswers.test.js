import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import QuestionsAndAnswers from '../../components/QuestionsAndAnswers';

test('renders QuestionsAndAnswers component title', () => {
  const mockMain = {id: 71697}
  const { getByText } = render(<QuestionsAndAnswers main={mockMain} />);
  const titleElement = getByText(/Questions & Answers/i);
  expect(titleElement).toBeInTheDocument();
});
