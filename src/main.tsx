import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';

import Layout from '~/app/layouts/Desktop/Layout';
import { store } from '~/store/configure-store.ts';
import theme from '~/theme';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path='/'
                            element={<Layout />}
                            children={[<Route path='/' element={<div>Home</div>} />]}
                        />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
