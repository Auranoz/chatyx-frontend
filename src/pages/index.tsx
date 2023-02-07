import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute, PublicRoute } from 'entities/user';
import SignInPage from './login';
import SignUpPage from './register';
import HomePage from './home';
import ChatsPage from './chats';

const Routing: React.FC = () => (
    <Routes>
        <Route path="/" element={<PublicRoute component={<HomePage />} />} />
        <Route path="/login" element={<PublicRoute component={<SignInPage />} />} />
        <Route path="/register" element={<PublicRoute component={<SignUpPage />} />} />
        <Route path="/chats" element={<ProtectedRoute component={<ChatsPage />} />} />
    </Routes>
);

export default Routing;
