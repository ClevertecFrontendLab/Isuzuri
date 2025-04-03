import './App.css';

import { Box, Flex } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <Flex direction='column' height='100vh'>
            <Header />
            <Box>
                <Sidebar />
            </Box>
        </Flex>
    );
}

export default App;
