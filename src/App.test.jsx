import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  return render(ui, {
    wrapper: ({ children }) => <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>,
  });
};

test('renders counter button', () => {
  renderWithRouter(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  expect(buttonElement).toBeInTheDocument();
});

test('count increases on button click', () => {
  renderWithRouter(<App />);
  const buttonElement = screen.getByText(/count is 0/i);
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/count is 1/i);
});

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders vite docs link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/vite docs/i);
  expect(linkElement).toBeInTheDocument();
});
