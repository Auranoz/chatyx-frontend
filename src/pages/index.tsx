import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignInPage from './login';
import SignUpPage from './register';
import HomePage from './home';
import ChatsPage from './chats';

const Routing: React.FC = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/chats" element={<ChatsPage />} />
    </Routes>
);

export default Routing;
