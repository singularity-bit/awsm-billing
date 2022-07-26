import Grid from '@mui/material/Grid'
import React from 'react'
import { Children } from '../../models'


export const BodyWrapper: React.FunctionComponent<Children> = ({ children }) =>
    <Grid container spacing={12} justifyContent='center' pt={5}>
        <Grid item md={9}>
            {children}
        </Grid>
    </Grid>