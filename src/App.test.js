import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import Footer from './components/Footer';

// Tests to check and validate Header Options in the Header Component
test('Home option(feature) is working correctly in the Header Component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('Our Projects option(feature) is working correctly in the Header Component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Our Projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('Events option(feature) is working correctly in the Header Component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Events/i);
  expect(linkElement).toBeInTheDocument();
});

test('Join TDS option(feature) is working correctly in the Header Component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Join TDS/i);
  expect(linkElement).toBeInTheDocument();
});

test('GitHub option(feature) is working correctly in the Header Component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});


// Testing Footer Components and Functionalities

test('Open Source option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Open Source/i);
  expect(linkElement).toBeInTheDocument();
});

test('Contributing option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Open Source/i);
  expect(linkElement).toBeInTheDocument();
});

test('Discord Server option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Discord Server/i);
  expect(linkElement).toBeInTheDocument();
});

test('Home option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('Our Projects option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Our Projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('Events option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Events/i);
  expect(linkElement).toBeInTheDocument();
});

test('Join The DesignSystems option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Join The DesignSystems/i);
  expect(linkElement).toBeInTheDocument();
});

test('GitHub option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/GitHub/i);
  expect(linkElement).toBeInTheDocument();
});

test('How to Contribute option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/How to Contribute/i);
  expect(linkElement).toBeInTheDocument();
});

test('Code of Conduct  option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Code of Conduct/i);
  expect(linkElement).toBeInTheDocument();
});

test('License option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/License/i);
  expect(linkElement).toBeInTheDocument();
});

test('Rules option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Rules/i);
  expect(linkElement).toBeInTheDocument();
});

test('Community Measures option(feature) is working correctly in the Footer Component', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Community Measures/i);
  expect(linkElement).toBeInTheDocument();
});
