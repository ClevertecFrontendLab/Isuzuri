import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import React from 'react';

import writeIcon from '../../assets/icons/write.svg';

const FloatButton = () => (
    <Flex direction='column' alignItems='center' justifyContent='center'>
        <Box position='relative' width='48px' height='48px'>
            <Box
                position='absolute'
                width='96px'
                height='96px'
                background='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
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
                width='48px'
                height='48px'
                bgColor='black'
                position='relative'
                zIndex={1}
            >
                <Image src={writeIcon} w='24px' h='24px' filter='invert(1)' />
            </Button>
        </Box>
        <Box>
            <Text
                fontWeight='400'
                fontSize='12px'
                lineHeight='133%'
                marginTop='12px'
                color='blackAlpha.700'
            >
                Записать рецепт
            </Text>
        </Box>
    </Flex>
);

export default FloatButton;
