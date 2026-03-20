import {
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
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useClientStore } from "../stores/useClientStore";

export const ClientsTable = ({
    clients,
    total,
    page,
    rowsPerPage,
    onPageChange,
}) => {
    const { selectedIds, toggleId } = useClientStore();

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>Full Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Balance</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {clients.map((client) => (
                    <TableRow key={client.id}>
                        <TableCell>
                            <Checkbox
                                checked={selectedIds.includes(client.id)}
                                onChange={() => toggleId(client.id)}
                            />
                        </TableCell>

                        <TableCell>
                            {client.firstName} {client.lastName}
                        </TableCell>

                        <TableCell>{client.email}</TableCell>

                        <TableCell>
                            <Chip
                                label={client.status}
                                color={
                                    client.status === "Active"
                                        ? "success"
                                        : client.status === "Pending"
                                            ? "warning"
                                            : "default"
                                }
                            />
                        </TableCell>

                        <TableCell>
                            {client.balance.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </TableCell>

                        <TableCell>
                            {new Date(client.createdAt).toLocaleDateString()}
                        </TableCell>

                        <TableCell>
                            <Button
                                variant="contained"
                                size="small"
                                component={Link}
                                to={`/clients/${client.id}`}
                            >
                                <Typography>View</Typography>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
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
    );
};
