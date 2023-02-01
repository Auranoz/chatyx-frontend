import React from 'react';
import Typography from '@mui/material/Typography';

import { BottomContentProps } from '../consts';

const BottomContent: React.FC<BottomContentProps> = ({ bottomLeft, bottomRight }) => (
    <Typography>
        {bottomLeft}
        {bottomRight}
    </Typography>
);

export default BottomContent;
