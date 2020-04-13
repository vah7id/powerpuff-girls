// interface (typing)

export interface coverImage {
    medium: string | null;
    original: string | null;
}

export interface Program {
    name: string;
    summary: string;
    image?: coverImage;
    episodes?: Episode[];
    id: string | null;
}

export interface Episode {
    idx: number;
    name: string;
    summary: string;
    programId: number;
    number: number;
    season: number;
    image?: coverImage;
    id: number;
}

export interface ProgramState extends Program{
    episode: Episode | null,
    loading: boolean;
}
