import { Link } from "react-router-dom";
import { useClientStore } from "../../stores/useClientStore";
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Checkbox,
    Button,
    Chip,
    TableFooter,
    TablePagination,
} from "@mui/material";
import { ROUTE } from "../../constants/routes";
import { chipStatusColors, clientTableHeaders, tableWrapperStyles, locale, currencyOptions } from "../../constants/tweaks";

/**
 * @typedef {Object} ClientsTableProps
 * @property {import("../../data/mockClients").Client[]} clients - Client rows for the current page.
 * @property {number} total - Total number of filtered clients.
 * @property {number} page - Current page index.
 * @property {number} rowsPerPage - Number of rows rendered per page.
 * @property {(newPage: number) => void} onPageChange - Pagination page change callback.
 */

/**
 * @param {ClientsTableProps} props
 * @returns {import("react").ReactElement}
 */

export const ClientsTable = ({
    clients,
    total,
    page,
    rowsPerPage,
    onPageChange,
}) => {
    const { selectedIds, toggleId } = useClientStore();

    return (
        <TableContainer
            sx={tableWrapperStyles}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {clientTableHeaders.map((header) => (
                            <TableCell key={header.id}>
                                {header.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {clients.map((client) => {
                        const isSelected = selectedIds.includes(client.id);
                        const localDateString = new Date(client.createdAt).toLocaleDateString(locale);
                        const balanceToDisplay = Number(client.balance ?? 0).toLocaleString(locale, currencyOptions);
                        return (
                            <TableRow key={client.id}>
                                <TableCell>
                                    <Checkbox
                                        checked={isSelected}
                                        onChange={() => toggleId(client.id)}
                                    />
                                </TableCell>

                                <TableCell>
                                    {client.firstName} {client.lastName}
                                </TableCell>

                                <TableCell>
                                    {client.email}
                                </TableCell>

                                <TableCell>
                                    <Chip
                                        label={client.status}
                                        color={chipStatusColors[client.status]}
                                    />
                                </TableCell>

                                <TableCell>
                                    {balanceToDisplay}
                                </TableCell>

                                <TableCell>
                                    {localDateString}
                                </TableCell>

                                <TableCell>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        component={Link}
                                        to={`${ROUTE.CLIENTS}/${client.id}`}
                                    >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TablePagination
                            count={total}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            onPageChange={(e, newPage) => onPageChange(newPage)}
                            rowsPerPageOptions={[rowsPerPage]}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};
