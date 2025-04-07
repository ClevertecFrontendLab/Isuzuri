import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const MobileMenuItem = ({
    icon,
    title,
    isLast,
    isActive,
}: {
    icon: string;
    title: string;
    isLast?: boolean;
    isActive?: boolean;
}) => (
    <Flex
        direction='column'
        alignItems='center'
        justifyContent='center'
        flex={1}
        cursor='pointer'
        p='10px 0px'
    >
        <Box
            position='relative'
            width='40px'
            height='40px'
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Box
                position='absolute'
                width='80px'
                height='80px'
                background={
                    isActive
                        ? 'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
                        : ''
                }
                left='50%'
                top='50%'
                transform='translate(-50%, -50%)'
                pointerEvents='none'
                zIndex={0}
            />
            <Button
                variant='unstyled'
                borderRadius='50px'
                padding='0px'
                width='40px'
                height='40px'
                bgColor={isActive ? 'blackAlpha.900' : 'lime.50'}
                position='relative'
                zIndex={1}
                display='flex'
                alignItems='center'
                justifyContent='center'
                paddingInlineStart='0px'
                paddingInlineEnd='0px'
            >
                <Image
                    src={icon}
                    w={isLast ? '40px' : '24px'}
                    h={isLast ? '40px' : '24px'}
                    filter={isActive ? 'invert(1)' : ''}
                    transform={isActive ? 'scale(0.67)' : 'scale(1)'}
                />
            </Button>
        </Box>
        <Box>
            <Text
                fontSize='12px'
                fontWeight={isActive ? '500' : '400'}
                marginTop='4px'
                color={isActive ? 'black' : 'blackAlpha.700'}
                lineHeight='133%'
            >
                {title}
            </Text>
        </Box>
    </Flex>
    // <Stack
    //     position='relative'
    //     direction='column'
    //     flex={1}
    //     alignItems='center'
    //     p='10px 0'
    //     cursor='pointer'
    // >
    //     <Flex
    //         w='40px'
    //         h='40px'
    //         justifyContent='center'
    //         alignItems='center'
    //         borderRadius='50%'
    //         bgColor={isActive ? 'blackAlpha.900' : 'lime.50'}

    //     >
    //         <Image
    //             src={icon}
    //             w={isLast ? '40px' : '24px'}
    //             h={isLast ? '40px' : '24px'}
    //             filter={isActive ? 'invert(1)' : ''}
    //             transform={isActive ? 'scale(0.67)' : 'scale(1)'}
    //         />
    //     </Flex>
    //     <Text
    //         fontSize='12px'
    //         fontWeight={isActive ? '500' : '400'}
    //         color={isActive ? 'black' : 'blackAlpha.700'}
    //         lineHeight='133%'
    //     >
    //         {title}
    //     </Text>
    // </Stack>
);

export default MobileMenuItem;
