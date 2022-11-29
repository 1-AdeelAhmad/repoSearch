import { RepoResponse } from '../types/api';

export const sortRepoResponseData = (data: RepoResponse) => {
    const { search } = data;
    return search.edges.map(({ node }) => node);
};
