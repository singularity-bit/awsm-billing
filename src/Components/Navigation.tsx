import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { FC, useMemo, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderProps } from '../models';
import Link from '@mui/material/Link'
import CustomTabs from './Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';


const Navigation: FC<HeaderProps> = ({ settings, onClick, onClose }) => {
    const paths = useMemo(() => (settings.map(item => item)), [settings]);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const isMobile = useMediaQuery('(max-width:425px)');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            {isMobile && <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(event: React.MouseEvent<HTMLElement>) => {
                        handleOpenNavMenu(event);
                        onClick && onClick(event);
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={() => {
                        onClose && onClose();
                        handleCloseNavMenu()
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {paths?.map((page, id) => (
                        <MenuItem key={`${page.path}_${id}`} onClick={onClose}>
                            <Link href={page.path} underline="none" color="inherit">
                                {page.name}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>}
            {!isMobile && <CustomTabs tabs={paths} />}
        </>
    )
};

export default Navigation