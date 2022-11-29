import { GraphQLError } from 'graphql';
import { GET_REPO_QUERY } from '../pages/app/common/api/repo';

export const repoMock = [
    {
        request: {
            query: GET_REPO_QUERY,
            variables: {
                searchQuery: 'is:public',
            },
        },
        result: {
            data: {
                search: {
                    edges: [
                        {
                            node: {
                                forkCount: 1,
                                id: '100',
                                name: 'testRepo',
                                stargazerCount: 244,
                                url: 'testUrl',
                            },
                            // cursor: '12',
                        },
                    ],
                },
            },
        },
    },
];

export const repoMockError = [
    {
        request: {
            query: GET_REPO_QUERY,
            variables: {
                searchQuery: 'is:public',
            },
        },
        result: {
            errors: [new GraphQLError('Error!')],
        },
    },
];

export const dataItem = [
    {
        forkCount: 1,
        id: '100',
        name: 'testRepo',
        stargazerCount: 244,
        url: 'testUrl',
    },
];
