import * as React from 'react';

import { useAppSelector } from 'shared/hooks';
import { Navigate } from 'react-router-dom';

interface Props {
    component: JSX.Element;
}

export const PublicRoute: React.FC<Props> = ({ component }) => {
    const token = useAppSelector(state => state.userAuthSlice);

    if (token) {
        return <Navigate to="/chats" />;
    }

    return component;
};
