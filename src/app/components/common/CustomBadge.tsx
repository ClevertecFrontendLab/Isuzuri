import { Badge, Image, Text } from '@chakra-ui/react';

const CustomBadge = ({
    icon,
    text,
    isInCard = false,
}: {
    icon: string;
    text: string;
    isInCard?: boolean;
}) => (
    <Badge variant='lime' position={isInCard ? 'absolute' : 'static'}>
        <Image src={icon} w='16px' />
        <Text fontSize='14px' fontWeight='400' lineHeight='20px'>
            {text}
        </Text>
    </Badge>
);

export default CustomBadge;
