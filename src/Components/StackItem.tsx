import Stack from '@mui/material/Stack'
import { ResponsiveStyleValue } from '@mui/system';
import React, { FC } from 'react'

type Props = {
  children: React.ReactNode | React.ReactNode[];
  direction?: ResponsiveStyleValue<"row" | "row-reverse" | "column" | "column-reverse"> | undefined
  spacing?: ResponsiveStyleValue<string | number> | undefined
  alignItems?: ResponsiveStyleValue<'stretch' | 'center' | 'start' | 'end'>
}

const StackItem: FC<Props> = ({ children, direction = 'column', spacing = 0, alignItems }) => {
  return (
    <Stack direction={direction} spacing={spacing} alignItems={alignItems}>
      {children}
    </Stack>
  )
}

export default StackItem