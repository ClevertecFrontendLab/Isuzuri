import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Image,
    Stack,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';

import BookmarkIcon from '../../assets/icons/bookmark.svg';
import SmileIcon from '../../assets/icons/smile.svg';
import viewImage from '../../assets/images/view.png';
import CustomBadge from '../common/CustomBadge';
import Statistics from '../common/Statistics';
import CardAvatar from './CardAvatar';
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
    title = 'Солянка с грибами',
    description = 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    // badge,
    statistics = mockCardFooterData,
    // userRecommendation,
    // actions,
}: CardProps) => (
    <Card variant={variant} direction={variant === 'withImageLeft' ? 'row' : 'column'}>
        {variant === 'withImageUp' && (
            <CardWithImageUp
                coverImage={coverImage}
                title={title}
                description={description}
                statistics={statistics}
            />
        )}
        {variant === 'withImageLeft' && (
            <CardWithImageLeft
                coverImage={coverImage}
                title={title}
                description={description}
                statistics={statistics}
            />
        )}
        {variant === 'withUser' && (
            <CardWithUser description={description} statistics={statistics} />
        )}
        {variant === 'withoutImage' && (
            <CardWithoutImage title={title} description={description} statistics={statistics} />
        )}
        {variant === 'withText' && <CardWithText title={title} description={description} />}
        {variant === 'withTextAndTag' && (
            <CardWithTextAndTag title={title} description={description} statistics={statistics} />
        )}
    </Card>
);

export default CustomCard;

const CardWithImageUp = ({ coverImage, title, description, statistics }: CardProps) => (
    <>
        <CardHeader>
            <Image src={coverImage} w='100%' objectFit='cover' />
            <CustomBadge isInCard />
        </CardHeader>
        <CardBody>
            <Heading>{title}</Heading>
            <Text>{description}</Text>
        </CardBody>
        <CardFooter>
            <CustomBadge placement='top-left' />
            {statistics && <Statistics data={statistics} />}
        </CardFooter>
    </>
);

const CardWithImageLeft = ({ coverImage, title, description, statistics }: CardProps) => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Image src={coverImage} h='100%' objectFit='cover' />
            <CustomBadge placement='bottom-left' isInCard />
            <Stack>
                <CardHeader>
                    <CustomBadge />
                    {statistics && <Statistics data={statistics} />}
                </CardHeader>
                <CardBody>
                    <Heading>{title}</Heading>
                    {!isMobile && <Text noOfLines={3}>{description}</Text>}
                </CardBody>
                <CardFooter>
                    <Button variant='white'>5</Button>
                    <Button variant='black'>15</Button>
                </CardFooter>
            </Stack>
        </>
    );
};

const CardWithUser = ({ description, statistics }: CardProps) => (
    <>
        <CardHeader>
            <CardAvatar />
        </CardHeader>
        <CardBody>
            <Text noOfLines={3}>{description}</Text>
        </CardBody>
        <CardFooter>
            <Stack>
                <Button variant='black' size='24'>
                    Подписаться
                </Button>
                <Button variant='lime' size='24'>
                    Читать
                </Button>
            </Stack>
            {statistics && <Statistics data={statistics} />}
        </CardFooter>
    </>
);

const CardWithoutImage = ({ title, description, statistics }: CardProps) => (
    <>
        <CardHeader>
            <CustomBadge />
            {statistics && <Statistics data={statistics} />}
        </CardHeader>
        <CardBody>
            <Heading>{title}</Heading>
            <Text noOfLines={3}>{description}</Text>
        </CardBody>
        <CardFooter>
            <Button variant='white' size='32'>
                5
            </Button>
            <Button variant='black' size='32'>
                15
            </Button>
        </CardFooter>
    </>
);

const CardWithText = ({ title, description }: CardProps) => (
    <CardBody>
        <Heading fontSize='20px' lineHeight='28px'>
            {title}
        </Heading>
        <Text marginTop='12px' noOfLines={3}>
            {description}
        </Text>
    </CardBody>
);

const CardWithTextAndTag = ({ title, description, statistics }: CardProps) => (
    <>
        <CardBody>
            <Heading>{title}</Heading>
            <Text marginTop='12px' noOfLines={3}>
                {description}
            </Text>
        </CardBody>
        <CardFooter>
            <CustomBadge placement='top-left' />
            {statistics && <Statistics data={statistics} />}
        </CardFooter>
    </>
);
