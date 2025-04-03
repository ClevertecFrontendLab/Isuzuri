import { Box, Flex, Text } from '@chakra-ui/react';

import SidebarCategories from './SidebarCategories';
import SidebarExitButton from './SidebarExitButton';

const Sidebar = () => (
    <Flex
        as='aside'
        direction='column'
        justifyContent='space-between'
        h='calc(100vh - 80px)'
        w='256px'
        p='24px 0 32px 0'
    >
        <SidebarCategories />
        <Flex direction='column' gap='16px' m='0 24px'>
            <Box color='gray.light'>Версия программы 03.25</Box>
            <Box color='gray.dark'>
                <Text>Все права защищены, ученический файл, ©Клевер Технолоджи, 2025</Text>
            </Box>
            <Box>
                <SidebarExitButton />
            </Box>
        </Flex>
    </Flex>
);

export default Sidebar;
