import { useClientStore } from "../stores/useClientStore";
import { getClientById } from "../api/getClientById";
import { useEffect, useState } from "react";

export const useFetchClientById = (clientId) => {
    const { clients } = useClientStore();
    const currentId = String(clientId ?? "");
    const storeClient = clients.find((c) => String(c.id) === currentId) || null;

    const [fetchedById, setFetchedById] = useState({ id: "", client: null });
    const [errorById, setErrorById] = useState({ id: "", error: null });

    useEffect(() => {
        if (!currentId || storeClient) {
            return;
        }

        let active = true;

        getClientById(currentId)
            .then((data) => {
                if (!active) return;
                setFetchedById({ id: currentId, client: data });
                setErrorById({ id: currentId, error: null });
            })
            .catch((err) => {
                if (!active) return;
                setFetchedById({ id: currentId, client: null });
                setErrorById({ id: currentId, error: err });
            });

        return () => {
            active = false;
        };
    }, [currentId, storeClient]);

    const fetchedClient = fetchedById.id === currentId ? fetchedById.client : null;
    const error = errorById.id === currentId ? errorById.error : null;
    const client = storeClient || fetchedClient;
    const hasSettledForCurrentId = fetchedById.id === currentId || errorById.id === currentId;
    const loading = Boolean(currentId) && !storeClient && !hasSettledForCurrentId;

    return { client, loading, error };
}
