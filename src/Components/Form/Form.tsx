import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'


const Form = ({ children, ...restProps }: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        component="form"
        {...restProps}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Container>
  )
}
Form.Header = Header;
Form.Body = Body;
Form.Footer = Footer;
export default Form
