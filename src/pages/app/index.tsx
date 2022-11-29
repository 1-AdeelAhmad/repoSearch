import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Layout from './ui/blocks/Layout';
import RepoContainer from './ui/blocks/RepoContainer';
import { RepoItem } from './common/types/api';
import Block from './ui/blocks/Block';
import { GET_REPO_QUERY } from './common/api/repo';
import { sortRepoResponseData } from './common/helpers/helperFunctions';
import SearchComponent from './ui/blocks/component/SearchComponent';

const App = () => {
    const [getSearchQuery, setSearchQuery] = useState<string>('is:public');
    const { loading, error, data } = useQuery(GET_REPO_QUERY, {
        variables: { searchQuery: getSearchQuery },
    });
    const [repoData, setRepoData] = useState<RepoItem[]>([]);

    const handleSearchQuery = (searchQuery: string) => {
        setSearchQuery(searchQuery);
    };

    useEffect(() => {
        if (data) {
            setRepoData(sortRepoResponseData(data));
        }
    }, [data, getSearchQuery]);

    return (
        <div data-testid='appContainer'>
            <Layout>
                <Block>
                    <SearchComponent handleSearchQuery={handleSearchQuery} />
                </Block>
                <RepoContainer isLoading={loading} isError={error} data={repoData} />
            </Layout>
        </div>
    );
};

export default App;
