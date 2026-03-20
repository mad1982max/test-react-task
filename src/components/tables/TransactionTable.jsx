import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { locale, currencyOptions, transactionStatusColors, transactionTableHeaders, tableWrapperStyles } from "../../constants/tweaks";

/**
 * @typedef {Object} TransactionTableProps
 * @property {import("../../data/mockTransactions").Transaction[]} transactions - Transactions to display.
 */

/**
 * @param {TransactionTableProps} props
 * @returns {import("react").ReactElement}
 */
export const TransactionTable = ({ transactions }) => {
    return (
        <TableContainer
            sx={tableWrapperStyles}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        {transactionTableHeaders.map((header) => (
                            <TableCell key={header.id}>{header.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction) => {
                        const localDateString = new Date(transaction.date).toLocaleDateString(locale);
                        const balanceToDisplay = Number(transaction.amount ?? 0).toLocaleString(locale, currencyOptions);
                        return (
                            <TableRow key={transaction.id}>
                                <TableCell>
                                    {localDateString}
                                </TableCell>
                                <TableCell>
                                    {transaction.type}
                                </TableCell>
                                <TableCell>
                                    {balanceToDisplay}
                                </TableCell>
                                <TableCell>
                                    <Chip label={transaction.status} color={transactionStatusColors[transaction.status]} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};