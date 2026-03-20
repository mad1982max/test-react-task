import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Button, Tabs, Tab, Box, Alert,
    Stack
} from "@mui/material";
import { useClientStore } from "../stores/useClientStore";
import { ROUTE } from '../constants/routes';
import { Layout } from "../components/Layout.jsx";
import { useFetchClientTransaction } from "../hooks/useFetchClientTransaction";
import { ClientInfoCard } from "../components/ClientInfoCard";
import { TransactionTable } from "../components/tables/TransactionTable";
import { TransactionTableSkeleton } from "../components/skeletons/TransactionTableSkeleton";

export default function ClientDetailPage() {
    const { id } = useParams();
    const { transactions, loading: loadingTransactions, error: errorTransactions } = useFetchClientTransaction(id);
    const navigate = useNavigate();
    const { clients } = useClientStore();
    const [tab, setTab] = useState(0);

    const client = clients.find((client) => String(client.id) === String(id));

    if (!client) return <div>Client not found</div>;

    return (
        <Layout>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 2 }}>
                <Tabs value={tab} onChange={(e, v) => setTab(v)}>
                    <Tab label="Info" />
                    <Tab label="Transactions" />
                </Tabs>
            </Box>

            {tab === 0 && (
                <Stack sx={{ mt: 5 }} spacing={2} alignItems="center">
                    <ClientInfoCard client={client} />
                </Stack>
            )}

            {tab === 1 && (
                loadingTransactions ? (
                    <TransactionTableSkeleton />
                ) : errorTransactions ? (
                    <Alert severity="error">Error loading transactions: {errorTransactions.message}</Alert>
                ) : (
                    <Box sx={{ mt: 2 }}>
                        <TransactionTable transactions={transactions} />
                    </Box>)
            )}

            <Button
                sx={{ mt: 2 }}
                onClick={() => navigate(ROUTE.CLIENTS)}>
                Back
            </Button>

        </Layout >

    );
}
