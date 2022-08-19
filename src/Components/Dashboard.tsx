import { Grid, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { useDashboard } from '../hooks/requests/useDashboard'
import { device } from '../models'
import DashboardCard from './DashboardCard/DashboardCard'
import LoadingOverlay from './LoadingOverlay'



const Dashboard: FC = () => {
    const { data, loading } = useDashboard();
    const isMobile = useMediaQuery(device.laptopL);

    return (

        loading ? <LoadingOverlay isLoading={loading} /> :

            <Grid
                direction="row"
                wrap='nowrap'
                justifyContent="space-between"
                alignItems="center"
                container
                sx={{
                    overflow: 'hidden',
                    overflowX: isMobile ? 'scroll' : 'hidden',
                }}
                gridAutoFlow={'column'}
                spacing={{ xs: 6, md: 6 }}
                columns={{ xs: 12, sm: 12, md: 12 }}

            >
                {
                    data?.dashboard.map((item, id) => {
                        return <Grid item xs={12} sm={12} md={12} key={`${item.title}_${id}`}>
                            <DashboardCard title={item.title} icon={item.icon} content={item.content} key={`${item.title}_${id}`} />
                        </Grid>
                    })
                }

            </Grid >

    )
}

export default Dashboard