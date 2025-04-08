import { Button, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react';

import CustomBadge from '../../common/CustomBadge';
import Statistics from '../../common/Statistics';
import { CardProps } from '../types';

const WithoutImage = ({ title, description, statistics, badge }: CardProps) => (
    <>
        <CardHeader>
            {badge && <CustomBadge icon={badge.icon} text={badge.text} isInCard />}
            {statistics && <Statistics data={statistics} />}
        </CardHeader>
        <CardBody>
            <Heading>{title}</Heading>
            <Text noOfLines={3}>{description}</Text>
        </CardBody>
        <CardFooter>
            <Button variant='white' size='32'>
                5
            </Button>
            <Button variant='black' size='32'>
                15
            </Button>
        </CardFooter>
    </>
);

export default WithoutImage;
