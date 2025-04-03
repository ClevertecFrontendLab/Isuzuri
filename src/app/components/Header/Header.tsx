import { Flex, useMediaQuery } from '@chakra-ui/react';

import ProfileStat from '../common/ProfileStat';
import Breadcrumbs from './Breadcrumbs';
import Burger from './Burger';
import Logo from './Logo';
import UserProfile from './UserProfile';

const Header = () => {
    const [isDesktop] = useMediaQuery('(min-width: 768px)');

    return (
        <Flex
            height='80px'
            bgColor='lime.yellow'
            alignItems='center'
            justifyContent='space-between'
            p='16px'
        >
            <Flex gap='128px' alignItems='center'>
                <Logo />
                {isDesktop && <Breadcrumbs />}
            </Flex>
            {isDesktop ? (
                <UserProfile />
            ) : (
                <Flex>
                    <ProfileStat />
                    <Burger />
                </Flex>
            )}
        </Flex>
    );
};

export default Header;
