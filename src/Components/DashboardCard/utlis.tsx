import Box from "@mui/material/Box"
import React from "react"
import { DashboardCardProps } from "../../models"
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
export const createIcon = ({ icon }: DashboardCardProps) => {
    switch (icon) {
        case 'DownloadingOutlinedIcon':
            return (
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e1f5fe',
                    borderRadius: '50%',
                    height: '1rem',
                    width: '1rem',
                    padding: '0.7rem'
                }}>
                    <DownloadingOutlinedIcon htmlColor='#01579b' />
                </Box>
            )
        case 'GroupOutlinedIcon':
            return <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f3e5f5',
                borderRadius: '50%',
                height: '1rem',
                width: '1rem',
                padding: '0.7rem'
            }}>
                <GroupOutlinedIcon htmlColor='#4a148c' />
            </Box>
        case 'PaidOutlinedIcon':
            return <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ede7f6',
                borderRadius: '50%',
                height: '1rem',
                width: '1rem',
                padding: '0.7rem'
            }}>
                <PaidOutlinedIcon htmlColor='#311b92' />
            </Box>
        case 'ReceiptOutlinedIcon':
            return <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff8e1',
                borderRadius: '50%',
                height: '1rem',
                width: '1rem',
                padding: '0.7rem'
            }}><ReceiptOutlinedIcon htmlColor='#ff6f00' /></Box>
        default:
            return <></>
    }
}