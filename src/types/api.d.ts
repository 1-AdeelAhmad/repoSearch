export type ApiNode = {
    node: RepoItem;
};

export type RepoItem = {
    forkCount: number;
    id: string;
    name: string;
    stargazerCount: number;
    url: string;
};

export type RepoResponse = {
    search: {
        edges: [];
    };
};
