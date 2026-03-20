import { Layout } from '../components/Layout.jsx';

/**
 * Page component that displays a 404 Not Found error
 * Shown when users navigate to an undefined route
 * @returns {import('react').ReactElement} Rendered 404 page
 */
const NotFoundPage = () => {
    return (
        <Layout>
            <h2>404 — Not Found</h2>
        </Layout>
    );
}

export default NotFoundPage;