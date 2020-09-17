import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';

import Navbar from '../components/nav/Navbar';

describe('Nav component tests', () => {
  test('Nav component displays correctly.', () => {
    const navComponent = render(<Navbar />);
    expect(navComponent.getByTestId('navbar-component')).toBeDefined();
    expect(navComponent.getByTestId('nav-title')).toHaveTextContent('Kidspace');
    expect(navComponent).toMatchSnapshot();
  });
});
