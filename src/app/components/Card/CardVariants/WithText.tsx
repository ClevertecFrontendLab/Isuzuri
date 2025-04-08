import { CardBody, Heading, Text } from '@chakra-ui/react';

import { CardProps } from '../types';

const WithText = ({ title, description }: CardProps) => (
    <CardBody>
        <Heading fontSize='20px' lineHeight='28px'>
            {title}
        </Heading>
        <Text marginTop='12px' noOfLines={3}>
            {description}
        </Text>
    </CardBody>
);

export default WithText;
