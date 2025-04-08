import { Box, useMediaQuery } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Header from '../components/Header/Header';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import RightAsideOnDesktop from '../components/RightAsideOnDesktop';
import Sidebar from '../components/Sidebar/Sidebar';

const RootLayout = () => {
    const [isDesktop, isTablet] = useMediaQuery(['(min-width: 1440px)', '(min-width: 768px)']);

    return (
        <Stack direction='column' height='100vh' gap='0px' w='100%'>
            <Header />
            <Stack
                direction='row'
                height={isDesktop || isTablet ? 'calc(100vh - 80px)' : 'calc(100vh - 64px)'}
                w='100%'
            >
                {isDesktop && <Sidebar />}
                <Box
                    as='main'
                    flex='1'
                    m={isDesktop ? '0px 0px 0px 24px' : '0px 20px'}
                    w='calc(100% - 256px - 280px - 48px)'
                >
                    <Outlet />
                </Box>
                {isDesktop && <RightAsideOnDesktop />}
                {!isDesktop && <MobileMenu />}
            </Stack>
        </Stack>
    );
};

export default RootLayout;
