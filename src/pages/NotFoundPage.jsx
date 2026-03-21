import { MESSAGE } from '../constants/tweaks.js';
import { Layout } from '../components/Layout.jsx';
import { Typography } from '@mui/material';

/**
 * Page component that displays a 404 Not Found error
 * Shown when users navigate to an undefined route
 * @returns {import('react').ReactElement} Rendered 404 page
 */
const NotFoundPage = () => {
    return (
        <Layout>
            <Typography variant="h2">
                {MESSAGE.PAGE_NOT_FOUND}
            </Typography>
        </Layout>
    );
}

export default NotFoundPage;