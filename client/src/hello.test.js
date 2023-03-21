import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProductOverview from './components/ProductOverview';

describe('ProductOverview component', () => {
  test('renders main product name', () => {
    const mainProduct = { id: 71697, name: 'Camo Onesie' };
    const Outfits = jest.fn();
    render(<ProductOverview main={mainProduct} Outfits={Outfits} />);
    expect(screen.getByText(/camo onesie/i)).toBeInTheDocument();
  });
  test('selects a style on click', async () => {
    const mainProduct = { id: 71697, name: 'Camo Onesie' };
    const Outfits = jest.fn();
    const mockData = {
      style_id: 444218,
      name: 'Camo Onesie',
      original_price: '140.00',
      photos: [{ url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}],
      skus: { 1: { size: 'S', quantity: 16 } },
    };
    const mockFetch = jest.fn().mockResolvedValueOnce({
          json: async () => ({ results: [mockData] }),
      });
      jest.spyOn(window, 'fetch').mockImplementationOnce(mockFetch);
    render(<ProductOverview main={mainProduct} Outfits={Outfits} />);
    fireEvent.click(screen.getByText(/camo onesie/i));
    await waitFor(() =>
      expect(screen.getByText(/price: 140.00/i)).toBeInTheDocument()
    );
    expect(screen.getByText(/size: s/i)).toBeInTheDocument();
    expect(screen.getByText(/quantity: 5/i)).toBeInTheDocument();
  });

  test('selects a size and quantity', async () => {
    const mainProduct = { id: 1, name: 'Awesome Product' };
    const Outfits = jest.fn();
    const mockData = {
      style_id: 1,
      name: 'Test Style',
      original_price: '100.00',
      photos: [{ url: 'http://testurl.com/test.jpg' }],
      skus: { 1: { size: 'S', quantity: 5 } },
    };
    const mockFetch = jest.fn().mockResolvedValueOnce({
      json: async () => ({ results: [mockData] }),
  });
  jest.spyOn(window, 'fetch').mockImplementationOnce(mockFetch);
    render(<ProductOverview main={mainProduct} Outfits={Outfits} />);
    fireEvent.click(screen.getByText(/test style/i));
    await waitFor(() =>
      expect(screen.getByText(/price: 100.00/i)).toBeInTheDocument()
    );
    fireEvent.click(screen.getByText(/size: s/i));
    fireEvent.click(screen.getByText(/m/i));
    expect(screen.getByText(/quantity: 5/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/quantity: 1/i));
    fireEvent.click(screen.getByText(/4/i));
    expect(screen.getByText(/quantity: 4/i)).toBeInTheDocument();
  });


});
