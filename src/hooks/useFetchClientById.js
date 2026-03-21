import { useClientStore } from "../stores/useClientStore";
import { getClientById } from "../api/getClientById";
import { useEffect, useState } from "react";

/**
 * @typedef {import("../data/mockClients").Client} Client
 */

/**
 * @typedef {Object} ClientFetchState
 * @property {string} id
 * @property {Client|null} client
 */

/**
 * @typedef {Object} ClientErrorState
 * @property {string} id
 * @property {Error|null} error
 */

/**
 * @typedef {Object} UseFetchClientByIdResult
 * @property {Client|null} client
 * @property {boolean} loading
 * @property {Error|null} error
 */

/**
 * @param {string | number | null | undefined} clientId
 * @returns {UseFetchClientByIdResult}
 */
export const useFetchClientById = (clientId) => {
    const clients = useClientStore((state) => state.clients);
    const currentId = String(clientId ?? "");
    const storeClient = clients.find((client) => String(client.id) === currentId) || null;

    const [fetchedById, setFetchedById] = useState(
        /** @type {ClientFetchState} */({ id: "", client: null })
    );
    const [errorById, setErrorById] = useState(
        /** @type {ClientErrorState} */({ id: "", error: null })
    );

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
};
