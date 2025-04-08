export type CardProps = {
    variant?:
        | 'withImageUp'
        | 'withImageLeft'
        | 'withoutImage'
        | 'withUser'
        | 'withText'
        | 'withTextAndTag';
    coverImage?: string;
    title?: string;
    description?: string;
    badge?: { icon: string; text: string };
    statistics?: { icon: string; count: number }[];
    userRecommendation?: { avatar: string; name: string };
    actions?: boolean;
};
