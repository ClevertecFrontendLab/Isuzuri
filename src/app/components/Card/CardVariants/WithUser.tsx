import { Button, CardBody, CardFooter, CardHeader, Stack, Text } from '@chakra-ui/react';

import Statistics from '../../common/Statistics';
import CardAvatar from '../CardAvatar';
import { CardProps } from '../types';

const WithUser = ({ description, statistics }: CardProps) => (
    <>
        <CardHeader>
            <CardAvatar />
        </CardHeader>
        <CardBody>
            <Text noOfLines={3}>{description}</Text>
        </CardBody>
        <CardFooter>
            <Stack>
                <Button variant='black' size='24'>
                    Подписаться
                </Button>
                <Button variant='lime' size='24'>
                    Читать
                </Button>
            </Stack>
            {statistics && <Statistics data={statistics} />}
        </CardFooter>
    </>
);

export default WithUser;
