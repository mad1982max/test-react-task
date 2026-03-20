import { transactions } from "../data/mockTransactions";

/**
 * Simulates fetching client transactions.
 * @param {string} id - Client ID for which to fetch transactions (not used in mock).
 * @param {number} [delay=1000] - Artificial API delay in milliseconds.
 * @returns {Promise<typeof transactions>} Promise that resolves with transactions.
 */
export const getClientTransactions = (id, delay = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(transactions);
        }, delay);
    });
};