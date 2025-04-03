import { Badge, Image, Text } from '@chakra-ui/react';

const CustomBadge = ({ variant, icon, text }: { variant: string; icon: string; text: string }) => (
    <Badge variant={variant}>
        <Image src={icon} w='16px' />
        <Text fontSize='14px' fontWeight='400' lineHeight='20px'>
            {text}
        </Text>
    </Badge>
);

export default CustomBadge;
