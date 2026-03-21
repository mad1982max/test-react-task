import { useClientStore } from "../stores/useClientStore";
import { MESSAGE } from "../constants/tweaks";

/**
 * @typedef {Object} CreateTransactionPayload
 * @property {string} accountId - Target client account id.
 * @property {number} transactionType - Transaction type id.
 * @property {number} amount - Transaction amount.
 */

/**
 * Updates a client balance based on transaction direction.
 * @param {CreateTransactionPayload} payload - Transaction payload.
 * @param {number} [delay=1000] - Dummy API delay in milliseconds.
 * @returns {Promise<import("../data/mockClients").Client>} Updated client data.
 */
export const fakeApiCreate = async (payload, delay = 1000) => {
    const { clients } = useClientStore.getState();
    const client = clients.find((c) => c.id === payload.accountId);

    if (!client) throw new Error(MESSAGE.CLIENT_NOT_FOUND);

    const TRANSACTION_TYPES = {
        1: "in", 2: "out", 3: "in", 4: "out", 5: "in", 6: "out",
    };
    const direction = TRANSACTION_TYPES[payload.transactionType];

    const newBalance =
        direction === "in"
            ? Number(client.balance) + payload.amount
            : Number(client.balance) - payload.amount;

    const updatedClient = { ...client, balance: String(newBalance) };

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(updatedClient);
        }, delay);
    });
};
