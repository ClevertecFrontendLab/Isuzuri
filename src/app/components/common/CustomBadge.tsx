import { Badge, Image, Text } from '@chakra-ui/react';

import PotIcon from '../../assets/icons/pot.svg';

const mockBadge = {
    variant: 'lime',
    icon: PotIcon,
    text: 'Первые блюда',
};

const CustomBadge = () => (
    <Badge variant={mockBadge.variant}>
        <Image src={mockBadge.icon} w='16px' />
        <Text fontSize='14px' fontWeight='400' lineHeight='20px'>
            {mockBadge.text}
        </Text>
    </Badge>
);

export default CustomBadge;
