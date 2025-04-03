import { Flex, Image, useMediaQuery } from '@chakra-ui/react';

import logoImage from '../../assets/icons/logo-image.svg';
import logoText from '../../assets/icons/logo-text.svg';

const Logo = () => {
    const [isTablet] = useMediaQuery('(min-width: 768px)');
    return (
        <Flex gap='7px' justifyContent='center' alignItems='center'>
            <Image src={logoImage} width='32px' />
            {isTablet && <Image src={logoText} height='24px' />}
        </Flex>
    );
};

export default Logo;
