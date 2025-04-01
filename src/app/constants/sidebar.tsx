import { Image } from '@chakra-ui/react';

import AppleIcon from '../icons/apple.svg';
import BreadIcon from '../icons/bread_and_rolling_pin.svg';
import ChildIcon from '../icons/child.svg';
import CupIcon from '../icons/cup.svg';
import EggplantIcon from '../icons/eggplant.svg';
import FryingPanIcon from '../icons/frying_pan.svg';
import GrillIcon from '../icons/grill.svg';
import HealthyIcon from '../icons/healthy.svg';
import InternationalFoodIcon from '../icons/international_food.svg';
import JarIcon from '../icons/jar.svg';
import LeafsIcon from '../icons/leafs.svg';
import MortarIcon from '../icons/mortar_and_pestle.svg';
import PotIcon from '../icons/pot.svg';

export const items = [
    {
        icon: <Image src={EggplantIcon} />,
        label: 'Салаты',
    },
    {
        icon: <Image src={AppleIcon} />,
        label: 'Закуски',
    },
    {
        icon: <Image src={PotIcon} />,
        label: 'Первые блюда',
    },
    {
        icon: <Image src={FryingPanIcon} />,
        label: 'Вторые блюда',
    },
    {
        icon: <Image src={BreadIcon} />,
        label: 'Десерты, выпечка',
    },
    {
        icon: <Image src={GrillIcon} />,
        label: 'Блюда на гриле',
    },
    {
        icon: <Image src={LeafsIcon} />,
        label: 'Веганская кухня',
    },
    {
        icon: <Image src={ChildIcon} />,
        label: 'Детские блюда',
    },
    {
        icon: <Image src={HealthyIcon} />,
        label: 'Лечебное питание',
    },
    {
        icon: <Image src={InternationalFoodIcon} />,
        label: 'Национальные',
    },
    {
        icon: <Image src={MortarIcon} />,
        label: 'Соусы',
    },
    {
        icon: <Image src={CupIcon} />,
        label: 'Напитки',
    },
    {
        icon: <Image src={JarIcon} />,
        label: 'Заготовки',
    },
];
