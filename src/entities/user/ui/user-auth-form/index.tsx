import React, { PropsWithChildren } from 'react';
import { styled } from '@mui/material/styles';

import ImageContent, { ImageContentProps } from './image-content';
import BottomContent, { BottomContentProps } from './bottom-content';

interface AuthCardProps extends ImageContentProps, BottomContentProps {}

export const UserAuthForm: React.FC<PropsWithChildren<AuthCardProps>> = ({
    imageLabel,
    bottomLeft,
    bottomRight,
    children
}) => (
    <AuthBox>
        <ImageContent imageLabel={imageLabel} />
        <ContentWrapper>{children}</ContentWrapper>
        <BottomContent bottomLeft={bottomLeft} bottomRight={bottomRight} />
    </AuthBox>
);

const AuthBox = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem auto 0;
`;

const ContentWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 2rem;

    > div {
        margin-bottom: 1rem;
    }

    > div:last-child {
        margin-bottom: 0;
    }
`;
