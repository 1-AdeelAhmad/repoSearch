import { ApolloError } from '@apollo/client';
import { ReactNode } from 'react';
import { RepoItem } from './api';

export type ButtonComponentProps = {
    buttonAction: () => void;
    label: string;
    disabled?: boolean;
};

export type InputComponentProps = {
    label: string;
    handleSearchQuery: (searchQuery: string) => void;
};

export type RepoContainerProps = {
    isError: ApolloError | undefined;
    isLoading: boolean;
    data: RepoItem[];
};

export type ErrorComponentProps = {
    error: string;
};

export type LayoutProps = {
    children: ReactNode;
};
