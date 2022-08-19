import { TableBody, TableContainer, TableFooter, TablePagination, TableRow, } from '@mui/material';
import { default as MTable } from '@mui/material/Table';
import React, { FC, useState } from 'react'
import { device, TransactionProps } from '../../models';
import { TablePaginationActions } from './PaginationActions';

import { renderEmptyRows, Rows } from './Rows';
type Props = {
    rows: TransactionProps[]
}

const Table: FC<Props> = ({ rows }) => {
    const [page, setpage] = useState(0);
    const [rowsPerPage, setrowsPerPage] = useState(5);

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setpage(newPage);
    }
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setrowsPerPage(parseInt(event.target.value, 10));
        setpage(0)
    }


    return (
        <TableContainer >
            <MTable aria-label="custom pagination table" sx={{ minWidth: device.mobileL }}>
                <TableBody>
                    {
                        Rows({ rows }, rowsPerPage, page)
                    }
                    {
                        emptyRows > 0 && renderEmptyRows({ emptyRows })
                    }
                </TableBody>
                <TableFooter>
                    {
                        rows.length > rowsPerPage &&
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                rowsPerPage={rowsPerPage}
                                count={rows.length}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page'
                                    },
                                    native: true
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                                align={'left'}
                            />
                        </TableRow>
                    }

                </TableFooter>

            </MTable>
        </TableContainer>
    )
}

export default Table