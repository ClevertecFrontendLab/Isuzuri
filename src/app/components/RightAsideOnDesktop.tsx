import { Box } from '@chakra-ui/react';

import BookmarkIcon from '~/app/assets/icons/bookmark.svg';
import PeoplesIcon from '~/app/assets/icons/peoples.svg';
import SmileIcon from '~/app/assets/icons/smile.svg';
import FloatButton from '~/app/components/common/FloatButton';
import Statistics from '~/app/components/common/Statistics';

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

const RightAsideOnDesktop = () => (
    <Box
        as='aside'
        minW='280px'
        maxW='280px'
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
);

export default RightAsideOnDesktop;
