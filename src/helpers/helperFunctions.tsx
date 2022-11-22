import { ApiNode, RepoResponse } from '../types/api';

export const formatRowTitle = (label: string) => {
    return (
        <th
            scope='col'
            className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize sticky z-10 top-0 bg-gray-200'
            key={label}
        >
            {label}
        </th>
    );
};

export const sortRepoResponseData = (data: RepoResponse) => {
    const { search } = data;
    return search.edges.map(({ node }: ApiNode) => node);
};
