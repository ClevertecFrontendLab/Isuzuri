import { Flex, Image, useMediaQuery } from '@chakra-ui/react';

import logoImage from '../../assets/images/logo-image.png';
import logoText from '../../assets/images/logo-text.png';

const Logo = () => {
    const [isDesktop] = useMediaQuery('(min-width: 768px)');
    return (
        <Flex gap='7px'>
            <Image src={logoImage} />
            {isDesktop && <Image src={logoText} />}
        </Flex>
    );
};

export default Logo;
