import { Badge, Image, Text } from '@chakra-ui/react';

import PotIcon from '../../assets/icons/pot.svg';

const mockBadge = {
    variant: 'lime',
    icon: PotIcon,
    text: 'Первые блюда',
};

const CustomBadge = ({ isInCard = false }: { isInCard?: boolean }) => (
    <Badge variant={mockBadge.variant} position={isInCard ? 'absolute' : 'static'}>
        <Image src={mockBadge.icon} w='16px' />
        <Text fontSize='14px' fontWeight='400' lineHeight='20px'>
            {mockBadge.text}
        </Text>
    </Badge>
);

export default CustomBadge;
