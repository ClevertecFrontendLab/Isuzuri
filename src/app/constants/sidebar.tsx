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
        icon: EggplantIcon,
        label: 'Салаты',
        children: ['Мясные салаты', 'Рыбные салаты', 'Овощные салаты', 'Тёплые салаты'],
    },
    {
        icon: AppleIcon,
        label: 'Закуски',
        children: [
            'Мясные закуски',
            'Рыбные закуски',
            'Овощные закуски',
            'Тёплые закуски',
            'Бутерброды',
        ],
    },
    {
        icon: PotIcon,
        label: 'Первые блюда',
        children: [
            'Мясные супы',
            'Овощные супы',
            'Бульоны',
            'Холодные супы',
            'Крем-супы',
            'Сметанные супы',
        ],
    },
    {
        icon: FryingPanIcon,
        label: 'Вторые блюда',
        children: [
            'Мясные',
            'Рыбные',
            'Овощные',
            'Из птицы',
            'Из грибов',
            'Из субпродуктов',
            'На пару',
        ],
    },
    {
        icon: BreadIcon,
        label: 'Десерты и выпечка',
        children: [
            'Пельмени, вареники',
            'Мучные гарниры',
            'Овощные гарниры',
            'Каши',
            'Суши',
            'Десерты и выпечка',
            'Блины и оладьи',
            'Пироги и пончики',
            'Торты',
            'Рулеты',
            'Кексы и маффины',
            'Сырники и ватрушки',
            'Из слоёного теста',
            'Из заварного теста',
            'Из песочного теста',
            'Ватрушки и сочни',
            'Хлеб',
            'Тесто для пиццы',
            'Кремы',
        ],
    },
    {
        icon: GrillIcon,
        label: 'Блюда на гриле',
        children: ['Говядина', 'Свинина', 'Птица', 'Рыба', 'Грибы', 'Овощи'],
    },
    {
        icon: LeafsIcon,
        label: 'Веганская кухня',
        children: ['Закуски', 'Первые блюда', 'Вторые блюда', 'Гарниры', 'Десерты', 'Выпечка'],
    },
    {
        icon: ChildIcon,
        label: 'Детские блюда',
        children: ['Без молока', 'Без сахара', 'Без аллергенов', 'Блюда для прикорма'],
    },
    {
        icon: HealthyIcon,
        label: 'Лечебное питание',
        children: [
            'Детская диета',
            'Диета №1',
            'Диета №2',
            'Диета №3',
            'Диета №5',
            'Диета №6',
            'Диета №7',
            'Диета №8',
            'Диета №9',
            'Диета №10',
            'Диета №11',
            'Диета №12',
            'Диета №13',
            'Диета №14',
            'Без глютена',
            'Без аллергенов',
        ],
    },
    {
        icon: InternationalFoodIcon,
        label: 'Национальные',
        children: [
            'Американская кухня',
            'Армянская кухня',
            'Греческая кухня',
            'Грузинская кухня',
            'Итальянская кухня',
            'Испанская кухня',
            'Китайская кухня',
            'Мексиканская кухня',
            'Паназиатская кухня',
            'Русская кухня',
            'Турецкая кухня',
            'Французская кухня',
            'Шведская кухня',
            'Японская кухня',
            'Другие кухни',
        ],
    },
    {
        icon: MortarIcon,
        label: 'Соусы',
        children: ['Соусы мясные', 'Соусы сырные', 'Маринады'],
    },
    {
        icon: CupIcon,
        label: 'Напитки',
        children: [
            'Соки и фреши',
            'Смузи',
            'Компоты',
            'Кисели',
            'Кофе',
            'Лечебный чай',
            'Квас',
            'Коктейли',
            'Алкогольные',
        ],
    },
    {
        icon: JarIcon,
        label: 'Заготовки',
        children: [
            'Молочные заготовки',
            'Мясные заготовки',
            'Рыбные заготовки',
            'Из огурцов',
            'Из помидоров',
            'Из грибов',
            'Овощные заготовки',
            'Салаты, икра',
            'Из фруктов и ягод',
        ],
    },
];
