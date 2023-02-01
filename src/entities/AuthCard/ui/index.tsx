import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import ImageContent from './ImageContent';
import { ImageContentProps, BottomContentProps } from '../consts';
import BottomContent from './BottomContent';

const AuthBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8rem auto 0;
` as typeof Box;

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

interface AuthCardProps extends ImageContentProps, BottomContentProps {}

const AuthCard: React.FC<PropsWithChildren<AuthCardProps>> = ({
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

export default AuthCard;
