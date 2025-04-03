import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import BookmarkIcon from '../../assets/icons/bookmark.svg';
import PeoplesIcon from '../../assets/icons/peoples.svg';
import SmileIcon from '../../assets/icons/smile.svg';

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
const ProfileStat = () => (
    <Flex alignItems='center' justifyItems='center'>
        {mockProfileStat.map((item) => (
            <Flex key={item.icon} p='4px 8px' gap='6px' alignItems='center' justifyItems='center'>
                <Image src={item.icon} />
                <Text color='lime.dark' fontSize='12px'>
                    {item.count}
                </Text>
            </Flex>
        ))}
    </Flex>
);

export default ProfileStat;
