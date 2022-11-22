import { gql } from '@apollo/client';
import { BATCH_QTY } from '../helpers/conts';

export const GET_REPO_QUERY = gql`
    query ($searchQuery: String!) {
        search(query: $searchQuery, type: REPOSITORY, first: ${BATCH_QTY}) {
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        forkCount
                        url
                        stargazerCount
                    }
                }
                cursor
            }
        }
    }
`;
