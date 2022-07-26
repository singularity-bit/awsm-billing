
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navigation from '../../Components/Navigation';
import UserMenu from '../../Components/UserMenu';
import { useNavigation } from '../../hooks/requests/useNavigation';
import LoadingOverlay from '../../Components/LoadingOverlay';


export const Header: React.FC = () => {
    const { loading, data } = useNavigation();

    const logo = 'AWSM Billing';


    return (
        <>
            <LoadingOverlay isLoading={loading} />
            <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 0, borderBottom: 1, borderColor: 'text.primary' }}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                textDecoration: 'none',
                            }}
                        >
                            {logo}
                        </Typography>
                        {data?.navigation &&
                            <Navigation settings={data.navigation} />}


                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                textDecoration: 'none',
                                color: 'text.primary'
                            }}
                        >
                            {logo}
                        </Typography>
                        {
                            data?.profileSettings &&
                            <UserMenu settings={data.profileSettings} />
                        }


                    </Toolbar>
                </Container>
            </AppBar >
        </>

    )
}
