// interface (typing)

export interface Program {
    title: string;
    description: string;
    cover: string;
    episodes: Episode[];
    id: number | null;
}

export interface coverImage {
    medium: string;
    original: string;
}

export interface Episode {
    idx: number;
    name: string;
    summary: string;
    programId: number;
    number: number;
    season: number;
    image: coverImage;
    id: number;
}

export interface ProgramState extends Program{
    episode: Episode | null,
    loading: boolean;
}