export interface Gallery {
    id: number;
    title: string;
    imageUrl: string | null;
    category: string;
    featured: boolean;
    youTubeLink: string | null;
}