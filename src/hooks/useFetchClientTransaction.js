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
        const fetchTransactions = async () => {
            setLoading(true);
            try {
                const response = await getClientTransactions(clientId);
                setTransactions(response);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (clientId) {
            fetchTransactions();
        }
    }, [clientId]);

    return { transactions, loading, error };
}