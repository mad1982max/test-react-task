import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import {useClientStore} from "../stores/useClientStore";

export default function ClientDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { clients } = useClientStore();

  console.log({id,clients});

  const client = clients.find((c) => String(c.id) === String(id));

  if (!client) return <div>Client not found</div>;

  return (
    <Card sx={{ m: 3 }}>
      <CardContent>
        <Typography variant="h5">
          {client.firstName} {client.lastName}
        </Typography>

        <Typography>Email: {client.email}</Typography>
        <Typography>Status: {client.status}</Typography>
        <Typography>Balance: ${client.balance.toFixed(2)}</Typography>

        <Button sx={{ mt: 2 }} onClick={() => navigate("/clients")}>
          Back
        </Button>
      </CardContent>
    </Card>
  );
}