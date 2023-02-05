import React from 'react';
import Typography from '@mui/material/Typography';

export interface BottomContentProps {
    bottomLeft: React.ReactNode;
    bottomRight: React.ReactNode;
}

const BottomContent: React.FC<BottomContentProps> = ({ bottomLeft, bottomRight }) => (
    <Typography>
        {bottomLeft}
        {bottomRight}
    </Typography>
);

export default BottomContent;
