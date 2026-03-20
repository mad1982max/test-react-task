import { Table, TableHead, TableRow, TableCell, TableBody, Skeleton, TableContainer } from "@mui/material";
import { clientTableHeaders, tableWrapperStyles } from "../../constants/tweaks";
import { ROWS_IN_SKELETON } from "../../constants/tweaks";

/**
 * Renders table skeleton while client data is loading.
 * @returns {import("react").ReactElement}
 */
export const ClientsTableSkeleton = () => {
    return (
        <TableContainer
            sx={tableWrapperStyles}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        {clientTableHeaders.map((header) => (
                            <TableCell key={header.id}>{header.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.from({ length: ROWS_IN_SKELETON }).map((_, index) => (
                        <TableRow key={index}>
                            {clientTableHeaders.map((__, cellIndex) => (
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
