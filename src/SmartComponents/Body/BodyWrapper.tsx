import Grid from '@mui/material/Grid'
import React from 'react'
import { Children } from '../../models'


export const BodyWrapper: React.FunctionComponent<Children> = ({ children }) =>
    <Grid container spacing={12} justifyContent='center' pt={5} columns={{ xs: 6, sm: 6, md: 12 }}>
        <Grid item xs={5} sm={5} md={9}>
            {children}
        </Grid>
    </Grid>