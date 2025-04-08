import { Button, Image } from '@chakra-ui/react';
import React from 'react';

import ArrowRightIcon from '../../../assets/icons/arrow_right.svg';

const ScrollButton = ({
    direction,
    onClick,
}: {
    direction: 'left' | 'right';
    onClick: () => void;
}) => (
    <Button
        w='48px'
        h='48px'
        bgColor='black'
        position='absolute'
        left='-8px'
        top='30%'
        zIndex='1'
        onClick={onClick}
        _hover={{ bgColor: 'blackAlpha.500' }}
    >
        <Image
            src={ArrowRightIcon}
            w='24px'
            h='24px'
            transform={direction === 'right' ? 'rotate(180deg)' : ''}
        />
    </Button>
);

export default ScrollButton;
