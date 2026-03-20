
import { Card, CardContent, Chip, Skeleton, Stack, Typography } from "@mui/material"

/**
 * Skeleton placeholder for client info card while loading.
 * @returns {import("react").ReactElement}
 */
export const ClientInfoCardSkeleton = () => {
    return (
        <Card sx={{ m: 3, width: 400, backgroundColor: "#f5f5f5" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h5">
                    <Skeleton width={60} />
                </Typography>
                <Chip size="small"
                    label={<Skeleton width={60} />}
                    color="default"
                    sx={{ mb: 2 }} />
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{ mt: 1 }}
                    alignItems="center">
                    <Skeleton width={120} />

                    <Skeleton width={120} />
                </Stack>
            </CardContent>
        </Card>
    )
}