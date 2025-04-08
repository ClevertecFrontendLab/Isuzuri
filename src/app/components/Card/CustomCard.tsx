import { Card } from '@chakra-ui/react';

import BookmarkIcon from '../../assets/icons/bookmark.svg';
import SmileIcon from '../../assets/icons/smile.svg';
import viewImage from '../../assets/images/view.png';
import WithImageLeft from './CardVariants/WithImageLeft';
import WithImageUp from './CardVariants/WithImageUp';
import WithoutImage from './CardVariants/WithoutImage';
import WithText from './CardVariants/WithText';
import WithTextAndTag from './CardVariants/WithTextAndTag';
import WithUser from './CardVariants/WithUser';
import { CardProps } from './types';

const mockCardFooterData = [
    {
        icon: BookmarkIcon,
        count: 15,
    },
    {
        icon: SmileIcon,
        count: 5,
    },
];

const CustomCard = ({
    variant = 'withTextAndTag',
    coverImage = viewImage,
    title = 'Солянка с грибами и баклажанами',
    description = 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    badge,
    statistics = mockCardFooterData,
    // userRecommendation ,
}: CardProps) => {
    const getCardComponent = (variant: string) => {
        switch (variant) {
            case 'withImageUp':
                return (
                    <WithImageUp
                        coverImage={coverImage}
                        title={title}
                        description={description}
                        statistics={statistics}
                        badge={badge}
                    />
                );

            case 'withImageLeft':
                return (
                    <WithImageLeft
                        coverImage={coverImage}
                        title={title}
                        description={description}
                        statistics={statistics}
                    />
                );

            case 'withUser':
                return <WithUser description={description} statistics={statistics} />;

            case 'withoutImage':
                return (
                    <WithoutImage title={title} description={description} statistics={statistics} />
                );

            case 'withText':
                return <WithText title={title} description={description} />;

            case 'withTextAndTag':
                return (
                    <WithTextAndTag
                        title={title}
                        description={description}
                        statistics={statistics}
                    />
                );
        }
    };

    return (
        <Card
            variant={variant}
            direction={variant === 'withImageLeft' ? 'row' : 'column'}
            borderColor='blackAlpha.150'
        >
            {getCardComponent(variant)}
        </Card>
    );
};

export default CustomCard;
