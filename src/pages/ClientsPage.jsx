import { CircularProgress } from "@mui/material";
import { ClientsTable } from '../components/ClientsTable';
import { useClientStore } from '../stores/useClientStore';
import { useFetchClients } from '../hooks/useFetchClients';

/**
 * Page component that displays all clients in a table
 * Fetches client data on mount and displays loading/error states
 * @returns {import('react').ReactElement} Rendered clients page
 */
const ClientsPage = () => {

    const { isLoading, error } = useFetchClients();
    const { clients } = useClientStore();
    return (
        <>
            <div>
                <h2>Clients Page</h2>
            </div>
            {isLoading && (
                <CircularProgress />
            )}
            {error && (
                <div>Error: {error.message}</div>
            )}
            {!isLoading && !error && (
                <ClientsTable clients={clients} />
            )}
        </>
    );
}

export default ClientsPage;