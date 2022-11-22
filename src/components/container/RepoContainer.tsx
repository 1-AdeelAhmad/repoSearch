import React from 'react';
import { tableRowTitle } from '../../helpers/conts';
import { formatRowTitle } from '../../helpers/helperFunctions';
import { RepoContainerProps } from '../../types/components';
import ErrorComponent from '../common/ErrorComponent';
import LoadingComponent from '../common/LoadingComponent';

const RepoContainer = ({ isError, isLoading, data }: RepoContainerProps) => {
    if (isLoading) return <LoadingComponent />;
    if (isError) {
        return <ErrorComponent error='unable to retrieve repos' />;
    }

    return (
        <div
            data-testid='repoContainerComponent'
            className='w-4/5 md:w-2/3 overflow-y-auto border-2 border-gray-300 rounded-2xl drop-shadow-md'
        >
            <table className='min-w-full divide-y divide-gray-100'>
                <thead className='bg-gray-5 drop-shadow-md z-10'>
                    <tr>{tableRowTitle.map((title) => formatRowTitle(title.name))}</tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                    {data.map((repo, index) => (
                        <tr key={repo.id}>
                            <td className='whitespace-nowrap py-4 text-sm font-medium text-gray-900 px-3'>
                                <a
                                    className='text-indigo-600 hover:text-indigo-900 capitalize'
                                    href={repo.url}
                                    target='_new'
                                >
                                    {repo.name}
                                </a>
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left'>
                                🌟 {repo.stargazerCount}
                            </td>
                            <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left'>
                                🍴 {repo.forkCount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* // I would have added pagination here, and then make subsequent calls to grab the cursor from the graphQL api response to grab the next/previous data */}
            {/* // Two Buttons, One for next batch and another to render the previous batch */}
            {/* A separate button component for each dispatch would have been added and used here */}
        </div>
    );
};

export default RepoContainer;
