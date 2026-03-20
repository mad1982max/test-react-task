import { Table, TableHead, TableRow, TableCell, TableBody, Skeleton, TableContainer } from "@mui/material";
import { transactionTableHeaders, tableWrapperStyles, ROWS_IN_SKELETON } from "../../constants/tweaks";

/**
 * Renders table skeleton while transaction data is loading.
 * @returns {import("react").ReactElement}
 */
export const TransactionTableSkeleton = () => {
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
                    {Array.from({ length: ROWS_IN_SKELETON }).map((_, index) => (
                        <TableRow key={index}>
                            {transactionTableHeaders.map((_, cellIndex) => (
                                <TableCell key={cellIndex}>
                                    <Skeleton width="100%" />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
