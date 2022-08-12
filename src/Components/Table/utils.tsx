import { InvoiceStatus, TransactionProps } from "../../models"

export const chipColor = ({ status }: Pick<TransactionProps, 'status'>) => {
    switch (status) {
        case InvoiceStatus.PAID:
            return 'success'
        case InvoiceStatus.PENDING:
            return 'warning'
        default:
            return 'warning'
    }
}

