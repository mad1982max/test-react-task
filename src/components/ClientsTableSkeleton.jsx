import { Table, TableHead, TableRow, TableCell, TableBody, Skeleton, TableContainer } from "@mui/material";
import { clientTableHeaders, tableWrapperStyles } from "../constants/tweaks";

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
                    {clientTableHeaders.map((_, index) => (
                        <TableRow key={index}>
                            <TableCell><Skeleton width={120} /></TableCell>
                            <TableCell><Skeleton width={180} /></TableCell>
                            <TableCell><Skeleton width={80} /></TableCell>
                            <TableCell><Skeleton width={100} /></TableCell>
                            <TableCell><Skeleton width={140} /></TableCell>
                            <TableCell><Skeleton width={60} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
