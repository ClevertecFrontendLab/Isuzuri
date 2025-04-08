import { Image, Text, useMediaQuery } from '@chakra-ui/react';
import { Box, Button, CardBody, CardFooter, CardHeader, Heading, Stack } from '@chakra-ui/react';

import CustomBadge from '../../common/CustomBadge';
import Statistics from '../../common/Statistics';
import { CardProps } from '../types';

const WithImageLeft = ({ coverImage, title, description, statistics, badge }: CardProps) => {
    const [isMobile] = useMediaQuery('(max-width: 768px)');

    return (
        <>
            <Box flex='1' maxW='50%'>
                <Image src={coverImage} w='100%' h='100%' objectFit='cover' />
            </Box>
            {badge && <CustomBadge icon={badge.icon} text={badge.text} isInCard />}
            <Stack flex='1' maxW='50%'>
                <CardHeader>
                    {!isMobile && badge && <CustomBadge icon={badge.icon} text={badge.text} />}
                    {statistics && <Statistics data={statistics} isRow />}
                </CardHeader>
                <CardBody>
                    <Heading noOfLines={isMobile ? 2 : 1}>{title}</Heading>
                    {!isMobile && <Text noOfLines={3}>{description}</Text>}
                </CardBody>
                <CardFooter>
                    <Button variant='white' size={isMobile ? '24' : '32'}>
                        5
                    </Button>
                    <Button variant='black' size={isMobile ? '24' : '32'}>
                        15
                    </Button>
                </CardFooter>
            </Stack>
        </>
    );
};

export default WithImageLeft;
