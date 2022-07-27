import { Box, Grid } from '@mui/material'
import React, { FC } from 'react'
import { DashboardCardProps } from '../models'
import DashboardCard from './DashboardCard/DashboardCard'



const Dashboard: FC = () => {
    const data: DashboardCardProps[] = [
        {
            icon: 'GroupOutlinedIcon',
            title: 'clients',
            content: 12
        },
        {
            icon: 'ReceiptOutlinedIcon',
            title: 'invoices',
            content: 14
        },
        {
            icon: 'DownloadingOutlinedIcon',
            title: 'invoiced',
            content: '$ 65K'
        },
        {
            icon: 'PaidOutlinedIcon',
            title: 'paid',
            content: '$ 49K'
        }
    ]
    return (
        <Grid
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
            pt={5}
        >
            {data.map((item, id) => {
                return <Grid item xs={4} sm={4} md={3} key={`${item.title}_${id}`}>
                    <DashboardCard title={item.title} icon={item.icon} content={item.content} key={`${item.title}_${id}`} />
                </Grid>
            })}

        </Grid>

    )
}

export default Dashboard