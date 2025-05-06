
    export type RemoteKeys = 'Components/Atoms' | 'Components/Molecules' | 'Components/Organisms';
    type PackageType<T> = T extends 'Components/Organisms' ? typeof import('Components/Organisms') :T extends 'Components/Molecules' ? typeof import('Components/Molecules') :T extends 'Components/Atoms' ? typeof import('Components/Atoms') :any;