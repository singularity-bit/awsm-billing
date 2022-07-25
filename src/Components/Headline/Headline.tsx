
import { Typography } from '@mui/material';
import React from 'react'
import { LayoutAlign } from '../../models';
import * as S from './Headline.styled'

type Props = {
    title: string;
    subtitle?: string;
    variant?: LayoutAlign;
    children?: React.ReactNode | React.ReactNode[];
}

const Headline: React.FC<Props> = ({ subtitle, title, variant, children }) => {
    return (
        <S.Wrapper className={variant}>
            <S.Headline className={variant}>
                <Typography variant='h6' >
                    {title}
                </Typography>
                <Typography variant='subtitle1' >
                    {subtitle}
                </Typography>
            </S.Headline>
            {children}
        </S.Wrapper>
    )
}

export default Headline