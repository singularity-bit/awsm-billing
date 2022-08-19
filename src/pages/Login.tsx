import Avatar from "@mui/material/Avatar";
import LoadingButton from '@mui/lab/LoadingButton';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { FC } from "react";
import Form from "../Components/Form/Form";
import { useFormik } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { loginSchema } from "../models/schemaValidations";
import { useAction } from "../hooks/useAction";
import { useLogin } from "../hooks/requests/useLogin";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
    const { loginUser, loading } = useLogin();
    const { loginAction } = useAction();

    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            loginUser({
                variables: {
                    input: { ...values },
                },
            })
                .then((res) => {
                    res.data?.login.token &&
                        loginAction({
                            token: res.data.login.token || null,
                            isAuth: true,
                        });
                })
                .then(() => navigate("/", { replace: true }));
        },
        validateOnBlur: true,
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Header>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
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
                <LoadingButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    loading={loading}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </LoadingButton>
                <Grid container>
                    <Grid item>
                        <Link href="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Form.Footer>
        </Form>
    );
};
