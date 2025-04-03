import './App.css';

import { Flex } from '@chakra-ui/react';

import PotIcon from './assets/icons/pot.svg';
import CardAvatar from './components/Card/CardAvatar';
import CustomBadge from './components/common/CustomBadge';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
const mockBadge = {
    icon: PotIcon,
    text: 'Первые блюда',
};

function App() {
    return (
        <Flex direction='column' height='100vh'>
            <Header />
            <Flex>
                <Sidebar />
                <CustomBadge variant='lime' icon={mockBadge.icon} text={mockBadge.text} />
                <CardAvatar />
            </Flex>
        </Flex>
    );
}

export default App;
