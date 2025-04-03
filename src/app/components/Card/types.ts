export type CardProps = {
    coverImage?: string;
    title?: string;
    description?: string;
    badge?: string;
    statistics?: { icon: string; count: number }[];
    userRecomendation?: boolean;
    actions?: boolean;
};
