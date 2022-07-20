import Avatar from '@mui/material/Avatar';
import { useFormik } from 'formik';
import React from 'react'
import Form from '../Components/Form/Form';
import { registrationSchema } from '../models/schemaValidations';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

type Props = {}

const Register = (props: Props) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cnp: ''
        },
        validationSchema: registrationSchema,
        onSubmit: (values) => {
            console.log('submit values', values)
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
                    Sign Up
                </Typography>
            </Form.Header>
            <Form.Body>
                <TextField
                    margin="normal"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    value={formik.values.cnp}
                    onChange={formik.handleChange}
                    error={formik.touched.cnp && Boolean(formik.errors.cnp)}
                    helperText={formik.touched.cnp && formik.errors.cnp}
                    required
                    fullWidth
                    id="cnp"
                    label="CNP"
                    autoFocus
                />
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
            </Form.Body>

            <Form.Footer>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="/login" variant="body2">
                            {"Have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
            </Form.Footer>
        </Form>
    )
}

export default Register