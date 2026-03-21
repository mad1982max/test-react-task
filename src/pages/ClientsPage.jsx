import { useEffect, useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";

import { Filters } from "../components/Filters";
import { ClientsTable } from "../components/tables/ClientsTable";
import { useClientStore } from "../stores/useClientStore";
import { useFetchClients } from "../hooks/useFetchClients";
import CreateTransactionDialog from "../components/CreateTransactionDialog";
import { MESSAGE, ROWS_PER_PAGE, SNACKBAR_AUTO_HIDE_DURATION } from "../constants/tweaks";
import { Layout } from "../components/Layout";
import { ClientsTableSkeleton } from "../components/skeletons/ClientsTableSkeleton";

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

    const paginatedClients = filtered.slice(
        page * ROWS_PER_PAGE,
        page * ROWS_PER_PAGE + ROWS_PER_PAGE
    );

    return (
        <Layout>
            <h2>Clients Page</h2>
            <Filters
                filters={filters}
                setFilter={setFilter} />

            {selectedIds.length > 0 && (
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => setOpenDialog(true)}
                    sx={{ mr: 2 }}
                >
                    Bulk Action
                </Button>
            )}

            {isLoading && <ClientsTableSkeleton />}

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error.message}
                </Alert>
            )}

            {!isLoading && !error && (
                <ClientsTable
                    clients={paginatedClients}
                    total={filtered.length}
                    page={page}
                    rowsPerPage={ROWS_PER_PAGE}
                    onPageChange={setPage}
                />
            )}

            <CreateTransactionDialog
                open={openDialog}
                accounts={clients.filter((client) => selectedIds.includes(client.id))}
                onClose={() => setOpenDialog(false)}
                onSuccess={() => {
                    clearSelection();
                    setOpenDialog(false);
                    setSnackbar(true);
                }}
            />

            <Snackbar
                open={snackbar}
                autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
                onClose={() => setSnackbar(false)}
                message={MESSAGE.TRANSACTION_SUCCESS}
            />
        </Layout>
    );
};

export default ClientsPage;
