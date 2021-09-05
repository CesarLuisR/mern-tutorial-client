export interface Video {
    title: string;
    description: string;
    url: string;
    _id?: string;
    createdAt?: string;
    updateAt?: string;
    loadVideos?: () => void
}
