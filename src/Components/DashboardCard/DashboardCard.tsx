import { Typography } from '@mui/material';
import React, { FC } from 'react'

import { DashboardCardProps } from '../../models/index'
import * as S from './DashboardCard.styles'
import { createIcon } from './utlis';
const DashboardCard: FC<DashboardCardProps> = ({ content, icon, title }) => {

    return (
        <S.Wrapper>
            {createIcon({ icon })}
            <Typography variant="overline" gutterBottom component="div" fontWeight={500} pt={1} sx={{
                textTransform: 'uppercase'

            }}>
                {title}
            </Typography>
            <Typography variant="h4" gutterBottom component="div" fontWeight={500} sx={{
                textTransform: 'uppercase'
            }}>
                {content}
            </Typography>
        </S.Wrapper >
    )
}

export default DashboardCard