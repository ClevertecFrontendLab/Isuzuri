import { Box, Flex } from '@chakra-ui/react';

import SidebarCategories from './SidebarCategories';
import SidebarExitButton from './SidebarExitButton';

const Sidebar = () => (
    <Flex
        direction='column'
        justifyContent='space-between'
        height='1040px'
        width='256px'
        margin='1.5rem 0 2rem 0'
    >
        <SidebarCategories />
        <Flex direction='column' gap='1rem' margin='0 1.5rem'>
            <Box color='var(--gray)'>Версия программы 03.25</Box>
            <Box color='var(--gray-dark)'>
                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
            </Box>
            <Box>
                <SidebarExitButton />
            </Box>
        </Flex>
    </Flex>
);

export default Sidebar;
