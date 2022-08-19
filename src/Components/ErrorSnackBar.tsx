import React, { FC } from 'react'
import { Alert, AlertTitle } from "@mui/material";
import { useAction } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { v4 as uuidv4 } from 'uuid';

const ErrorSnackBar: FC = () => {
    const { open, error } = useTypeSelector(state => state.errorSnackBar.snackbar)
    const { closeError } = useAction();
    const alertID = uuidv4();

    return (
        <>
            {open &&
                <Alert
                    severity="error"
                    onClose={closeError}
                    key={alertID}>
                    <AlertTitle>{error.title}</AlertTitle>
                    {error.message}
                </Alert>
            }
        </>
    )
}

export default ErrorSnackBar