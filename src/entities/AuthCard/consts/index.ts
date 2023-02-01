import React from 'react';

export interface ImageContentProps {
    imageLabel: string;
}

export interface BottomContentProps {
    bottomLeft: React.ReactNode;
    bottomRight: React.ReactNode;
}

export interface AuthInputData<T> {
    fingerprint: string;
    authData: T;
}
