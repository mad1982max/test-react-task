import { useClientStore } from "../stores/useClientStore";
import { getClientById } from "../api/getClientById";
import { useEffect, useState } from "react";

export const useFetchClientById = (clientId) => {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { clients } = useClientStore();

    useEffect(() => {
        if (!clientId) {
            setClient(null);
            setError(null);
            setLoading(false);
            return;
        }

        const found = clients.find((c) => String(c.id) === String(clientId));
        if (found) {
            setClient(found);
            setError(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);
        getClientById(clientId)
            .then((data) => {
                setClient(data);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [clientId, clients]);

    return { client, loading, error };
}
