import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Layout from './components/layout/Layout';
import RepoContainer from './components/container/RepoContainer';
import { RepoItem } from './types/api';
import Block from './components/layout/Block';
import InputComponent from './components/common/InputComponent';
import { GET_REPO_QUERY } from './api/repo';
import { sortRepoResponseData } from './helpers/helperFunctions';

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
                    <div className='w-1/2 px-5 md:px-20'>
                        <InputComponent label='repo search' handleSearchQuery={handleSearchQuery} />
                    </div>
                </Block>
                <RepoContainer isLoading={loading} isError={error} data={repoData} />
            </Layout>
        </div>
    );
};

export default App;
