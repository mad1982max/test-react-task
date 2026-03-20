import { Container, Box } from "@mui/material";

/**
 * @typedef {Object} LayoutProps
 * @property {import("react").ReactNode} children - Nested page content.
 */

/**
 * @param {LayoutProps} props
 * @returns {import("react").ReactElement}
 */
export const Layout = ({ children }) => {
    return (
        <Container maxWidth="xl">
            <Box p={2}>
                {children}
            </Box>
        </Container>
    );
};
