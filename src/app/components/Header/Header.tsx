import { Flex, useMediaQuery } from '@chakra-ui/react';

import BookmarkIcon from '../../assets/icons/bookmark.svg';
import PeoplesIcon from '../../assets/icons/peoples.svg';
import SmileIcon from '../../assets/icons/smile.svg';
import Breadcrumbs from '../common/Breadcrumbs';
import Statistics from '../common/Statistics';
import Burger from './Burger';
import Logo from './Logo';
import UserProfile from './UserProfile';

const mockProfileStat = [
    {
        icon: BookmarkIcon,
        count: 185,
    },
    {
        icon: PeoplesIcon,
        count: 589,
    },
    {
        icon: SmileIcon,
        count: 587,
    },
];

const Header = () => {
    const [isDesktop] = useMediaQuery('(min-width: 768px)');

    return (
        <Flex
            height={isDesktop ? '80px' : '64px'}
            bgColor='lime.yellow'
            alignItems='center'
            justifyContent='space-between'
            p={isDesktop ? '16px' : '8px 20px'}
        >
            <Flex gap='128px' alignItems='center'>
                <Logo />
                {isDesktop && <Breadcrumbs />}
            </Flex>
            {isDesktop ? (
                <UserProfile />
            ) : (
                <Flex>
                    <Statistics data={mockProfileStat} isInHeader={true} />
                    <Burger />
                </Flex>
            )}
        </Flex>
    );
};

export default Header;
