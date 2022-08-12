import { Grid } from '@mui/material'
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
            wrap='nowrap'
            justifyContent="space-between"
            alignItems="center"
            container
            sx={{
                overflow: 'hidden',
                overflowX: 'scroll'
            }}
            gridAutoFlow={'column'}
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 2, md: 12 }}
        >
            {
                data.map((item, id) => {
                    return <Grid item xs={2} sm={2} md={3} key={`${item.title}_${id}`}>
                        <DashboardCard title={item.title} icon={item.icon} content={item.content} key={`${item.title}_${id}`} />
                    </Grid>
                })
            }

        </Grid >

    )
}

export default Dashboard