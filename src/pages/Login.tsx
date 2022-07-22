import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import Form from '../Components/Form/Form'
import { useFormik } from 'formik'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { loginSchema } from '../models/schemaValidations'
import { useAction } from '../hooks/useAction'
import { useLogin } from '../hooks/useLogin'


export const Login: FC = () => {
    const { data, loginUser } = useLogin();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            loginUser({
                variables: {
                    ...values
                }
            }).then(res => console.log('login res', res.data.login.token))
        },
        validateOnBlur: true
    });
    return (

        <Form onSubmit={formik.handleSubmit}>
            <Form.Header >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
            </Form.Header>
            <Form.Body>
                <TextField
                    margin="normal"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
            </Form.Body>

            <Form.Footer>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Form.Footer>
        </Form>
    )
}
