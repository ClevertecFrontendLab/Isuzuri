import { Button, Image } from '@chakra-ui/react';

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
        left={direction === 'left' ? '-8px' : 'auto'}
        right={direction === 'right' ? '-8px' : 'auto'}
        top='30%'
        zIndex='1'
        onClick={onClick}
        _hover={{ bgColor: 'blackAlpha.500' }}
    >
        <Image
            src={ArrowRightIcon}
            w='24px'
            h='24px'
            transform={direction === 'left' ? 'rotate(180deg)' : ''}
        />
    </Button>
);

export default ScrollButton;
