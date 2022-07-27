
import { Box, Button } from '@mui/material';
import React from 'react'
import Headline from '../Components/Headline/Headline';
import { LayoutAlign } from '../models';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useAppSelector } from '../hooks/redux';
import Dashboard from '../Components/Dashboard';
export const Homepage: React.FC = () => {
    const user = useAppSelector(state => state.user);

    return (
        <>
            <Headline
                title='Overview'
                subtitle={`Weclome ${user.firstName} ${user.lastName}`}
                variant={LayoutAlign.SPACE_BETWEEN}
            >
                <Box display='flex' justifyContent='space-between' alignItems='center' sx={{
                    '& button:not(:last-child)': {
                        marginRight: '1.5rem',
                    }
                }}>
                    <Button variant="outlined" size='large' startIcon={<CalendarTodayIcon />}>Last 30 Days</Button>
                    <Button variant="contained" size='large' startIcon={<AddIcon fontSize='small' />} >Create Invoice</Button>
                </Box>
            </Headline>
            <Dashboard />
        </>
    )
}
