import { CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';

import CustomBadge from '../../common/CustomBadge';
import Statistics from '../../common/Statistics';
import { CardProps } from '../types';

const WithTextAndTag = ({ title, description, statistics, badge }: CardProps) => (
    <>
        <CardBody>
            <Heading>{title}</Heading>
            <Text marginTop='12px' noOfLines={3}>
                {description}
            </Text>
        </CardBody>
        <CardFooter>
            {badge && <CustomBadge icon={badge.icon} text={badge.text} isInCard />}
            {statistics && <Statistics data={statistics} />}
        </CardFooter>
    </>
);

export default WithTextAndTag;
