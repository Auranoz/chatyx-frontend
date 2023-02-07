import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Chat from 'shared/assets/images/chat.png';

export interface ImageContentProps {
    imageLabel: string;
}

const ImageContent: React.FC<ImageContentProps> = ({ imageLabel }) => (
    <ContentStyle>
        <ImageContainerStyle src={Chat} />
        <Typography component="div" variant="h5">
            {imageLabel}
        </Typography>
    </ContentStyle>
);

const ContentStyle = styled('div')`
    margin-bottom: 1rem;
`;

const ImageContainerStyle = styled(Avatar)`
    width: 4rem;
    height: 4rem;
    margin: 0 auto 0.5rem;
` as typeof Avatar;

export default ImageContent;
