import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useClientStore } from "../stores/useClientStore";
import { ROUTE } from '../constants/routes';
import { Layout } from "../components/Layout.jsx";

export default function ClientDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { clients } = useClientStore();

    const client = clients.find((client) => String(client.id) === String(id));
    if (!client) return <div>Client not found</div>;

    return (
        <Layout>
            <Card sx={{ m: 3 }}>
                <CardContent>
                    <Typography variant="h5">
                        {client.firstName} {client.lastName}
                    </Typography>

                    <Typography>Email: {client.email}</Typography>
                    <Typography>Status: {client.status}</Typography>
                    <Typography>Balance: ${client.balance.toFixed(2)}</Typography>

                    <Button sx={{ mt: 2 }} onClick={() => navigate(ROUTE.CLIENTS)}>
                        Back
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    );
}