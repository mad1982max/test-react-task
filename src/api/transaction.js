import { apiFetchClients } from "./fetchClients";

/**
 * Fake API to create a transaction and update client balance
 * @param {{accountId:string, transactionType:number, amount:number, comment?:string}} payload
 * @param {number} [delay=1000]
 * @returns {Promise<import("../data/mockClients").Client>} Updated client
 */
export const fakeApiCreate = async (payload, delay = 1000) => {
    const clients = await apiFetchClients(delay);

    const client = clients.find((client) => client.id === payload.accountId);
    if (!client) {
        throw new Error("Client not found");
    }

    const TRANSACTION_TYPES = {
        1: "in", 2: "out", 3: "in", 4: "out", 5: "in", 6: "out",
    };
    const direction = TRANSACTION_TYPES[payload.transactionType];

    const newBalance =
        direction === "in"
            ? Number(client.balance) + payload.amount
            : Number(client.balance) - payload.amount;

    const updatedClient = { ...client, balance: String(newBalance) };

    return updatedClient;
};

