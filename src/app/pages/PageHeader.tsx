import {
    Box,
    Button,
    Flex,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Stack,
    Switch,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';

import FilterIcon from '~/app/assets/icons/filter.svg';
import SearchIcon from '~/app/assets/icons/search.svg';

const OverviewHeader = ({ title = 'Приятного аппетита!' }: { title?: string }) => {
    const [isDesktop, isTablet] = useMediaQuery(['(min-width: 1200px)', '(min-width: 768px)']);
    const headerWidth = isDesktop ? '578px' : isTablet ? '448px' : '100%';

    return (
        <Flex direction='column' align='center' p={isTablet ? '32px 0px' : '16px 0px'} gap='32px'>
            <Text
                fontWeight='700'
                fontSize={isTablet ? '48px' : '24px'}
                lineHeight={isTablet ? '100%' : '133%'}
            >
                {title}
            </Text>
            <Stack w={headerWidth} gap='16px' p='0px 30px 32px 30px'>
                <Flex gap='12px' h={isTablet ? '48px' : '32px'}>
                    <Button variant='outline' w='48px' h='48px' p='0px 12px'>
                        <Image src={FilterIcon} w='24px' h='24px' />
                    </Button>
                    <InputGroup>
                        <Input placeholder='Название или ингредиент...' h='48px' />
                        <InputRightElement h='48px' w='48px'>
                            <Image src={SearchIcon} w='18px' h='18px' />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Flex gap='16px' display={isDesktop ? 'flex' : 'none'}>
                    <Box display='flex' alignItems='center' gap='12px' whiteSpace='nowrap'>
                        <Text>Исключить мои аллергены</Text>
                        <Switch />
                    </Box>
                    <Select
                        placeholder='Выберите из списка...'
                        _placeholder={{ color: 'blackAlpha.700' }}
                    />
                </Flex>
            </Stack>
        </Flex>
    );
};

export default OverviewHeader;
