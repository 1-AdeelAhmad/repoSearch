import { render, screen } from '@testing-library/react';
import Block from '../Block';

describe('Block Component', () => {
    it('Renders Input Component With No Errors', () => {
        render(
            <Block col={false}>
                <div>Test</div>
            </Block>
        );
        const component = screen.getByTestId('blockComponent');
        expect(component).toBeInTheDocument();
    });

    it('Renders Correct ClassName If Column', () => {
        render(
            <Block col={true}>
                <div>Test</div>
            </Block>
        );
        const component = screen.getByTestId('blockContainer');
        expect(component).toHaveClass('flex-col items-center');
    });
});
