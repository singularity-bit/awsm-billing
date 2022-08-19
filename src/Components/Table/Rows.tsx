import { Chip, createTheme, Link, TableCell, TableRow, ThemeProvider, Typography } from "@mui/material"
import React, { useMemo } from "react"
import { TransactionProps } from "../../models"
import StackItem from "../StackItem"
import { chipColor } from "./utils"

type Props = {
    rows: TransactionProps[]
}
const theme = createTheme({
    palette: {
        success: {
            main: '#F1FEF3',
            contrastText: '#2e7d32'
        },
        warning: {
            main: '#FFF9F4',
            contrastText: '#ef6c00'
        }


    },
})
export const Rows = ({ rows }: Props, rowsPerPage = 0, page = 0) => {

    const memoRows = useMemo(() => rows, [rows])

    const ee = (rowsPerPage > 0
        ? memoRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : memoRows)
    return ee.map((row, id) => {
        return (
            <ThemeProvider theme={theme}>
                <TableRow key={`${id}_${row.invoiceNr}`}>
                    <TableCell scope='row' sx={{ paddingLeft: 0 }} key={`td_${row.customerName}_${row.project}_${id}`}>
                        <StackItem direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 0 }} key={`${row.customerName}_${row.project}_${id}`}>

                            <Typography variant='h6' >
                                {row.customerName}
                            </Typography>
                            <Typography variant='h6' color={'#b0bec5'}>
                                {row.project}
                            </Typography>

                        </StackItem>
                    </TableCell>
                    <TableCell style={{ width: 160 }} scope='row' key={`td_${row.invoiceNr}_${row.project}_${id}`}>
                        <StackItem direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 0 }} key={`${row.invoiceNr}_${row.project}_${id}`} >
                            <Typography variant='h6' >
                                <Link href='#' underline='hover'>View Invoice</Link>
                            </Typography>
                            <Typography variant='h6' color={'#b0bec5'}>
                                {row.invoiceNr}
                            </Typography>
                        </StackItem>

                    </TableCell>
                    <TableCell style={{ width: 100 }} scope='row' key={`td_status`}>
                        <StackItem>
                            <Chip label={row.status} color={chipColor({ status: row.status })} />
                        </StackItem>
                    </TableCell>
                    <TableCell scope='row' key={`td_${row.invoiceNr}_${row.date}_${id}`}>
                        <StackItem direction={{ xs: 'row', sm: 'column' }} spacing={{ xs: 1, sm: 0 }} key={`${row.invoiceNr}_${row.date}_${id}`} alignItems='end'>
                            <Typography variant='h6' >
                                {row.amount}
                            </Typography>
                            <Typography variant='h6' color={'#b0bec5'} >
                                {row.date}
                            </Typography>
                        </StackItem>
                    </TableCell>
                </TableRow>
            </ThemeProvider>

        )
    })
}
export const renderEmptyRows = ({ emptyRows = 0 }) => {
    return (
        <TableRow style={{ height: 53 * emptyRows }} key={`td_emptyrows`}>
            <TableCell colSpan={6} />
        </TableRow>
    )
}