import { useEffect, useState } from "react";
import { useClientStore } from '../stores/useClientStore';
import { getAllClients } from '../api/getAllClients';

/**
 * Custom hook to fetch clients data on component mount
 * @returns {{isLoading: boolean, error: Error|null}} Hook state object
 * @property {boolean} isLoading - Whether data is currently being fetched
 * @property {Error|null} error - Error object if fetch failed, null otherwise
 */
export const useFetchClients = () => {
    const { setClients, clients } = useClientStore();
    const [isLoading, setIsLoading] = useState(() => clients.length === 0);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (clients.length > 0) return;
        getAllClients()
            .then((data) => {
                setClients(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [clients.length, setClients]);
    return { isLoading, error };
}