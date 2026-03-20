import { useEffect, useState } from "react";
import { useClientStore } from '../stores/useClientStore';
import { apiFetchClients } from '../api/fetchClients';

/**
 * Custom hook to fetch clients data on component mount
 * @returns {{isLoading: boolean, error: Error|null}} Hook state object
 * @property {boolean} isLoading - Whether data is currently being fetched
 * @property {Error|null} error - Error object if fetch failed, null otherwise
 */
export const useFetchClients = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { setClients, clients } = useClientStore();

    useEffect(() => {
        if (clients.length > 0) return;
        setIsLoading(true);
        apiFetchClients()
            .then((data) => {
                setClients(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [setClients]);
    return { isLoading, error };
}