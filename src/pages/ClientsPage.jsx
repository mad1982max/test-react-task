import { useEffect, useState } from "react";
import {
    TextField,
    Select,
    MenuItem,
    Button,
    Snackbar,
    CircularProgress,
} from "@mui/material";

import { ClientsTable } from "../components/ClientsTable";
import { useClientStore } from "../stores/useClientStore";
import { useFetchClients } from "../hooks/useFetchClients";
import CreateTransactionDialog from "../components/CreateTransactionDialog";
import { ROWS_PER_PAGE } from "../constants/tweaks";

const ClientsPage = () => {
    const { isLoading, error } = useFetchClients();
    const {
        clients,
        getFiltered,
        filters,
        setFilter,
        selectedIds,
        clearSelection,
    } = useClientStore();

    const [page, setPage] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [snackbar, setSnackbar] = useState(false);

    const filtered = getFiltered();

    useEffect(() => {
        setPage(0);
    }, [filters.search, filters.status]);

    const paginated = filtered.slice(
        page * ROWS_PER_PAGE,
        page * ROWS_PER_PAGE + ROWS_PER_PAGE
    );

    return (
        <>
            <h2>Clients Page</h2>

            {/* Search */}
            <TextField
                label="Search"
                value={filters.search}
                onChange={(e) => setFilter("search", e.target.value)}
                sx={{ mr: 2 }}
            />

            {/* Status filter */}
            <Select
                value={filters.status}
                onChange={(e) => setFilter("status", e.target.value)}
                sx={{ mr: 2 }}
            >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
            </Select>

            {/* Bulk Action */}
            {selectedIds.length > 0 && (
                <Button
                    variant="contained"
                    onClick={() => setOpenDialog(true)}
                    sx={{ mr: 2 }}
                >
                    Bulk Action
                </Button>
            )}

            {/* Loading */}
            {isLoading && <CircularProgress />}

            {/* Error */}
            {error && <div>Error: {error.message}</div>}

            {/* Table */}
            {!isLoading && !error && (
                <ClientsTable
                    clients={paginated}
                    total={filtered.length}
                    page={page}
                    rowsPerPage={ROWS_PER_PAGE}
                    onPageChange={setPage}
                />
            )}

            {/* Dialog */}
            <CreateTransactionDialog
                open={openDialog}
                accounts={clients.filter((c) => selectedIds.includes(c.id))}
                onClose={() => setOpenDialog(false)}
                onSuccess={() => {
                    clearSelection();
                    setOpenDialog(false);
                    setSnackbar(true);
                }}
            />

            {/* Snackbar */}
            <Snackbar
                open={snackbar}
                autoHideDuration={3000}
                onClose={() => setSnackbar(false)}
                message="Transaction created successfully"
            />
        </>
    );
};

export default ClientsPage;
