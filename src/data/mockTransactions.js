/**
 * @typedef {Object} Transaction
 * @property {string} id - Unique identifier for the transaction
 * @property {string} date - Transaction date in YYYY-MM-DD format
 * @property {"Deposit"|"Withdrawal"|"Bonus In"|"Bonus Out"|"Credit In"|"Credit Out"} type - Transaction type
 * @property {string} amount - Transaction amount
 * @property {"Completed"|"Pending"|"Failed"} status - Transaction processing status
 */

/**
 * Mock transaction history
 * @type {Transaction[]}
 */
export const transactions = [
    { id: '1', date: "2025-02-01", type: "Deposit", amount: "500", status: "Completed" },
    { id: '2', date: "2025-02-10", type: "Withdrawal", amount: "200", status: "Pending" },
    { id: '3', date: "2025-03-05", type: "Bonus In", amount: "100", status: "Completed" },
];