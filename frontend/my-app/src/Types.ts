export type MediaType = "Book" | "TV_SHOW" | "MOVIE" | "VIDEO_GAME";

export interface Progress {
    progress?: number,
    completed: boolean
};

export interface Rating {
    rating: number
};

export interface Item {
    id: number,
    title: string,
    mediaType: MediaType,
    rating: Rating,
    review: string,
    progress: Progress
}