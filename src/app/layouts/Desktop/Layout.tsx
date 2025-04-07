import { Box, useMediaQuery } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import BookmarkIcon from '~/app/assets/icons/bookmark.svg';
import PeoplesIcon from '~/app/assets/icons/peoples.svg';
import SmileIcon from '~/app/assets/icons/smile.svg';
import FloatButton from '~/app/components/common/FloatButton';
import Statistics from '~/app/components/common/Statistics';
import Header from '~/app/components/Header/Header';
import MobileMenu from '~/app/components/MobileMenu/MobileMenu';
import Sidebar from '~/app/components/Sidebar/Sidebar';
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

const DesktopLayout = () => {
    const [isDesktop] = useMediaQuery('(min-width: 768px)');

    return (
        <Stack direction='column' height='100vh' gap='0px'>
            <Header />
            <Stack direction='row' height={isDesktop ? 'calc(100vh - 80px)' : 'calc(100vh - 64px)'}>
                {isDesktop && <Sidebar />}
                <Box as='main' flex='1' marginLeft='24px'>
                    <Outlet />
                </Box>
                {isDesktop && (
                    <Box
                        as='aside'
                        w='280px'
                        h='100%'
                        position='relative'
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                    >
                        <Box w='208px' h='200px' marginLeft='auto' p='16px 56px'>
                            <Statistics data={mockProfileStat} />
                        </Box>
                        <FloatButton />
                    </Box>
                )}
                {!isDesktop && <MobileMenu />}
            </Stack>
        </Stack>
    );
};

export default DesktopLayout;
