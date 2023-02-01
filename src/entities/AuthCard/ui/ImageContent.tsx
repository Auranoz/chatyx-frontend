import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import Chat from 'shared/assets/images/chat.png';
import { ImageContentProps } from '../consts';

const ContentStyle = styled('div')`
    margin-bottom: 2rem;
`;

const ImageContainerStyle = styled(Avatar)`
    width: 4rem;
    height: 4rem;
    margin: 0 auto 0.5rem;
` as typeof Avatar;

const ImageContent: React.FC<ImageContentProps> = ({ imageLabel }) => (
    <ContentStyle>
        <ImageContainerStyle src={Chat} />
        <Typography component="div" variant="h5">
            {imageLabel}
        </Typography>
    </ContentStyle>
);

export default ImageContent;
