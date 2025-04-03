import { Card, CardBody, CardFooter, CardHeader, Heading, Image, Text } from '@chakra-ui/react';

import BookmarkIcon from '../../assets/icons/bookmark.svg';
import SmileIcon from '../../assets/icons/smile.svg';
import viewImage from '../../assets/images/view.png';
import CustomBadge from '../common/CustomBadge';
import Statistics from '../common/Statistics';
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
    coverImage = viewImage,
    title = 'Солянка с грибами',
    description = 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    // badge,
    statistics = mockCardFooterData,
    // userRecomendation,
    // actions,
}: CardProps) => (
    <Card variant='withImage' h='414px'>
        <CardHeader>
            <Image src={coverImage} w='100%' />
        </CardHeader>
        <CardBody>
            <Heading fontSize='20px' lineHeight='28px'>
                {title}
            </Heading>
            <Text marginTop='8px' fontSize='14px' lineHeight='20px' fontWeight='400'>
                {description}
            </Text>
        </CardBody>
        <CardFooter>
            <CustomBadge />
            <Statistics data={statistics} />
        </CardFooter>
    </Card>
);

export default CustomCard;
