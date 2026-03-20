import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Checkbox,
    Button,
    TextField,
    Select,
    MenuItem,
    Chip,
    Snackbar,
    CircularProgress,
} from "@mui/material";

/**
 * @typedef {Object} ClientsTableProps
 * @property {import("../data/mockClients").Client[]} clients - Array of client objects to display in the table
 */

/**
 * Displays clients in a Material-UI table with columns for name, email, status, balance, created date, and actions
 * @param {ClientsTableProps} props - Component props
 * @returns {JSX.Element} Rendered table component
 */
export const ClientsTable = ({ clients }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
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
                        <TableCell>{client.firstName} {client.lastName}</TableCell>
                        <TableCell>{client.email}</TableCell>
                        <TableCell>{client.status}</TableCell>
                        <TableCell>${client.balance.toFixed(2)}</TableCell>
                        <TableCell>{new Date(client.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                href={`/clients/${client.id}`}
                                style={{ marginRight: 8 }}>
                                View
                            </Button>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
