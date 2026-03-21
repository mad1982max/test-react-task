import { transactions } from "../data/mockTransactions";

/**
 * Simulates fetching client transactions.
 * @param {string} _id - Client ID for which to fetch transactions (not used in mock).
 * @param {number} [delay=4000] - Delay in milliseconds.
 * @returns {Promise<typeof transactions>} Promise that resolves with transactions.
 */
export const getClientTransactions = (_id, delay = 4000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(transactions);
        }, delay);
    });
};