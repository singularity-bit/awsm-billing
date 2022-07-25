import Box from '@mui/material/Box';
import React from 'react'

type Props = {
    variant?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNode[];

}

const ButtonWrapper: React.FC<Props> = ({ variant, children }) => {
    return (
        <Box
            sx={{
                ...variant
            }}
        >
            {children}
        </Box>
    )
}

export default ButtonWrapper