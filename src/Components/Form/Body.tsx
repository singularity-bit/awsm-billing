import Box from '@mui/material/Box';
import React, { FC } from 'react'

type Props = {
    children: React.ReactNode | React.ReactNode[];
}

const Body: FC<Props> = ({ children }) => {
    return (
        <Box sx={{ mt: 1 }}>
            {children}
        </Box>
    )
}

export default Body