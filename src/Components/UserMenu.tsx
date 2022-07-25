import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import React, { FC, useMemo, useState } from 'react'
import { useAction } from '../hooks/useAction'
import { usePublicUserData } from '../hooks/usePublicUserData'
import { HeaderProps } from '../models'


const UserMenu: FC<HeaderProps> = ({ settings, onClick, onClose }) => {
    const paths = useMemo(() => (settings.map(item => item)), [settings]);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const { logoutAction } = useAction();
    const user = usePublicUserData();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={(event: React.MouseEvent<HTMLElement>) => {
                    onClick && onClick(event);
                    handleOpenUserMenu(event)
                }} sx={{ p: 0 }}>
                    <Avatar alt={user.data?.currentUser.user.firstName} src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => {
                    onClose && onClose()
                    handleCloseUserMenu();
                }}
            >
                {paths.map((setting) => (
                    <MenuItem key={setting.path} onClick={() => {
                        onClose && onClose();
                        handleCloseUserMenu();
                    }}>
                        <Link href={setting.path} underline="none" color="inherit">
                            {setting.name}
                        </Link>
                    </MenuItem>
                ))}
                <MenuItem key='menu_logout' onClick={() => {
                    logoutAction();
                    onClose && onClose();
                    handleCloseUserMenu();
                }}>
                    logout

                </MenuItem>
            </Menu>
        </Box>
    )
};

export default UserMenu