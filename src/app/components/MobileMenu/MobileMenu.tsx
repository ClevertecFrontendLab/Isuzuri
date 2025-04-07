import { Flex } from '@chakra-ui/react';

import HomeIcon from '../../assets/icons/home.svg';
import SearchIcon from '../../assets/icons/search.svg';
import WriteIcon from '../../assets/icons/write.svg';
import AvatarImage from '../../assets/images/avatar.png';
import MobileMenuItem from './MobileMenuItem';

const MobileMenu = () => (
    <Flex
        position='fixed'
        bottom='0'
        left='0'
        right='0'
        alignItems='center'
        justifyContent='space-around'
        boxShadow='0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        background='lime.50'
        height='84px'
    >
        <MobileMenuItem icon={HomeIcon} title='Главная' isActive />
        <MobileMenuItem icon={SearchIcon} title='Поиск' />
        <MobileMenuItem icon={WriteIcon} title='Записать' />
        <MobileMenuItem icon={AvatarImage} title='Мой профиль' isLast />
    </Flex>
);

export default MobileMenu;
