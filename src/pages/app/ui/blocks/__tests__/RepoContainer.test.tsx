import { render, screen } from '@testing-library/react';
import { dataItem } from '../../../../../mocks/mockdata';
import RepoContainer from '../RepoContainer';

describe('Repo Container Component', () => {
    it('Renders Input Component With No Errors', () => {
        render(<RepoContainer data={dataItem} isError={undefined} isLoading={false} />);
        const component = screen.getByTestId('repoContainerComponent');
        expect(component).toBeInTheDocument();
    });
});
