
import { Box, Button, Divider, Grid } from '@mui/material';
import React from 'react'
import Headline from '../Components/Headline/Headline';
import { InvoiceStatus, LayoutAlign, TransactionProps } from '../models';
import AddIcon from '@mui/icons-material/Add';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useAppSelector } from '../hooks/redux';
import Dashboard from '../Components/Dashboard';
import TransactionItem from '../Components/TransactionItem/TransactionItem';
import Tile from '../Components/Tile/Tile';
export const Homepage: React.FC = () => {
    const user = useAppSelector(state => state.user);
    const transactions: TransactionProps[] = [
        {
            amount: "$22264.85",
            customerName: "Bondon Cadding",
            date: "7/5/2022",
            invoiceNr: "51720-653",
            project: "Vimbo",
            status: "PENDING"
        },
        {
            amount: "$20104.59",
            customerName: "Royce Mirams",
            date: "3/31/2022",
            invoiceNr: "48951-6032",
            project: "Skyvu",
            status: "PAID"
        },
        {
            amount: "$18375.42",
            customerName: "Filippa Uzielli",
            date: "7/9/2022",
            invoiceNr: "0051-0021",
            project: "Chatterpoint",
            status: "PENDING"
        },
        {
            amount: "$14393.30",
            customerName: "Sergeant Salkild",
            date: "2/26/2022",
            invoiceNr: "75857-2306",
            project: "Skiptube",
            status: "PENDING"
        },
        {
            amount: "$22408.71",
            customerName: "Kurtis Heisman",
            date: "7/31/2021",
            invoiceNr: "76058-103",
            project: "Jamia",
            status: "PAID"
        }
    ]
    return (
        <Grid container direction="column" justifyContent="flex-start" spacing={6}>
            <Grid item>
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
            </Grid>
            <Grid item>
                <Dashboard />
            </Grid>
            <Grid item>

                <Tile title='Recent Transactions'>
                    {
                        transactions.map((item, id) => {
                            return (
                                <>
                                    <TransactionItem
                                        amount={item.amount}
                                        customerName={item.customerName}
                                        date={item.date}
                                        invoiceNr={item.invoiceNr}
                                        project={item.project}
                                        status={item.status}
                                        key={`${item.invoiceNr}_${id}`}
                                    />
                                    <Divider orientation="horizontal" flexItem key={`divider_${id}`} />
                                </>
                            )
                        })
                    }
                </Tile>
            </Grid>


        </Grid>
    )
}
