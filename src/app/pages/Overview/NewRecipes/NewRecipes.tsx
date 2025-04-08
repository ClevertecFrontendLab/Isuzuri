import { Flex, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { useRef } from 'react';

import CustomCard from '~/app/components/Card/CustomCard';

import BookMarkIcon from '../../../assets/icons/bookmark.svg';
import BreadIcon from '../../../assets/icons/bread_and_rolling_pin.svg';
import LeafIcon from '../../../assets/icons/leafs.svg';
import PotIcon from '../../../assets/icons/pot.svg';
import SmileIcon from '../../../assets/icons/smile.svg';
import Cutlets from '../../../assets/images/cutlets.png';
import Pancakes from '../../../assets/images/pancakes.png';
import Solyanka from '../../../assets/images/solyanka.png';
import ScrollButton from './ScrollButton';

const mockCardData = [
    {
        coverImage: Solyanka,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: {
            icon: PotIcon,
            text: 'Первые блюда',
        },
        statistics: [
            {
                icon: BookMarkIcon,
                count: 1,
            },
        ],
    },
    {
        coverImage: Cutlets,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд. ',
        badge: {
            icon: LeafIcon,
            text: 'Веганские блюда',
        },
        statistics: [
            {
                icon: BookMarkIcon,
                count: 2,
            },
            {
                icon: SmileIcon,
                count: 1,
            },
        ],
    },
    {
        coverImage: Pancakes,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак. ',
        badge: {
            icon: BreadIcon,
            text: 'Десерты, выпечка',
        },
        statistics: [
            {
                icon: SmileIcon,
                count: 1,
            },
        ],
    },
    {
        coverImage: Solyanka,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badge: {
            icon: PotIcon,
            text: 'Первые блюда',
        },
        statistics: [
            {
                icon: BookMarkIcon,
                count: 1,
            },
        ],
    },
    {
        coverImage: Cutlets,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд. ',
        badge: {
            icon: LeafIcon,
            text: 'Веганские блюда',
        },
        statistics: [
            {
                icon: BookMarkIcon,
                count: 2,
            },
            {
                icon: SmileIcon,
                count: 1,
            },
        ],
    },
    {
        coverImage: Pancakes,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак. ',
        badge: {
            icon: BreadIcon,
            text: 'Десерты, выпечка',
        },
        statistics: [
            {
                icon: SmileIcon,
                count: 1,
            },
        ],
    },
];

const NewRecipes = () => {
    const [isDesktop] = useMediaQuery('(min-width: 1440px)');
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Stack gap={isDesktop ? '24px' : '12px'} position='relative'>
            <Text fontSize='48px' lineHeight='100%'>
                Новые рецепты
            </Text>
            <Flex position='relative'>
                {isDesktop && <ScrollButton direction='left' onClick={() => scroll('left')} />}
                <Flex
                    gap={isDesktop ? '24px' : '12px'}
                    overflowX='scroll'
                    ref={containerRef}
                    sx={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                    }}
                >
                    {mockCardData.map((item) => (
                        <CustomCard variant='withImageLeft' {...item} />
                    ))}
                </Flex>
                {isDesktop && <ScrollButton direction='right' onClick={() => scroll('right')} />}
            </Flex>
        </Stack>
    );
};

export default NewRecipes;
