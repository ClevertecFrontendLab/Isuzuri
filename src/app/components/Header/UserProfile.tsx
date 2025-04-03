import { Avatar, Flex, Text } from '@chakra-ui/react';

import avatar from '../../assets/images/avatar.png';

const mockUser = {
    avatar: avatar,
    name: 'Екатерина Константинопольская',
    tag: 'bake_and_pie',
};

const UserProfile = () => (
    <Flex gap='12px' w='432px' h='48px' alignItems='center'>
        <Avatar src={mockUser.avatar} width='48px' height='48px' />
        <Flex direction='column' justifyContent='center'>
            <Text>{mockUser.name}</Text>
            <Text color='gray.dark'>@{mockUser.tag}</Text>
        </Flex>
    </Flex>
);

export default UserProfile;
