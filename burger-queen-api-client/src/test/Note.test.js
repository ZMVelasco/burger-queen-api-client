import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Note from './Note';

test('renders content' , () => {
    const note = {
        content: 'this is a test',
        important: true
    }

    const component = render(<Note note={note} />)

    // component.getByText('this is a test')
    // component.getByText('make not important')
    expect(component.container).toHaveTextContent('this is a test')
})







// import Login from '../routes/login';

// test('renders greeting correctly', () => {
//   const { getByText } = render(<Login />);
//   const greetingElement = getByText('Burger Queen');
//   expect(greetingElement).toBeInTheDocument();
// });