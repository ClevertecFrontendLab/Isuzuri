import { Flex, useMediaQuery } from '@chakra-ui/react';

import Breadcrumbs from '../common/Breadcrumbs';
import ProfileStat from '../common/ProfileStat';
import Burger from './Burger';
import Logo from './Logo';
import UserProfile from './UserProfile';

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
                    <ProfileStat />
                    <Burger />
                </Flex>
            )}
        </Flex>
    );
};

export default Header;
