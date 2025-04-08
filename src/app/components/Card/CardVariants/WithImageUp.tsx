import { Box, CardFooter, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { CardBody } from '@chakra-ui/react';
import { CardHeader } from '@chakra-ui/react';
import React from 'react';

import CustomBadge from '../../common/CustomBadge';
import Statistics from '../../common/Statistics';
import { CardProps } from '../types';

const WithImageUp = ({ coverImage, title, description, statistics, badge }: CardProps) => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <>
            {badge && isMobile && <CustomBadge icon={badge.icon} text={badge.text} isInCard />}
            <CardHeader p={0}>
                <Box w='100%' h={isMobile ? '128px' : '100%'}>
                    <Image src={coverImage} w='100%' h='100%' objectFit='cover' />
                </Box>
            </CardHeader>
            <CardBody>
                <Heading noOfLines={isMobile ? 2 : 1}>{title}</Heading>
                {!isMobile && <Text noOfLines={3}>{description}</Text>}
            </CardBody>
            <CardFooter>
                {!isMobile && badge && <CustomBadge icon={badge.icon} text={badge.text} />}
                {statistics && <Statistics data={statistics} isRow />}
            </CardFooter>
        </>
    );
};

export default WithImageUp;
