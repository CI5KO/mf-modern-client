
    export type RemoteKeys = 'remote/Button' | 'remote/HomePage';
    type PackageType<T> = T extends 'remote/HomePage' ? typeof import('remote/HomePage') :T extends 'remote/Button' ? typeof import('remote/Button') :any;