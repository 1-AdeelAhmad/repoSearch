import { ApolloError } from '@apollo/client';
import { ReactNode } from 'react';
import { RepoItem } from './api';

export type BlockProps = {
    children: ReactNode;
    col?: boolean;
};

export type ButtonComponentProps = {
    buttonAction: () => void;
    label: string;
    disabled?: boolean;
};

export type RepoContainerProps = {
    isError: ApolloError | undefined;
    isLoading: boolean;
    data: RepoItem[];
};

export type LayoutProps = {
    children: ReactNode;
};

export type SearchComponentProps = {
    handleSearchQuery: (query: string) => void;
};
