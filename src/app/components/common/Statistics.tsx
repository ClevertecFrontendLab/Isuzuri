import { Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';

const Statistics = ({
    data,
    isInHeader = false,
}: {
    data: { icon: string; count: number }[];
    isInHeader?: boolean;
}) => {
    const [isDesktop] = useMediaQuery('(min-width: 768px)');

    return (
        <Flex
            alignItems='center'
            justifyItems='center'
            direction={isDesktop && isInHeader ? 'column' : 'row'}
            gap={isDesktop && isInHeader ? '24px' : '0px'}
        >
            {data.map((item) => (
                <Flex
                    key={item.icon}
                    p={isInHeader ? '4px 8px' : '4px'}
                    gap='6px'
                    alignItems='center'
                    justifyItems='center'
                >
                    <Image src={item.icon} />
                    <Text color='lime.dark' fontSize='12px' fontWeight='600'>
                        {item.count}
                    </Text>
                </Flex>
            ))}
        </Flex>
    );
};

export default Statistics;
