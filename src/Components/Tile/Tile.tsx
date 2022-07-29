import { Typography } from '@mui/material';
import React, { FC } from 'react'
import * as S from './Tile.styles'
type Props = {
  title?: string;
  children: React.ReactNode | React.ReactNode[];

}

const Tile: FC<Props> = ({ title, children }) => {
  return (
    <S.Wrapper display={'flex'} flexDirection='column' justifyContent='space-between' p={3}>
      <Typography variant='h5' fontWeight={500} pb={2}>
        {title}
      </Typography>
      {children}
    </S.Wrapper>
  )
}

export default Tile