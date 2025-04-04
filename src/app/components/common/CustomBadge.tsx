import { Badge, Image, Text } from '@chakra-ui/react';

import PotIcon from '../../assets/icons/pot.svg';

const mockBadge = {
    variant: 'lime',
    icon: PotIcon,
    text: 'Первые блюда',
};

const CustomBadge = ({
    isInCard = false,
    placement = 'top-left',
}: {
    isInCard?: boolean;
    placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) => (
    <Badge
        variant={mockBadge.variant}
        position={isInCard ? 'absolute' : 'static'}
        top={
            placement === 'top-left'
                ? '20px'
                : placement === 'top-right'
                  ? '20px'
                  : placement === 'bottom-left'
                    ? 'auto'
                    : 'auto'
        }
        left={
            placement === 'top-left'
                ? '24px'
                : placement === 'top-right'
                  ? 'auto'
                  : placement === 'bottom-left'
                    ? '24px'
                    : 'auto'
        }
        bottom={
            placement === 'bottom-left' ? '20px' : placement === 'bottom-right' ? '20px' : 'auto'
        }
        right={placement === 'bottom-right' ? '24px' : 'auto'}
    >
        <Image src={mockBadge.icon} w='16px' />
        <Text fontSize='14px' fontWeight='400' lineHeight='20px'>
            {mockBadge.text}
        </Text>
    </Badge>
);

export default CustomBadge;
