import { Avatar, Flex, Text, useMediaQuery } from '@chakra-ui/react';

const mockUser = {
    avatar: 'ЕК',
    title: 'Екатерина Константинопольская',
    subtitle: 'Екатерина Константинопольская',
};

const CardAvatar = () => {
    const [isDesktop] = useMediaQuery('(min-width: 768px)');
    return (
        <Flex gap='12px' height={isDesktop ? '48px' : '40px'} alignItems='center'>
            <Avatar
                src={mockUser.avatar}
                w={isDesktop ? '48px' : '40px'}
                h={isDesktop ? '48px' : '40px'}
            />
            <Flex direction='column' justifyContent='center' width='100%' maxW='214px'>
                <Text
                    fontSize={isDesktop ? '18px' : '16px'}
                    overflow='hidden'
                    textOverflow='ellipsis'
                    whiteSpace='nowrap'
                    maxWidth='100%'
                >
                    {mockUser.title}
                </Text>
                <Text
                    fontSize={isDesktop ? '14px' : '12px'}
                    fontWeight='400'
                    color='gray.dark'
                    overflow='hidden'
                    textOverflow='ellipsis'
                    whiteSpace='nowrap'
                >
                    {mockUser.subtitle}
                </Text>
            </Flex>
        </Flex>
    );
};

export default CardAvatar;
