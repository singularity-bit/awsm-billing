import Box from '@mui/material/Box';
import React, { FC } from 'react'
import { Children } from '../../models';

const Footer: FC<Children> = ({ children }) => {
    return (
        <Box sx={{ mt: 1 }}>
            {children}
        </Box>
    )
}

export default Footer