import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Button, Tabs, Tab, Box, Alert, Stack,
} from "@mui/material";
import { ROUTE } from '../constants/routes';
import { Layout } from "../components/Layout.jsx";
import { ClientInfoCard } from "../components/ClientInfoCard";
import { TransactionTable } from "../components/tables/TransactionTable";
import { TransactionTableSkeleton } from "../components/skeletons/TransactionTableSkeleton";
import { useFetchClientById } from "../hooks/useFetchClientById";
import { useFetchClientTransaction } from "../hooks/useFetchClientTransaction";
import { ClientInfoCardSkeleton } from "../components/skeletons/ClientCardSceleton";
import { MESSAGE } from "../constants/tweaks";

/** @typedef {{ id?: string }} ClientDetailRouteParams */

/**
 * Client detail page with account info and transaction history.
 * @returns {import("react").ReactElement}
 */
export default function ClientDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tab, setTab] = useState(0);

    const { transactions, loading: loadingTransactions, error: errorTransactions } =
        useFetchClientTransaction(id);

    const { client, loading: loadingClientById, error: errorClientById } = useFetchClientById(id);

    return (
        <Layout>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 2 }}>
                <Tabs value={tab} onChange={(e, v) => {
                    if (!client || loadingClientById || errorClientById) return;
                    setTab(v);
                }}>
                    <Tab label="Info" />
                    <Tab label="Transactions" />
                </Tabs>
            </Box>

            {tab === 0 && (
                <Stack sx={{ mt: 5 }} spacing={2} alignItems="center">

                    {!client && !loadingClientById && !errorClientById && (
                        <Alert severity="info">
                            {MESSAGE.CLIENT_NOT_FOUND}
                        </Alert>
                    )}

                    {loadingClientById && <ClientInfoCardSkeleton />}

                    {errorClientById && (
                        <Alert severity="error">
                            {MESSAGE.ERROR_LOADING_CLIENT}: {errorClientById.message}
                        </Alert>
                    )}
                    {client && <ClientInfoCard client={client} />}
                </Stack>
            )}

            {tab === 1 && (
                loadingTransactions ? (
                    <TransactionTableSkeleton />
                ) : errorTransactions ? (
                    <Alert severity="error">
                        {MESSAGE.ERROR_LOADING_TRANSACTIONS}: {errorTransactions.message}
                    </Alert>
                ) : (
                    <Box sx={{ mt: 2 }}>
                        <TransactionTable transactions={transactions} />
                    </Box>
                )
            )}

            <Button sx={{ mt: 2 }} onClick={() => navigate(ROUTE.CLIENTS)}>
                Back
            </Button>
        </Layout>
    );
}
