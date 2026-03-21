import { useEffect, useState } from "react";
import { getClientTransactions } from '../api/getAllClientTransactions';

/**
 * @typedef {import("../data/mockTransactions").Transaction} Transaction
 */

/**
 * Hook for fetching transactions for a specific client.
 * @param {string} clientId - The ID of the client whose transactions to fetch.
 * @returns {{ transactions: Transaction[], loading: boolean, error: Error|null }} - An object containing the transactions, loading state, and any error encountered.
 * @property {Transaction[]} transactions - Array of transactions for the client.
 * @property {boolean} loading - Indicates if the transactions are currently being fetched.
 * @property {Error|null} error - Error object if fetching failed, otherwise null.
 */
export const useFetchClientTransaction = (clientId) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;

        const fetchTransactions = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await getClientTransactions(clientId);
                if (!active) {
                    return;
                }

                setTransactions(response);
            } catch (err) {
                if (!active) {
                    return;
                }

                setError(err);
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };

        if (clientId) {
            fetchTransactions();
        } else {
            setTransactions([]);
            setError(null);
            setLoading(false);
        }

        return () => {
            active = false;
        };
    }, [clientId]);

    return { transactions, loading, error };
}