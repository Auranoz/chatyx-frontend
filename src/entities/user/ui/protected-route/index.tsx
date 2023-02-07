import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { useAppSelector } from 'shared/hooks';

interface Props {
    component: JSX.Element;
}

export const ProtectedRoute: React.FC<Props> = ({ component }) => {
    const location = useLocation();
    const token = useAppSelector(state => state.userAuthSlice);

    if (!token) {
        return <Navigate to="/login" state={{ from: location, msg: 'You are not authorized!' }} />;
    }

    return component;
};
