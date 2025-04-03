import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';

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
const ProfileStat = () => {
    const [isDesktop] = useMediaQuery('(min-width: 768px)');

    return (
        <Flex
            alignItems='center'
            justifyItems='center'
            direction={isDesktop ? 'column' : 'row'}
            gap={isDesktop ? '24px' : '0px'}
        >
            {mockProfileStat.map((item) => (
                <Flex
                    key={item.icon}
                    p='4px 8px'
                    gap='6px'
                    alignItems='center'
                    justifyItems='center'
                >
                    <Image src={item.icon} />
                    <Text color='lime.dark' fontSize='12px'>
                        {item.count}
                    </Text>
                </Flex>
            ))}
        </Flex>
    );
};

export default ProfileStat;
