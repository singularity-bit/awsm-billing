import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import { InvoiceStatus, TransactionProps } from '../../models'
import StackItem from '../StackItem'
import * as S from './TransactionItem.styles'


const TransactionItem: FC<TransactionProps> = ({ amount, customerName, date, invoiceNr, project, status }) => {
    const chipColor = ({ status }: Pick<TransactionProps, 'status'>) => {
        switch (status) {
            case InvoiceStatus.PAID:
                return 'success'
            case InvoiceStatus.PENDING:
                return 'warning'
            default:
                return 'warning'
        }
    }
    return (
        <S.Wrapper direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            paddingY={3}
        >
            <StackItem direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 0 }} key={`${customerName}_${project}`}>
                <Typography variant='h6' >
                    {customerName}
                </Typography>
                <Typography variant='h6' color={'#b0bec5'}>
                    {project}
                </Typography>
            </StackItem>

            <StackItem direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 0 }} key={`${invoiceNr}_${project}`} alignItems='center'>
                <Typography variant='h6' >
                    <Link href='#' underline='hover'>View Invoice</Link>
                </Typography>
                <Typography variant='h6' color={'#b0bec5'}>
                    {invoiceNr}
                </Typography>
            </StackItem>
            <StackItem>
                <Chip label={status} color={chipColor({ status })} />

            </StackItem>

            <StackItem direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 0 }} key={`${invoiceNr}_${date}`} alignItems='end'>
                <Typography variant='h6' >
                    {amount}
                </Typography>
                <Typography variant='h6' color={'#b0bec5'} >
                    {date}
                </Typography>
            </StackItem>
        </S.Wrapper>
    )
}

export default TransactionItem