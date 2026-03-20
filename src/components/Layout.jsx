import { Container, Box } from "@mui/material";

export const Layout = ({ children }) => {
    return (
        <Container maxWidth="xl">
            <Box p={2}>
                {children}
            </Box>
        </Container>
    );
}
