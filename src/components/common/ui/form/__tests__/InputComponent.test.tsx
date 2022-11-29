import { render, screen, fireEvent } from '@testing-library/react';
import InputComponent from '../InputComponent';

describe('Input Component', () => {
    const handleSearchQuery = jest.fn();

    it('Renders Input Component With No Errors', () => {
        render(<InputComponent handleSearchQuery={handleSearchQuery} label='Test Label' />);
        const component = screen.getByTestId('inputComponent');
        expect(component).toBeInTheDocument();
    });

    it('Should Render Correct Input', () => {
        render(<InputComponent handleSearchQuery={handleSearchQuery} label='Test Label' />);
        const component = screen.getByTestId('searchInput');
        expect(component.value).toBe('');
        fireEvent.change(component, { target: { value: 'facebook' } });
        expect(component.value).toBe('facebook');
    });

    it('Should Handle Change Function', () => {
        render(<InputComponent handleSearchQuery={handleSearchQuery} label='Test Label' />);
        const component = screen.getByTestId('searchInput');
        fireEvent.change(component, { target: { value: 'facebook' } });
        expect(handleSearchQuery).toBeCalled();
    });
});
