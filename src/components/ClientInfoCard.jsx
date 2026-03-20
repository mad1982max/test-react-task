import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { locale, currencyOptions, chipStatusColors, } from "../constants/tweaks";

/**
 * @typedef {Object} ClientInfoCardProps
 * @property {import("../data/mockClients").Client} client - Client to display.
 */

/**
 * @param {ClientInfoCardProps} props
 * @returns {import('react').ReactElement}
 */
export const ClientInfoCard = ({ client }) => {
    return (
        <Card sx={{ m: 3, maxWidth: 400 }}>
            <CardContent>
                <Typography variant="h5">
                    {client.firstName} {client.lastName}
                </Typography>
                <Chip size="small"
                    label={client.status}
                    color={chipStatusColors[client.status]}
                    sx={{ mb: 2 }} />
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{ mt: 1 }}
                    alignItems="center">
                    <Typography>Email: {client.email}</Typography>

                    <Typography>
                        Balance: {Number(client.balance ?? 0).toLocaleString(locale, currencyOptions)}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}