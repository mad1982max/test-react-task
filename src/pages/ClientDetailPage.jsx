import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Button, Tabs, Tab, Box,
} from "@mui/material";
import { useClientStore } from "../stores/useClientStore";
import { ROUTE } from '../constants/routes';
import { Layout } from "../components/Layout.jsx";
import { useFetchClientTransaction } from "../hooks/useFetchClientTransaction";
import { ClientInfoCard } from "../components/ClientInfoCard";
import { TransactionTable } from "../components/tables/TransactionTable";

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
                <ClientInfoCard client={client} />
            )}

            {tab === 1 && (
                loadingTransactions ? (
                    <div>Loading transactions...</div>
                ) : errorTransactions ? (
                    <div>Error loading transactions: {errorTransactions.message}</div>
                ) : (
                    <Box sx={{ mt: 2 }}>
                        <TransactionTable transactions={transactions} />
                    </Box>)
            )}

            <Button sx={{ mt: 2 }} onClick={() => navigate(ROUTE.CLIENTS)}>
                Back
            </Button>

        </Layout >

    );
}
